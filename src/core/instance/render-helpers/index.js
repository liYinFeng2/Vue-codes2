import { toString } from '../../utils/index'
import { createTextNode } from '../../vdom/index'

export function installRenderHelpers (target) {
  target._v = createTextNode
  target._s = toString
}