<script lang="ts">
  import { slide } from 'svelte/transition'
  import DeleteIcon from '../../../icons/feather/Trash.svelte'
  import EditIcon from '../../../icons/feather/Settings.svelte'
  import CloseIcon from '../../../icons/feather/X.svelte'
  import FieldForm from '../FieldForm/FieldForm.svelte'
  import type { Field } from '../../types'

  export let field: Field
  export let onUpdate: (prev: Field, next: Field) => void
  export let onRemove: (d: Field) => void

  let edit = false

  const onToggleEdit =  (e: Event) => {
    e.preventDefault()
    edit = !edit
  }

  const onSubmitUpdate = (prev: Field) => (next: Field) => {
    edit = false
    onUpdate(prev, next)
  }

  const onClickRemove = (field: Field) => (e: Event) => {
    e.preventDefault()
    edit = false
    onRemove(field)
  }
</script>

<div class="display-fields__row">
  <div class="display-fields__row-label">
    {`${field.label} (${field.type})`}
  </div>
  <div class="display-fields__row-edit">
    {#if edit}
      <button
        aria-label="Close editor"
        on:click={onToggleEdit}
      >
        <CloseIcon />
      </button>
    {:else}
      <button
        aria-label="Edit field"
        on:click={onToggleEdit}
      >
        <EditIcon />
      </button>
    {/if}
  </div>
</div>


{#if edit}
  <div class="display-fields__edit" transition:slide>
    <FieldForm
      field={field}
      onSubmit={onSubmitUpdate(field)}
    />
    <button
      class="display-fields__delete-btn"
      on:click={onClickRemove(field)}
    >
      <DeleteIcon />
      Remove field
    </button>
  </div>
{/if}
