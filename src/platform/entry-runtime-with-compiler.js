import Vue from './runtime/index'
import { warn } from '../core/utils/index'
import { compileToFunctions } from './compiler/index'

const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (el) {
  if (el === document.body || el === document.documentElement) {
    return warn(`Do not mount Vue to <html> or <body> - mount to normal elements instead.`)
  }

  const options = this.$options
  if (!options.render) {
    let template = options.template
    el = document.querySelector(el) 
    if (!template && el) {
      template = el.outerHTML
    }

    if (template) {
      let render = compileToFunctions(template)
      options.render = render
    }
  }
  return mount.call(this, el)
}

export default Vue