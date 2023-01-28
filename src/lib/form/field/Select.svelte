<script lang="ts">
  import type { Select } from '../types'
  import { isSelectOptions } from '../utils'
  export let field: Select
  export let onChange: (key: string, value: string) => void
  let value = field.value
</script>

<div class="field select-field">
  <label for={field.property}>{ field.label || field.property }</label>
  <select
    id={field.property}
    name={field.property}
    value={value}
    on:input={e => {
      value = e.currentTarget.value
      onChange(field.property, value)
    }}
  >
    {#if isSelectOptions(field.options)}
      {#each field.options as option}
        <option value={option.value}>{option.label}</option>
      {/each}
    {:else}
      {#each field.options as option}
        <option value={option}>{option}</option>
      {/each}
    {/if}
  </select>
</div>
