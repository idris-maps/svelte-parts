interface Props {
  onDrop: (files: File[]) => void
  onEnter?: () => void
  onLeave?: () => void
}

declare const _default: ({ onDrop, onEnter, onLeave }: Props) => any
export default _default
