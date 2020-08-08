export default class Vnode {
  constructor (tag, data, children, text, context) {
    this.tag = tag
    this.data = data
    this.children = children
    this.text = text
    this.key = data && data.key
    // this.context = context
  }
}


export function createTextNode (text) {
  return new Vnode(undefined,undefined,undefined,text, undefined)
}