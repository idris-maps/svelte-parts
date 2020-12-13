<script lang="ts">
  import Form from '@svelte-parts/form'
  import FormBuilder from '@svelte-parts/form-builder'

  let fields = []
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
