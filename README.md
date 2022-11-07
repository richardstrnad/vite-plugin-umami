# vite-plugin-umami

[Umami](https://umami.is/) Analytics load for vite, includes the Umami Tag in the production build.

Inspired by [vite-plugin-radar](https://github.com/stafyniaksacha/vite-plugin-radar)

### Install

```sh
npm i --save-dev vite-plugin-umami # yarn add -D vite-plugin-umami
```

### Add it to your vite.config.js

```ts
// vite.config.js
import ViteUmami from 'vite-plugin-umami'

export default {
  plugins: [
    ViteUmami({
      // Umami script injection
      umami: {
        id: "x-y-z",
        src: "url",
      },
    })
  ],
}
```
