import { Link } from 'react-router-dom'
import { things, categories } from '../data/things'
import { countArticleWords, flattenSentences, sentencePlainText } from '../data/utils'
import type { ThingData } from '../data/types'
import { useState } from 'react'

/**
 * HomePage — gallery of all things with category filter
 */
export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? things
    : things.filter(t => t.category === activeCategory)

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero section */}
      <section className="px-8 pt-12 pb-8 text-center">
        <h1 className="thing-title text-5xl text-ink mb-4">
          Thing Explainer
        </h1>
        <p className="text-ink-soft max-w-xl mx-auto leading-relaxed">
          Complicated stuff in simple words. Each thing uses only the
          ten hundred most common words in English.
        </p>
        <div className="micro-label mt-4">COMPILED FROM RANDALL MUNROE</div>
      </section>

      {/* Category filters */}
      <nav className="flex items-center justify-center gap-3 px-8 pb-6">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`micro-label px-4 py-2 rounded-sm border transition-all ${
              activeCategory === cat.id
                ? 'border-hud-cyan text-hud-cyan bg-canvas-dark'
                : 'border-transparent text-ink-faint hover:text-ink-soft hover:border-ink-faint'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      {/* Thing cards grid */}
      <section className="flex-1 px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filtered.map((thing, i) => (
            <ThingCard key={thing.id} thing={thing} index={i} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="hud-panel px-8 py-4 flex items-center justify-between">
        <span className="micro-label">THING EXPLAINER — ENGLISH LEARNING TOOL</span>
        <span className="font-mono text-xs text-ink-faint">
          {things.length} THINGS LOADED
        </span>
      </footer>
    </div>
  )
}

function ThingCard({ thing, index }: { thing: ThingData; index: number }) {
  // 文章首句作描述预览；词数从结构化文章计算
  const firstSentence = sentencePlainText(flattenSentences(thing.article)[0])
  const words = countArticleWords(thing.article)

  return (
    <Link
      to={`/thing/${thing.slug}`}
      className="hud-panel corner-accent p-5 block no-underline group hover:border-hud-cyan transition-all duration-300"
    >
      {/* Index number */}
      <div className="flex items-start justify-between mb-3">
        <span className="font-mono text-xs text-ink-faint">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          className="w-2 h-2 rounded-full status-blink"
          style={{ backgroundColor: thing.color }}
        />
      </div>

      {/* Title */}
      <h2 className="thing-title text-xl text-ink mb-1 group-hover:text-hud-cyan transition-colors">
        {thing.simpleName}
      </h2>
      <p className="micro-label mb-3">{thing.realName.toUpperCase()}</p>

      {/* Description preview — 首句 */}
      <p className="text-sm text-ink-soft leading-relaxed line-clamp-3">
        {firstSentence}
      </p>

      {/* Bottom metrics — 学习相关：部件数 + 文章词数 */}
      <div className="flex items-center gap-4 mt-4 pt-3 border-t border-canvas-grid">
        <span className="font-mono text-xs text-ink-faint">
          {thing.parts.length} PARTS
        </span>
        <span className="font-mono text-xs text-ink-faint">·</span>
        <span className="font-mono text-xs text-ink-faint">
          {words} WORDS
        </span>
      </div>
    </Link>
  )
}