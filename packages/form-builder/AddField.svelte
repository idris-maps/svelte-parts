<script>
  import { slide, blur } from 'svelte/transition'
  import CancelIcon from '@svelte-parts/icons/feather/x'
  import FieldForm from './FieldForm'
  import { fieldTypes } from './FieldForm/utils'

  export let onAdd
  export let ignoreTypes = []

  let types = fieldTypes.filter(d => !ignoreTypes.includes(d))
  let type = ''
  let showDetails = false

  const onSelectType = d => {
    type = d.currentTarget.value
  }

  const onSubmit = d => {
    onAdd(d)
    type = ''
    showDetails = false
  }
</script>

<div class="add-field">
  <div class="add-field__head">
    <div class="add-field__label">Add field</div>
    <div class="add-field__cancel">
      {#if showDetails}
        <button
          aria-label="Cancel new field"
          on:click={() => { showDetails = false; type = '' }}
        >
          <CancelIcon />
        </button>
      {/if}
    </div>
  </div>
  {#if !showDetails || type === ''}
  <div class="add-field__add" transition:slide>
    <select on:blur={onSelectType} on:change={onSelectType} value={type}>
      <option value="">-- Choose a field type --</option>
      {#each types as fieldType}
        <option value={fieldType} selected={fieldType === type}>
          {fieldType}
        </option>
      {/each}
    </select>
    {#if type !== ''}
      <button
        on:click={() => showDetails = true}
        transition:blur
      >
        Add field
      </button>
    {/if}
  </div>
  {/if}
  {#if showDetails && type !== ''}
    <div class="add-field__details" transition:slide>
      <FieldForm type={type} onSubmit={onSubmit} />
    </div>
  {/if}
</div>
