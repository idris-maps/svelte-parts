<script>
  export let field
  export let onChange
  let value = field.value || field.min
</script>

<div class="field range-field">
  <label for={field.property}>{ field.label || field.property }</label>
  <input
    type="range"
    id={field.property}
    name={field.property}
    value={value}
    min={field.min}
    max={field.max}
    step={field.step}
    required={!field.notRequired}
    on:input={e => {
      const v = Number(e.currentTarget.value)
      if (!Number.isNaN(v)) {
        value = v
        onChange(field.property, value)
      }
    }}
  />
  {#if value}
    <span class="range-value">{value}</span>
  {/if}
</div>
