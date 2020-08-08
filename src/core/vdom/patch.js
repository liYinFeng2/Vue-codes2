import { isUndef, isDef } from '../utils/index'

export function patch (oldVnode, vnode) {
  function updateProperties(vnode) {
    let newProps = vnode.data
    let elm = vnode.elm
    for (let key in newProps) {
      if (key === 'style') {
        for (let styleName in newProps.style) {
          elm.style[styleName] = newProps.style[styleName]
        }
      } else if (key === 'class') {
        elm.className = newProps.class
      } else {
        elm.setAttribute(key, newProps[key])
      }
    }
  }

  function createElm (vnode, parentElm, oldElm, insertedVnodeQueue) {
    let { tag, children, text } = vnode
    if (typeof tag === 'string') {
      vnode.elm = document.createElement(tag)
      updateProperties(vnode)
      children.forEach(child => {
        return vnode.elm.appendChild(createElm(child)) 
      })
      
    } else {
      vnode.elm = document.createTextNode(text)
    }
    return vnode.elm
  }

  function insert (parent, elm, oldElm) {
    parent.insertBefore(elm, oldElm.nextSibling)
    parent.removeChild(oldElm)
  }
   
  const insertedVnodeQueue = []
  if (isUndef(oldVnode)) {
    createElm(vnode)
  } else {
    const isRealElement = isDef(oldVnode.nodeType) 
    // $mount阶段挂载元素
    if (isRealElement) {
      const oldElm = oldVnode
      const parentElm = oldElm.parentNode
      let el = createElm(vnode, parentElm, oldElm, insertedVnodeQueue)
      insert(parentElm, el, oldElm)
    }
  }
  return vnode.elm
}