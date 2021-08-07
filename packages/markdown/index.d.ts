import type { Config } from '@types/dompurify'
import type { MarkedExtension, MarkedOptions } from '@types/marked'

interface Props {
  dompurifyConfig?: Config 
  markedExtensions?: MarkedExtension[]
  markedOptions?: MarkedOptions
}

declare const _default: ({ dompurifyConfig, markedExtensions, markedOptions }: Props) => any
export default _default
