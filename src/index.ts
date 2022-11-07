import type { HtmlTagDescriptor, Plugin, ResolvedConfig } from 'vite'
import type { UmamiOption } from './umami'
import injectUmami from './umami'

export interface ViteUmamiOptions {
  enableDev?: boolean
  umami?: UmamiOption
}

export function VitePluginUmami({
  enableDev = false,
  umami,
}: ViteUmamiOptions): Plugin {
  let viteConfig: ResolvedConfig

  return {
    name: 'vite-plugin-umami',

    configResolved(resolvedConfig: ResolvedConfig) {
      viteConfig = resolvedConfig
    },

    transformIndexHtml() {
      const tags: HtmlTagDescriptor[] = []

      if (viteConfig.command === 'serve' && !enableDev)
        return tags

      if (umami)
        tags.push(...injectUmami(umami))

      return tags
    },
  }
}

export default VitePluginUmami
