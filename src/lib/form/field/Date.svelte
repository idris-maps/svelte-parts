<script lang="ts">
  import type { Date as DateF } from '../types'
  export let field: DateF
  export let onChange: (key: string, value: string) => void

  let pristine = true
  let value = field.value
</script>

<div class="field date-field {pristine ? 'pristine' : ''}">
  <label for={field.property}>{ field.label || field.property }</label>
  <input
    type="date"
    id={field.property}
    name={field.property}
    value={value}
    min={field.min}
    max={field.max}
    required={!field.notRequired}
    on:blur={() => pristine = false}
    on:keyup={() => pristine = false}
    on:change={e => {
      value = e.currentTarget.value
      onChange(field.property, value)
    }}
  />
</div>