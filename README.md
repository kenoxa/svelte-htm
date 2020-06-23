# svelte-htm

> [**H**yperscript **T**agged **M**arkup](https://www.npmjs.com/package/htm) for [svelte](https://svelte.dev/)

[![License](https://badgen.net/npm/license/svelte-htm)](https://github.com/sastan/svelte-htm/blob/main/LICENSE)
[![Latest Release](https://badgen.net/npm/v/svelte-htm)](https://www.npmjs.com/package/svelte-htm)
[![View changelog](https://badgen.net/badge/%E2%80%8B/Explore%20Changelog/green?icon=awesome)](https://changelogs.xyz/svelte-htm)

[![CI](https://github.com/sastan/svelte-htm/workflows/CI/badge.svg)](https://github.com/sastan/svelte-htm/actions?query=branch%3Amain+workflow%3ACI)
[![Coverage Status](https://badgen.net/coveralls/c/github/sastan/svelte-htm/main)](https://coveralls.io/github/sastan/svelte-htm?branch=main)
[![PRs Welcome](https://badgen.net/badge/PRs/welcome/purple)](http://makeapullrequest.com)
[![Conventional Commits](https://badgen.net/badge/Conventional%20Commits/1.0.0/cyan)](https://conventionalcommits.org)

> If your are already using [babel](https://babeljs.io/) take a look at [svelte-jsx].

## What?

Write svelte components in [jsx]-like [syntax](https://www.npmjs.com/package/htm#syntax-like-jsx-but-also-lit) in Standard JavaScript [Tagged Templates] which works in [all modern browsers] and in node.

## Why?

This is especially useful for [testing svelte components](https://github.com/svelte-society/recipes-mvp/blob/master/testing.md).

## Installation

```sh
npm install --save-dev svelte-htm
```

And then import it:

```js
// using es modules
import html from 'svelte-htm'

// common.js
const html = require('svelte-htm')
```

Alternatively use [UNPKG](https://unpkg.com/svelte-htm/) or [jsDelivr](https://cdn.jsdelivr.net/npm/svelte-htm/) packages:

With script tags and globals:

```html
<!-- UNPKG -->
<script src="https://unpkg.com/svelte-htm"></script>

<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/svelte-htm"></script>

<script>
  <!-- And then grab it off the global like so: -->
  const html = svelteHtml
</script>
```

Hotlinking from unpkg: _(no build tool needed!)_

```js
import html from 'https://unpkg.com/svelte-htm?module'
```

## Usage

```js
import { render, fireEvent } from '@testing-library/svelte'
import html from 'svelte-htm'

import Button from '../src/Button.svelte'

test('should render', () => {
  let clicked = 0
  const { getByRole } = render(html`<${Button} on:click=${() => (clicked += 1)}>Click Me!<//>`)

  const button = getByRole('button')

  await fireEvent.click(button)

  expect(clicked).toBe(1)
})
```

## API

We [aim to support](https://github.com/sastan/svelte-hyperscript#feature-set) all svelte features. In some cases this is not possible. For those cases we provided feasible workarounds. See [svelte-hyperscript] for further details.

Some notable differences are:

- Using [stores](https://svelte.dev/docs#svelte_store) to allow reactivity

  ```js
  import { render } from '@testing-library/svelte'
  import userEvent from '@testing-library/user-event'
  import { writable, get } from 'svelte/store'

  test('write into an input', () => {
    const text = writable()
    const { getByRole } = render(html`<input bind:value=${text}>`)

    const input = getByRole('textbox')

    await userEvent.type(input, 'some text')

    expect(get(text)).toBe('some text')
  })
  ```

- Action properties lack the possibility to pass parameters to the action

  ```js
  import action from 'some-action-module'

  html`<div use:action=${(node) => action(node, parameters)}></div>`
  ```

## Related Projects

- [svelte-jsx] - write svelte components using [jsx]
- [svelte-hyperscript] - the core of this implementation
- [svelte-fragment-component] - a utility component
- [htm](https://www.npmjs.com/package/htm) - making **H**yperscript **T**agged **M**arkup possible
- [@testing-library/svelte](https://testing-library.com/docs/svelte-testing-library/intro) - helps to test UI components in a user-centric way

## Support

This project is free and open-source, so if you think this project can help you or anyone else, you may [star it on GitHub](https://github.com/sastan/svelte-htm). Feel free to [open an issue](https://github.com/sastan/svelte-htm/issues) if you have any idea, question, or you've found a bug.

## Contribute

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

We are following the [Conventional Commits](https://www.conventionalcommits.org) convention.

### Develop

- `npm test`: Run test suite
- `npm run build`: Generate bundles
- `npm run lint`: Lints code

## NPM Statistics

[![NPM](https://nodei.co/npm/svelte-htm.png)](https://nodei.co/npm/svelte-htm/)

## License

`svelte-htm` is open source software [licensed as MIT](https://github.com/sastan/svelte-htm/blob/main/LICENSE).

[tagged templates]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates
[all modern browsers]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Browser_compatibility
[jsx]: https://reactjs.org/docs/introducing-jsx.html
[svelte-jsx]: https://www.npmjs.com/package/svelte-jsx
[svelte-hyperscript]: https://www.npmjs.com/package/svelte-hyperscript
[svelte-fragment-component]: https://www.npmjs.com/package/svelte-fragment-component
