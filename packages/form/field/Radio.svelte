<script>
  import { isSelectOptions } from '../utils'
  export let field
  export let onChange
  let value = field.value
    || (isSelectOptions(field.options) ? field.options[0].value : field.options[0])
</script>

<div class="field radio-field">
  <label class="radio-label" for={field.property}>{ field.label || field.property }</label>
  {#if isSelectOptions(field.options)}
    {#each field.options as option}
      <div class="radio-field-option">
        <input 
          type="radio"
          id={option.value}
          name={field.property}
          value={option.value}
          checked={option.value === value}
          on:click={() => {
            value = option.value
            onChange(field.property, value)
          }}
        >
        <label for={option.value}>{option.label}</label>
      </div>
    {/each}
  {:else}
    {#each field.options as option}
      <div class="radio-field-option">
        <input
          type="radio"
          id={option}
          name={field.property}
          value={option}
          checked={option === value}
          on:click={() => {
            value = option
            onChange(field.property, value)
          }}
        >
        <label for={option}>{option}</label>
      </div>
    {/each}
  {/if}
</div>
