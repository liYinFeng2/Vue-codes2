import { pushTarget, popTarget } from './dep'

class Watcher {
  constructor (vm, expOrFun, cb, options, isRenderWatcher) {
    this.vm = vm
    this.cb = cb
    // $watcher
    this.user = !!options.user
    if (isRenderWatcher) {
      vm._watcher = this
    }
    if (typeof expOrFun == 'function') {
      this.getter = expOrFun
    } else {
      this.getter = getExpOrFun(expOrFun)
    }
    this.value = this.get()
  }

  get () {
    pushTarget(this)
    let val = this.getter.call(this.vm, this.vm)
    popTarget()
    return val
  }

  update () {
    if (this.user) {
      let oldValue = this.value
      let newValue = this.get()
      this.cb.call(this.vm, newValue, oldValue)
    } else {
      this.get()
    }
  }
}

export default Watcher

function getExpOrFun (path) {
  return function (e) {
    var pathArr = path.split('.')
    for (var i=0; i<pathArr.length; i++) {
      var item = pathArr[i]
      e = e[item]
    }
    return e
  }
}