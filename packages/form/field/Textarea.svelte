<script>
  export let field
  export let onChange

  let pristine = true
  let value = field.value || ''

  let onValueChange = (key, value) => {
    pristine = false
    onChange(key, value)
  }
</script>

<div class="field text-field { pristine ? 'pristine' : '' }">
  <label for={field.property}>{ field.label || field.property }</label>
  <textarea
    type={field.type}
    id={field.property}
    name={field.property}
    value={value}
    required={!field.notRequired}
    on:blur={e => { onValueChange(field.property, e.currentTarget.value) }}
    on:keyup={e => { onValueChange(field.property, e.currentTarget.value) }}
  />
</div>