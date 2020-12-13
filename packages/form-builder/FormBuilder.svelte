<script>
  import AddField from './AddField.svelte'
  import DisplayFields from './DisplayFields'

  export let onSubmit = null
  export let onChange = null
  export let ignoreTypes= []

  let fields = []

  const handleChange = () => {
    if (onChange) {
      onChange(fields)
    }
  }

  const onAdd = d => {
    fields = [...fields, d]
    handleChange()
  }

  const onRemove = d => {
    fields = fields.filter(f => f.property !== d.property)
    handleChange()
  }

  const onUpdate = (prev, next) => {
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