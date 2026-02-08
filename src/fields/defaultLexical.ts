import type { TextFieldSingleValidation } from 'payload'
import {
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  ParagraphFeature,
  lexicalEditor,
  UnderlineFeature,
  type LinkFields,
  TextStateFeature,
} from '@payloadcms/richtext-lexical'

export const defaultLexical = lexicalEditor({
  features: [
    ParagraphFeature(),
    UnderlineFeature(),
    BoldFeature(),
    ItalicFeature(),
    LinkFeature({
      enabledCollections: ['pages', 'posts'],
      fields: ({ defaultFields }) => {
        const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
          if ('name' in field && field.name === 'url') return false
          return true
        })

        return [
          ...defaultFieldsWithoutUrl,
          {
            name: 'url',
            type: 'text',
            admin: {
              condition: (_data, siblingData) => siblingData?.linkType !== 'internal',
            },
            label: ({ t }) => t('fields:enterURL'),
            required: true,
            validate: ((value, options) => {
              if ((options?.siblingData as LinkFields)?.linkType === 'internal') {
                return true // no validation needed, as no url should exist for internal links
              }
              return value ? true : 'URL is required'
            }) as TextFieldSingleValidation,
          },
        ]
      },
    }),
    TextStateFeature({
      // prettier-ignore
      state: {
    color: {
      // Default colors from Payload
      // Additional custom colors
      galaxy: { label: 'Galaxy', css: { background: 'linear-gradient(to right, #0000ff, #ff0000)', color: 'white' } },
      sunset: { label: 'Sunset', css: { background: 'linear-gradient(to top, #ff5f6d, #6a3093)' } },
      ocean: { label: 'Ocean', css: { background: 'linear-gradient(to right, #00d2ff, #3a7bd5)', color: 'white' } },
      forest: { label: 'Forest', css: { background: 'linear-gradient(to right, #2d5016, #5b9d48)', color: 'white' } },
      fire: { label: 'Fire', css: { background: 'linear-gradient(to right, #ff416c, #ff4b2b)', color: 'white' } },
      twilight: { label: 'Twilight', css: { background: 'linear-gradient(to right, #4b6cb7, #182848)', color: 'white' } },
      // Solid colors
      red: { label: 'Red', css: { color: 'light-dark(#dc2626, #ef4444)' } },
      orange: { label: 'Orange', css: { color: 'light-dark(#ea580c, #f97316)' } },
      yellow: { label: 'Yellow', css: { color: 'light-dark(#a16207, #eab308)' } },
      green: { label: 'Green', css: { color: 'light-dark(#166534, #22c55e)' } },
      blue: { label: 'Blue', css: { color: 'light-dark(#1e40af, #3b82f6)' } },
      purple: { label: 'Purple', css: { color: 'light-dark(#5b21b6, #a855f7)' } },
      pink: { label: 'Pink', css: { color: 'light-dark(#9d174d, #ec4899)' } },
      gray: { label: 'Gray', css: { color: 'light-dark(#374151, #9ca3af)' } },
      black: { label: 'Black', css: { color: 'light-dark(#000000, #ffffff)' } },
      white: { label: 'White', css: { color: 'light-dark(#ffffff, #000000)' } },
    },
    // You can have both colored and underlined text at the same time.
    // If you don't want that, you should group them within the same key.
    // (just like I did with defaultColors and my fancy gradients)
    underline: {
      'solid': { label: 'Solid', css: { 'text-decoration': 'underline', 'text-underline-offset': '4px' } },
       // You'll probably want to use the CSS light-dark() utility.
      'yellow-dashed': { label: 'Yellow Dashed', css: { 'text-decoration': 'underline dashed', 'text-decoration-color': 'light-dark(#EAB308,yellow)', 'text-underline-offset': '4px' } },
    },
  },
    }),
  ],
})
