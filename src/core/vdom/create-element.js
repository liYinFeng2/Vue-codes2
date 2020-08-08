import Vnode from './index'

export function createElement (context, tag, data = {}, ...children) {
  return new Vnode(tag, data, children, undefined, context)
}