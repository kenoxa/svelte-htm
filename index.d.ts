import type { SvelteComponent } from 'svelte'

declare function html(strings: TemplateStringsArray, ...values: unknown[]): typeof SvelteComponent

export default html
