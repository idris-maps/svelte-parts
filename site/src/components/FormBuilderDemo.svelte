<script lang="ts">
  import Form from 'svelte-parts/form/Form.svelte'
  import FormBuilder from 'svelte-parts/form/builder/FormBuilder.svelte'
  import type { Field } from 'svelte-parts/form/types'

  let fields: Field[] = []
</script>

<h4>Create form</h4>
<FormBuilder onChange={d => fields = d} />
{#if fields.length > 0}
  <h4>Preview</h4>
  <Form
    fields={fields}
    onSubmit={d => alert(JSON.stringify(d)) }
  />
{/if}