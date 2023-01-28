<script lang="ts">
  import type { Field } from '../../types'
  import Row from './Row.svelte'

  export let fields: Field[]
  export let onUpdate: (prev: Field, next: Field) => void
  export let onRemove: (d: Field) => void
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
