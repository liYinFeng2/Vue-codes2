import Vue from '../../core/index'
import { mountComponent } from '../../core/instance/lifecycle'
import { patch } from '../../core/vdom/patch'

Vue.prototype.__patch__ = patch

Vue.prototype.$mount = function (el) {
  return mountComponent(this, el)
}

export default Vue