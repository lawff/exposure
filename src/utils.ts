import type { ObserverTarget } from './index'

const isArray = Array.isArray

function addTarget(target: ObserverTarget | ObserverTarget[], observer: IntersectionObserver, targetWeakMap: WeakMap<object, any>) {
  const handleTarget = (tg: ObserverTarget) => {
    if (isArray(tg.ele)) {
      tg.ele.forEach((e) => {
        observer.observe(e)
        targetWeakMap.set(e, tg.callback)
      })
    }
    else if (tg.ele) {
      observer.observe(tg.ele)
      targetWeakMap.set(tg.ele, tg.callback)
    }
  }
  if (isArray(target)) {
    target.forEach((t) => {
      handleTarget(t)
    })
  }
  else {
    handleTarget(target)
  }
}

export { addTarget }
