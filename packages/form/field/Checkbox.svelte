<script>
  export let field
  export let onChange
  let checked = field.value
</script>

<div class="field checkbox-field">
  <label for={field.property}>{ field.label || field.property }</label>
  <input
    type="checkbox"
    id={field.property}
    name={field.property}
    checked={field.value}
    on:change={() => {
      checked = !checked
      onChange(field.property, checked)
    }}
  />
</div>