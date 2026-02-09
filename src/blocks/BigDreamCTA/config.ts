import type { Block } from 'payload'

export const BigDreamCTA: Block = {
  slug: 'bigDreamCTA',
  interfaceName: 'BigDreamCTABlock',
  fields: [
    // Background image (replaces the hardcoded /images/cta.jpg)
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    
    // Trust indicators (replaces hardcoded values)
    {
      name: 'trustIndicators',
      type: 'array',
      minRows: 3,
      maxRows: 3,
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
      ],
    },
    
    // Company tag (replaces "The Big O Company")
    {
      name: 'companyTag',
      type: 'text',
      required: true,
      defaultValue: 'The Big O Company',
    },
    
    // Headline (replaces "The Dream" and "Project")
    {
      name: 'headline',
      type: 'group',
      fields: [
        { name: 'firstLine', type: 'text', required: true, defaultValue: 'The Dream' },
        { name: 'secondLine', type: 'text', required: true, defaultValue: 'Project' },
      ],
    },
    
    // Supporting text (replaces the hardcoded paragraph)
    {
      name: 'supportingText',
      type: 'textarea',
      required: true,
      defaultValue: 'Your vision, our expertise. We\'re here for you with the bold solutions and unwavering support you need.',
    },
    
    // CTA button (replaces hardcoded button text and link)
    {
      name: 'ctaButton',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', required: true, defaultValue: 'Let\'s Build Together' },
        { name: 'url', type: 'text', required: true, defaultValue: '#' },
      ],
    },
  ],
  labels: {
    plural: 'Big Dream CTAs',
    singular: 'Big Dream CTA',
  },
}