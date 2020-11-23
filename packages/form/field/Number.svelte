<script>
  export let field
  export let onChange

  let pristine = true
  let value = field.value

  let onValueChange = (key, value) => {
    pristine = false
    const num = Number(value)
    if (!Number.isNaN(num)) {
      onChange(key, num)
    }
  }
</script>

<div class="field number-field { pristine ? 'pristine' : '' }">
  <label for={field.property}>{ field.label || field.property }</label>
  <input
    type="number"
    id={field.property}
    name={field.property}
    value={value}
    min={field.min}
    max={field.max}
    step={field.step}
    required={!field.notRequired}
    on:keyup={e => onValueChange(field.property, e.currentTarget.value)}
    on:change={e => onValueChange(field.property, e.currentTarget.value)}
  />
</div>
