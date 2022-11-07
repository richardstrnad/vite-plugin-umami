import type { HtmlTagDescriptor } from 'vite'

declare global {
  interface Window {
    umami: Function
  }
}

export interface Umami {
  /**
   * Umami tag
   */
  id: string
  src: string
}

export type UmamiOption = Umami | Umami[]

function injectTag(options: UmamiOption): HtmlTagDescriptor[] {
  const tags: HtmlTagDescriptor[] = []
  let properties: Umami[] = []

  if (Array.isArray(options)) {
    properties.push(
      ...options,
    )
  }
  else {
    properties.push(options)
  }
  properties = properties.filter(property => Boolean(property.id))

  if (!properties.length)
    return tags

  for (const property of properties) {
    tags.push({
      tag: 'script',
      attrs: {
        'async': true,
        'defer': true,
        'data-website-id': property.id,
        'src': property.src,
      },
    })
  }

  return tags
}
export default injectTag
