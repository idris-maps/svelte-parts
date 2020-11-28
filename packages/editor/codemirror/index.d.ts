import type { EditorConfiguration, EditorFromTextArea } from 'codemirror'

interface Props {
  config?: EditorConfiguration
  accessEditor?: (d: EditorFromTextArea) => void
}

declare const _default: (d: Props) => any
export default _default
