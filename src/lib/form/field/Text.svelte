<script lang="ts">
  import type { TextField } from '../types'
  export let field: TextField
  export let onChange: (key: string, value: string) => void

  let pristine = true
  let value = field.value || ''

  let onValueChange = (key: string, value: string) => {
    pristine = false
    onChange(key, value)
  }
</script>

<div class="field text-field {pristine ? 'pristine' : ''}">
  <label for={field.property}>{ field.label || field.property }</label>
  <input
    type={field.type}
    id={field.property}
    name={field.property}
    value={value}
    minlength={field.minLength}
    maxLength={field.maxLength}
    pattern={field.pattern}
    required={!field.notRequired}
    on:blur={e => { onValueChange(field.property, e.currentTarget.value) }}
    on:keyup={e => { onValueChange(field.property, e.currentTarget.value) }}
    placeholder={field.placeholder}
  />
</div>