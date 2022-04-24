# lawlietff exposure

[![NPM version](https://img.shields.io/npm/v/ad-exposure?color=a1b858&label=)](https://www.npmjs.com/package/@lawlietff/core)

> A Function to observe an element

## install

```bash
npm install ad-exposure
```

## usage

```js
import { adExposure } from 'ad-exposure'

adExposure({
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
