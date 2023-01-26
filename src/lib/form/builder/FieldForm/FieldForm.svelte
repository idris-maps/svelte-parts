<script>
  import Checkbox from './Checkbox.svelte'
  import Color from './Color.svelte'
  import Date from './Date.svelte'
  import Number from './Number.svelte'
  import Options from './Options.svelte'
  import Textarea from './Textarea.svelte'
  import TextField from './TextField.svelte'
  import Range from './Range.svelte'

  export let onSubmit
  export let field = null
  export let type = field ? field.type : ''

</script>

{#if type === 'checkbox'}
  <Checkbox onAdd={onSubmit} field={field} />
{:else if type === 'color'}
  <Color onAdd={onSubmit} field={field} />
{:else if type === 'date'}
  <Date onAdd={onSubmit} field={field} />
{:else if type === 'email'}
  <TextField type="email" onAdd={onSubmit} field={field} />
{:else if type === 'number'}
  <Number onAdd={onSubmit} field={field} />
{:else if type === 'password'}
  <TextField type="password" onAdd={onSubmit} field={field} />
{:else if type === 'radio'}
  <Options type="radio" onAdd={onSubmit} field={field} />
{:else if type === 'range'}
  <Range onAdd={onSubmit} field={field} />
{:else if type === 'select'}
  <Options type="select" onAdd={onSubmit} field={field} />
{:else if type === 'tel'}
  <TextField type="tel" onAdd={onSubmit} field={field} />
{:else if type === 'textarea'}
  <Textarea onAdd={onSubmit} field={field} />
{:else if type === 'text'}
  <TextField type="text" onAdd={onSubmit} field={field} />
{/if}
