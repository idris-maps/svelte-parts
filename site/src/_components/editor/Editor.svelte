<script>
  import Editor from '@svelte-parts/editor'
  export let initialValue = [
    '# Try it out',
    'Write **something**.'
  ].join('\n\n')
</script>

<Editor theme="md-dark" { initialValue } />