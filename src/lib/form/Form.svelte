<script lang="ts">
  import getInitialData from './getInitialData'
  import RenderField from './field/index.svelte'
  import type { Field, Data } from './types'

  export let fields: Field[] = []
  export let onSubmit: ((d: Data) => void) | undefined  = undefined
  export let submitButton: string | undefined = undefined
  export let errorMessage: string | undefined = undefined

  let data = getInitialData(fields)
  const setData = (key: string, value: string | number | boolean) => {
    data = { ...data, [key]: value }
  }

  const onNativeSubmit = (e: Event) => {
    e.preventDefault()
    // @ts-ignore
    if (e.currentTarget.checkValidity() && onSubmit) {
      onSubmit(data)
    }
  }
</script>

<form on:submit={onNativeSubmit}>
  {#each fields as field}
    <RenderField field={field} onChange={setData} />
  {/each}
  {#if errorMessage}
    <p class="error-message">{ errorMessage }</p>
  {/if}
  <div class="field submit-field">
    {#if submitButton}
      <input type="submit" value={submitButton} />
    {:else}
      <input type="submit" />
    {/if}
  </div>
</form>
