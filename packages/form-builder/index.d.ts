import type { Field } from '@svelte-parts/form'

interface Props {
  ignoreFields?: string[]
  onChange?: (fields: Field[]) => void
  onSubmit?: (fields: Field[]) => void
}

declare const _default: ({ fields, onSubmit, errorMessage, submitButton }: Props) => any
export default _default
