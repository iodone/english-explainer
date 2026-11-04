import { runEnglishExplain } from '../runtime.js'
import lesson, { shapes } from 'english-explain:lesson'

window.__ENGLISH_EXPLAIN_DATA__ = { lesson, shapes }
window.__ENGLISH_EXPLAIN_START__ = ({ lesson: data, shapes: model }) => runEnglishExplain(data, model)
