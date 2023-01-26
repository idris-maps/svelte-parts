<script lang="ts">
  import AddField from './AddField.svelte'
  import DisplayFields from './DisplayFields'
  import type { Field } from '../types'

  export let onSubmit:(fields: Field[]) => void
  export let onChange: (fields: Field[]) => void
  export let ignoreTypes: string[] = []

  let fields: Field[] = []

  const handleChange = () => {
    if (onChange) {
      onChange(fields)
    }
  }

  const onAdd = (d: Field) => {
    fields = [...fields, d]
    handleChange()
  }

  const onRemove = (d: Field) => {
    fields = fields.filter(f => f.property !== d.property)
    handleChange()
  }

  const onUpdate = (prev: Field, next: Field) => {
    fields = fields.map(f => {
      if (f.property === prev.property) {
        return next
      }
      return f
    })
    handleChange()
  }

  const onCreate = () => {
    if (onSubmit) {
      onSubmit(fields)
    }
  }
</script>

<div class="form-builder">
  {#if fields.length > 0}
    <DisplayFields
      fields={fields}
      onRemove={onRemove}
      onUpdate={onUpdate}
    />
  {/if}
  <AddField
    onAdd={onAdd}
    ignoreTypes={ignoreTypes}
  />
  {#if fields.length > 0 && Boolean(onSubmit)}
    <button on:click={onCreate}>
      Create form
    </button>
  {/if}
</div>