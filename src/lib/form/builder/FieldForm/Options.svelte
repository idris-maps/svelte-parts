<script lang="ts">
  import type { Select, Radio, Field } from '../../types'
  import AddIcon from '../../../icons/feather/Plus.svelte'
  import RemoveIcon from '../../../icons/feather/X.svelte'
  import { fixProperty } from './utils'

  export let onAdd: (d: Select | Radio) => void
  export let type: 'select' | 'radio'
  export let field: Field | null = null

  const isOptionsField = (d: Field): d is Field & { options: Array<any> } => Object.keys(d).includes('options')
  let _field = field && isOptionsField(field) ? field : null

  const isSelectOption = (d: any) => !(String(d) === d)
  const selectOptionToString = (d: any[]) =>
    d.map((o: any) => {
      if (isSelectOption(o)) { return o['label'] }
      return o
    })

  let option = ''
  let options = _field ? selectOptionToString(_field.options) : []
  const addOption = (e: Event) => {
    e.preventDefault()
    if (option.trim() !== '') {
      options = [...new Set([...options, option])]
      option = ''
    }
  }
  const removeOption = (d: any) => (e: Event) => {
    e.preventDefault()
    options = options.filter(o => o !== d)
  }

  let error: string | undefined
  let label = _field ? _field.label : null

  const onSubmit = (e: Event) => {
    e.preventDefault()

    if (!label) {
      return
    }
    if (options.length < 2) {
      error = 'You need at least 2 options'
      return
    }

    error = undefined
    
    const f = {
      type,
      property: fixProperty(label),
      options,
      label,
    }
    onAdd(f)
  }
</script>

<form on:submit={onSubmit}>
  <div class="field text-field ">
    <label for="label">Field name</label>
    <input type="text" name="label" bind:value={label} minlength="1" required>
  </div>
  <div class="field options-field">
    <label for="options-field__options">Options</label>
    <div class="options-field__options-input">
      <div>
        <input name="options" bind:value={option} />
      </div>
      <div>
        <button
          aria-label="Add option"
          on:click={addOption}
        >
          <AddIcon />
        </button>
      </div>
    </div>
    <ul class="options-field__options-list">
      {#each options as opt}
        <li class="option">
          <button on:click={removeOption(opt)} class="options-field__remove-btn">
            <RemoveIcon />
          </button>
          <span class="options-field__option-label">{opt}</span>
        </li>
      {/each}
    </ul>
  </div>
  {#if error}
    <p class="error-message">{error}</p>
  {/if}
  <div class="field submit-field">
    <input type="submit" value={field ? 'Update' : `Add ${type} field`}>
  </div>
</form>
