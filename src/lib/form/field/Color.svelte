<script>
  export let field
  export let onChange
  let value = field.value
</script>

<div class="field color-field">
  <label for={field.property}>{ field.label || field.property }</label>
  <input
    type="color"
    id={field.property}
    name={field.property}
    value={value}
    required={!field.notRequired}
    on:change={e => {
      value = e.currentTarget.value
      onChange(field.property, value)
    }}
  />
</div>