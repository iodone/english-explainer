import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { lookupWord } from '../data/dictionary'
import { things } from '../data/things'
import type { DictEntry, ThingData } from '../data/types'

const KNOWN_WORDS_KEY = 'known-words'

type WordListModule = typeof import('../data/word-list')

interface ThingLink {
  slug: string
  simpleName: string
}

interface WordGroup {
  letter: string
  words: string[]
}

function readKnownWords(): string[] {
  const storedValue = window.localStorage.getItem(KNOWN_WORDS_KEY)
  if (!storedValue) return []

  try {
    const parsedValue: unknown = JSON.parse(storedValue)
    if (!Array.isArray(parsedValue)) return []
    return parsedValue.filter((value): value is string => typeof value === 'string')
  } catch {
    return []
  }
}

function buildWordThingLinks(
  simpleWords: string[],
  simpleWordsSet: Set<string>,
): Map<string, ThingLink[]> {
  const wordThingLinks = new Map<string, ThingLink[]>()
  const lowerSimpleWords = new Set(simpleWords.map(word => word.toLowerCase()))

  const addLink = (thing: ThingData, word: string) => {
    const normalizedWord = word.toLowerCase()
    if (!simpleWordsSet.has(normalizedWord) && !lowerSimpleWords.has(normalizedWord)) return

    const links = wordThingLinks.get(normalizedWord) ?? []
    if (!links.some(link => link.slug === thing.slug)) {
      links.push({ slug: thing.slug, simpleName: thing.simpleName })
      wordThingLinks.set(normalizedWord, links)
    }
  }

  for (const thing of things) {
    for (const paragraph of thing.article) {
      for (const sentence of paragraph.sentences) {
        for (const segment of sentence) {
          if (typeof segment === 'string' || !segment.dict) continue

          const entry = lookupWord(segment.dict)
          addLink(thing, entry?.word ?? segment.dict)
        }
      }
    }
  }

  return wordThingLinks
}

function groupWordsByFirstLetter(words: string[]): WordGroup[] {
  const groups = new Map<string, string[]>()

  for (const word of words) {
    const firstCharacter = word.charAt(0).toUpperCase()
    const letter = /^[A-Z]$/.test(firstCharacter) ? firstCharacter : '#'
    const group = groups.get(letter) ?? []
    group.push(word)
    groups.set(letter, group)
  }

  return Array.from(groups.entries())
    .sort(([leftLetter], [rightLetter]) => leftLetter.localeCompare(rightLetter))
    .map(([letter, groupedWords]) => ({ letter, words: groupedWords }))
}

function DictionaryDetail({ entry }: { entry: DictEntry }) {
  return (
    <span className="mt-1 block text-xs leading-snug text-ink-soft">
      <span className="font-mono text-ink-faint">{entry.phonetic}</span>
      <span className="text-ink-faint"> · </span>
      <span className="font-mono text-ink-faint">{entry.pos}</span>
      <span className="text-ink-faint"> · </span>
      <span>{entry.meaning}</span>
    </span>
  )
}

function WordItem({
  word,
  entry,
  thingLinks,
  isKnown,
  onToggleKnown,
}: {
  word: string
  entry: DictEntry | null
  thingLinks: ThingLink[]
  isKnown: boolean
  onToggleKnown: (word: string) => void
}) {
  const navigate = useNavigate()

  return (
    <li className="hud-panel flex min-w-0 flex-col p-3">
      <div className="flex items-start justify-between gap-2">
        <button
          type="button"
          onClick={() => onToggleKnown(word)}
          aria-pressed={isKnown}
          className="flex min-w-0 flex-1 items-start justify-between gap-2 rounded-sm text-left"
        >
          <span
            className={`thing-title truncate text-lg transition-colors ${
              isKnown ? 'text-hud-cyan' : 'text-ink'
            }`}
          >
            {word}
          </span>
          <span
            className={`font-mono text-xs transition-colors ${
              isKnown ? 'text-hud-cyan' : 'text-ink-faint'
            }`}
            aria-hidden="true"
          >
            {isKnown ? '✓' : '○'}
          </span>
        </button>
      </div>

      {entry && <DictionaryDetail entry={entry} />}

      {thingLinks.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {thingLinks.map(thingLink => (
            <button
              key={thingLink.slug}
              type="button"
              onClick={() => navigate(`/thing/${thingLink.slug}`)}
              className="max-w-full rounded-sm border border-canvas-grid px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-hud-cyan transition-colors hover:bg-canvas-dark"
              title={`See ${thingLink.simpleName}`}
            >
              {thingLink.simpleName}
            </button>
          ))}
        </div>
      )}
    </li>
  )
}

export default function WordsPage() {
  const [query, setQuery] = useState('')
  const [knownWords, setKnownWords] = useState<string[]>(readKnownWords)
  const [wordList, setWordList] = useState<WordListModule | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)

  useEffect(() => {
    let isActive = true

    import('../data/word-list').then(
      module => {
        if (isActive) setWordList(module)
      },
      error => {
        if (isActive) {
          setLoadError(
            error instanceof Error ? error.message : 'Unable to load the word list.',
          )
        }
      },
    )

    return () => {
      isActive = false
    }
  }, [])

  const wordThingLinks = useMemo(
    () =>
      wordList
        ? buildWordThingLinks(wordList.SIMPLE_WORDS, wordList.SIMPLE_WORDS_SET)
        : new Map<string, ThingLink[]>(),
    [wordList],
  )
  const knownWordSet = useMemo(() => new Set(knownWords), [knownWords])
  const knownCount = useMemo(() => {
    if (!wordList) return 0
    return wordList.SIMPLE_WORDS.filter(word => knownWordSet.has(word)).length
  }, [knownWordSet, wordList])

  const normalizedQuery = query.trim().toLowerCase()
  const filteredWords = useMemo(() => {
    if (!wordList) return []
    if (!normalizedQuery) return wordList.SIMPLE_WORDS
    return wordList.SIMPLE_WORDS.filter(word =>
      word.toLowerCase().includes(normalizedQuery),
    )
  }, [normalizedQuery, wordList])

  const wordGroups = useMemo(
    () => groupWordsByFirstLetter(filteredWords),
    [filteredWords],
  )

  const toggleKnown = useCallback((word: string) => {
    const nextKnownWords = knownWords.includes(word)
      ? knownWords.filter(knownWord => knownWord !== word)
      : [...knownWords, word]

    setKnownWords(nextKnownWords)
    window.localStorage.setItem(KNOWN_WORDS_KEY, JSON.stringify(nextKnownWords))
  }, [knownWords])

  return (
    <div className="flex flex-1 flex-col">
      <section className="px-8 pt-10 pb-6">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="micro-label mb-2">C7 · VOCABULARY INDEX</div>
              <h1 className="thing-title text-5xl text-ink">Words</h1>
            </div>

            <div className="hud-panel corner-accent px-4 py-3">
              <div className="font-mono text-sm text-ink">
                {wordList
                  ? `${knownCount} / ${wordList.SIMPLE_WORDS.length} KNOWN`
                  : 'LOADING WORD LIST'}
              </div>
              <div className="micro-label mt-1">
                TEN HUNDRED WORDS · XKCD SIMPLE WRITER
              </div>
            </div>
          </div>

          <div className="hud-panel mt-6 flex items-center gap-3 px-4 py-3">
            <label className="micro-label shrink-0" htmlFor="word-search">
              SEARCH
            </label>
              <input
                id="word-search"
                type="search"
                value={query}
                disabled={!wordList}
                onChange={event => setQuery(event.target.value)}
              placeholder="Type part of a word…"
              className="min-w-0 flex-1 bg-transparent font-mono text-sm text-ink outline-none placeholder:text-ink-faint"
            />
            <span className="shrink-0 font-mono text-xs text-ink-faint">
              {wordList ? `${filteredWords.length} SHOWN` : '—'}
            </span>
          </div>
        </div>
      </section>

      <section className="flex-1 px-8 pb-12">
        <div className="mx-auto w-full max-w-6xl space-y-5">
          {loadError ? (
            <div className="hud-panel corner-accent flex min-h-40 flex-col items-center justify-center p-8 text-center">
              <p className="thing-title text-2xl text-ink">WORD LIST UNAVAILABLE</p>
              <p className="micro-label mt-3">{loadError.toUpperCase()}</p>
            </div>
          ) : !wordList ? (
            <div className="hud-panel corner-accent flex min-h-40 flex-col items-center justify-center p-8 text-center">
              <p className="thing-title text-2xl text-ink">LOADING WORDS…</p>
              <p className="micro-label mt-3">PREPARING THE VOCABULARY INDEX</p>
            </div>
          ) : wordGroups.length === 0 ? (
            <div className="hud-panel corner-accent flex min-h-40 flex-col items-center justify-center p-8 text-center">
              <p className="thing-title text-2xl text-ink">
                NO WORDS FOUND — try fewer letters
              </p>
              <p className="micro-label mt-3">QUERY · {query.trim().toUpperCase()}</p>
            </div>
          ) : (
            wordGroups.map(group => (
              <section key={group.letter} className="hud-panel p-4">
                <div className="mb-3 flex items-center justify-between border-b border-canvas-grid pb-2">
                  <h2 className="font-mono text-sm text-ink">{group.letter}</h2>
                  <span className="micro-label">{group.words.length} WORDS</span>
                </div>

                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.words.map(word => (
                    <WordItem
                      key={word}
                      word={word}
                      entry={lookupWord(word)}
                      thingLinks={wordThingLinks.get(word.toLowerCase()) ?? []}
                      isKnown={knownWordSet.has(word)}
                      onToggleKnown={toggleKnown}
                    />
                  ))}
                </ul>
              </section>
            ))
          )}
        </div>
      </section>

      <footer className="hud-panel flex items-center justify-between px-8 py-4">
        <span className="micro-label">TEN HUNDRED WORDS · XKCD SIMPLE WRITER</span>
        <Link to="/" className="font-mono text-xs text-hud-cyan no-underline">
          ← BACK TO THINGS
        </Link>
      </footer>
    </div>
  )
}
