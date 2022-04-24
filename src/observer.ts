import 'intersection-observer'
import type { ObserverConfig, ObserverTarget } from './types'
import { addTarget } from './utils'

export function exposure(target: ObserverTarget | ObserverTarget[], options?: ObserverConfig): IntersectionObserver | undefined {
  const weakMap = new WeakMap()

  try {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          weakMap.get(entry.target)?.(entry)
          if (!options?.infinite) {
            observer?.unobserve(entry.target)
            weakMap.delete(entry.target)
          }
        }
      }
    }, {
      root: options?.root || null,
      threshold: options?.threshold || 0,
      rootMargin: options?.rootMargin || '0px',
    })

    addTarget(target, observer, weakMap)

    return observer
  }
  catch (error) {
    console.error(error)
  }
}
