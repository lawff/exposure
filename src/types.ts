export interface ObserverTarget {
  ele?: HTMLElement | HTMLElement[]
  callback?: (entry: IntersectionObserverEntry) => void
}

export interface ObserverConfig extends IntersectionObserverInit {
  infinite?: boolean
}
