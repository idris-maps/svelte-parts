<script>
  import Row from './Row.svelte'

  export let fields
  export let onUpdate
  export let onRemove
</script>

<div class="display-fields">
  <div class="display-fields__label">Fields</div>
  {#each fields as field}
    <Row
      field={field}
      onRemove={onRemove}
      onUpdate={onUpdate}
    />
  {/each}
</div>