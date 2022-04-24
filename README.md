# lawlietff exposure

[![NPM version](https://img.shields.io/npm/v/@lawlietff/exposure?color=a1b858&label=)](https://www.npmjs.com/package/@lawlietff/core)

> A Function to observe an element

## install

```bash
npm install @lawlietff/exposure
```

## usage

```js
import { lawffExposure } from '@lawlietff/exposure'

lawffExposure({
  ele: dom,
  callback: (entry) => {},
})
```

## type
```js
export interface ObserverTarget {
  ele?: HTMLElement | HTMLElement[]
  callback?: (entry: IntersectionObserverEntry) => void
}
```

## TODOs

- throw error
- peer dependencies
- IntersectionObserver polyfill

## License
