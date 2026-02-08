import { MediaBlock } from '@/blocks/MediaBlock/Component'
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
  SerializedTextNode,
} from '@payloadcms/richtext-lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react'

import { CodeBlock, CodeBlockProps } from '@/blocks/Code/Component'

import type {
  BannerBlock as BannerBlockProps,
  CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
} from '@/payload-types'
import { BannerBlock } from '@/blocks/Banner/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { cn } from '@/utilities/ui'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps>

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug
  return relationTo === 'posts' ? `/posts/${slug}` : `/${slug}`
}

// Custom text node converter to handle color styles
const TextNodeConverter = ({ node }: { node: SerializedTextNode }) => {
  const { text, format, style, $ } = node
  
  // Check if text has color formatting in $ object (Lexical format)
  if ($ && $.color) {
    const colorClass = $.color
    
    // Map color classes to exact CSS styles from the editor configuration
    const colorStyles = {
      'red': { color: '#ff0000' },
      'orange': { color: '#ea580c' }, 
      'yellow': { color: '#a16207' },
      'green': { color: '#166534' },
      'blue': { color: '#1e40af' },
      'purple': { color: '#5b21b6' },
      'pink': { color: '#9d174d' },
      'gray': { color: '#374151' },
      'black': { color: '#000000' },
      'white': { color: '#ffffff' },
      'galaxy': { 
        background: 'linear-gradient(to right, #0000ff, #ff0000)',
        color: 'white',
        padding: '2px 4px',
        borderRadius: '4px'
      },
      'sunset': { 
        background: 'linear-gradient(to top, #ff5f6d, #6a3093)',
        padding: '2px 4px',
        borderRadius: '4px'
      },
      'ocean': { 
        background: 'linear-gradient(to right, #00d2ff, #3a7bd5)',
        color: 'white',
        padding: '2px 4px',
        borderRadius: '4px'
      },
      'forest': { 
        background: 'linear-gradient(to right, #2d5016, #5b9d48)',
        color: 'white',
        padding: '2px 4px',
        borderRadius: '4px'
      },
      'fire': { 
        background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
        color: 'white',
        padding: '2px 4px',
        borderRadius: '4px'
      },
      'twilight': { 
        background: 'linear-gradient(to right, #4b6cb7, #182848)',
        color: 'white',
        padding: '2px 4px',
        borderRadius: '4px'
      },
    }
    
    const styleObj = colorStyles[colorClass as keyof typeof colorStyles]
    
    if (styleObj) {
      return <span style={styleObj}>{text}</span>
    }
  }
  
  // Check if text has color formatting in style attribute (fallback)
  if (style && style.includes('color:')) {
    return <span style={{ color: style.match(/color:\s*([^;]+)/)?.[1] }}>{text}</span>
  }
  
  // Default text rendering
  return <span>{text}</span>
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  text: TextNodeConverter,
  blocks: {
    banner: ({ node }) => <BannerBlock className="col-start-2 mb-4" {...node.fields} />,
    mediaBlock: ({ node }) => (
      <MediaBlock
        className="col-start-1 col-span-3"
        imgClassName="m-0"
        {...node.fields}
        captionClassName="mx-auto max-w-[48rem]"
        enableGutter={false}
        disableInnerContainer={true}
      />
    ),
    code: ({ node }) => <CodeBlock className="col-start-2" {...node.fields} />,
    cta: ({ node }) => <CallToActionBlock {...node.fields} />,
  },
})

type Props = {
  data: DefaultTypedEditorState
  enableGutter?: boolean
  enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = true, ...rest } = props
  return (
    <ConvertRichText
      converters={jsxConverters}
      className={cn(
        'payload-richtext',
        {
          container: enableGutter,
          'max-w-none': !enableGutter,
          'mx-auto prose md:prose-md dark:prose-invert': enableProse,
        },
        className,
      )}
      {...rest}
    />
  )
}
