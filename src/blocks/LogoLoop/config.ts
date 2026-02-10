import type { Block } from 'payload'

export const LogoLoop: Block = {
  slug: 'logoLoop',
  interfaceName: 'LogoLoopBlock',
  fields: [
    // Logo items array
    {
      name: 'logos',
      type: 'array',
      required: true,
      minRows: 2,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'altText',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Link URL',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
      ],
    },
    
    // Animation settings
    {
      name: 'speed',
      type: 'number',
      defaultValue: 120,
      min: 0,
      max: 500,
      label: 'Animation Speed',
    },
    {
      name: 'direction',
      type: 'select',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
        { label: 'Up', value: 'up' },
        { label: 'Down', value: 'down' },
      ],
      defaultValue: 'left',
    },
    {
      name: 'pauseOnHover',
      type: 'checkbox',
      defaultValue: true,
      label: 'Pause on Hover',
    },
    {
      name: 'scaleOnHover',
      type: 'checkbox',
      defaultValue: true,
      label: 'Scale on Hover',
    },
    
    // Visual settings
    {
      name: 'logoHeight',
      type: 'number',
      defaultValue: 28,
      min: 10,
      max: 200,
      label: 'Logo Height (px)',
    },
    {
      name: 'gap',
      type: 'number',
      defaultValue: 32,
      min: 0,
      max: 200,
      label: 'Gap between logos (px)',
    },
    {
      name: 'fadeOut',
      type: 'checkbox',
      defaultValue: false,
      label: 'Fade Out Edges',
    },
  ],
  labels: {
    plural: 'Logo Loops',
    singular: 'Logo Loop',
  },
}