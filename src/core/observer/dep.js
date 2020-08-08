export default class Dep {
  constructor () {
    this.subs = []
  }

  append () {
    if (Dep.target) {
      this.subs.push(Dep.target)
    }
  }

  notify () {
    this.subs.forEach(watcher => watcher.update())
  }
}

Dep.target = null
const targetStack = []

export function pushTarget (watcher) {
  targetStack.push(watcher)
  Dep.target = watcher
}

export function popTarget () {
  targetStack.pop()
  Dep.target = targetStack[targetStack.length-1]
}