<script lang="ts">
  import type { Checkbox } from '../types'
  export let field: Checkbox
  export let onChange: (key: string, value: boolean) => void
  let checked: boolean = Boolean(field.value)
</script>

<div class="field checkbox-field">
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
  <label for={field.property}>{ field.label || field.property }</label>
</div>