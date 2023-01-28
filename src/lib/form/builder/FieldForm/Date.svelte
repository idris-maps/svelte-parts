<script lang="ts">
  import type { Data, Date as DateF, Field } from '../../types'
  import Form from '../../Form.svelte'
  import { fixProperty, formField, addExistingValues, removeEmptyKeys } from './utils'

  export let onAdd: (d: DateF) => void
  export let field: Field | null

  const onSubmit = (d: Data) => {
    const f = {
      ...removeEmptyKeys(d),
      type: 'date',
      property: fixProperty(d.label),
      label: d.label,
      notRequired: d.required === 'No',
    } as DateF
    onAdd(f)
  }

  const fields = addExistingValues([
    formField.label,
    {
      type: 'date',
      property: 'min',
      label: 'Minimum date (optional)',
      notRequired: true,
    },
    {
      type: 'date',
      property: 'max',
      label: 'Maximum date (optional)',
      notRequired: true,
    },
    formField.required,
  ], field)
</script>

<Form
  fields={fields}
  submitButton={field ? 'Update' : 'Add date field'}
  onSubmit={onSubmit}
/>
