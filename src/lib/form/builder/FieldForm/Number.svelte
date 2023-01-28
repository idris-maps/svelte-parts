<script lang="ts">
  import type { Data, Number as NumberF, Field } from '../../types'
  import Form from '../../Form.svelte'
  import { fixProperty, formField, removeEmptyKeys, addExistingValues } from './utils'

  export let onAdd: (d: NumberF) => void
  export let field: Field | null = null

  let error: undefined | string

  const onSubmit = (d: Data) => {
    if (d.min && d.max && d.min > d.max) {
      error = 'The minimum value is greater than the maximum value'
      return
    } else {
      error = undefined
    }

    const f = {
      ...removeEmptyKeys(d),
      type: 'number',
      property: fixProperty(d.label),
      label: d.label,
      notRequired: d.required === 'No',
    } as NumberF
    onAdd(f)
  }

  const fields = addExistingValues([
    formField.label,
    formField.min,
    formField.max,
    formField.step,
    formField.required,
  ], field)
</script>

<Form
  fields={fields}
  submitButton={field ? 'Update' : 'Add number field'}
  onSubmit={onSubmit}
  errorMessage={error}
/>
