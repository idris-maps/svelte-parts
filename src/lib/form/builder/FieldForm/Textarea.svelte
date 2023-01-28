<script lang="ts">
  import type { Data, Textarea, Field } from '../../types'
  import Form from '../../Form.svelte'
  import { fixProperty, formField, removeEmptyKeys, addExistingValues } from './utils'

  export let onAdd: (d: Textarea) => void
  export let field: Field | null = null

  const onSubmit = (d: Data) => {
    const f = {
      ...removeEmptyKeys(d),
      type: 'textarea',
      property: fixProperty(d.label),
      label: d.label,
      notRequired: d.required === 'No',
    } as Textarea
    onAdd(f)
  }

  const fields = addExistingValues([
    formField.label,
    formField.required,
  ], field)
</script>

<Form
  fields={fields}
  submitButton={field ? 'Update' : 'Add textarea field'}
  onSubmit={onSubmit}
/>
