<script>
  import Form from '@svelte-parts/form'
  import { fixProperty, formField, removeEmptyKeys, addExistingValues } from './utils'

  export let onAdd
  export let field = null

  let error

  const onSubmit = d => {
    if (d.min && d.max && d.min > d.max) {
      error = 'The minimum value is greater than the maximum value'
      return
    } else {
      error = null
    }

    const f = {
      ...removeEmptyKeys(d),
      type: 'range',
      property: fixProperty(d.label),
      label: d.label,
      notRequired: d.required === 'No',
      min: d.min,
      max: d.max,
      step: d.step,
    }
    onAdd(f)
  }

  const fields = addExistingValues([
    formField.label,
    { ...formField.min, label: 'Minimum value', notRequired: false },
    { ...formField.max, label: 'Maximum value', notRequired: false },
    { ...formField.step, label: 'Step', notRequired: false },
    formField.required,
  ], field)
</script>

<Form
  fields={fields}
  submitButton={field ? 'Update' : 'Add range field'}
  onSubmit={onSubmit}
  errorMessage={error}
/>
