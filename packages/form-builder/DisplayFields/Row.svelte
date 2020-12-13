<script>
  import { slide } from 'svelte/transition'
  import DeleteIcon from '@svelte-parts/icons/feather/trash'
  import EditIcon from '@svelte-parts/icons/feather/settings'
  import CloseIcon from '@svelte-parts/icons/feather/x'
  import FieldForm from '../FieldForm'

  export let field
  export let onUpdate
  export let onRemove

  let edit = false

  const onToggleEdit =  e => {
    e.preventDefault()
    edit = !edit
  }

  const onSubmitUpdate = prev => next => {
    edit = false
    onUpdate(prev, next)
  }

  const onClickRemove = field => e => {
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
