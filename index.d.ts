import type { SvelteComponent } from 'svelte'

declare function html(strings: TemplateStringsArray, ...values: unknown[]): SvelteComponent

export default html
