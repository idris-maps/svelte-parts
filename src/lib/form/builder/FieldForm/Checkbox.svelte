<script lang="ts">
  import type { Data, Checkbox, Field } from '../../types'
  import Form from '../../Form.svelte'
  import { fixProperty, formField, addExistingValues } from './utils'

  export let onAdd: (d: Checkbox) => void
  export let field: Field | null

  const onSubmit = (d: Data)  => {
    const f = {
      type: 'checkbox',
      property: fixProperty(d.label),
      label: d.label,
    } as Checkbox
    if (d.value === 'true') { onAdd({ ...f, value: true }) }
    else if (d.value === 'false') { onAdd({ ...f, value: false }) }
    else { onAdd(f) }
  }

  const fields = addExistingValues([
    formField.label,
    {
      type: 'select',
      property: 'value',
      label: 'Default value',
      options: [
        'No default value',
        'true',
        'false',
      ],
    },
  ], field)
</script>

<Form
  fields={fields}
  submitButton={field ? 'Update' : 'Add checkbox field'}
  onSubmit={onSubmit}
/>
