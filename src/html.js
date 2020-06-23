import htm from 'htm'
import h from 'svelte-hyperscript'
import Fragment from 'svelte-fragment-component'

const html$ = htm.bind(h)

export default function html(...args) {
  const component = html$(...args)

  // Multiple root elements (fragments): <div /><div />
  if (Array.isArray(component)) {
    // Wrap in a fragment: `component´ are its children
    return h(Fragment, null, ...component)
  }

  return component
}
