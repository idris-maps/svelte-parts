<script>
  import { onMount, onDestroy } from 'svelte'
  import CodeMirror from 'codemirror'

  export let config = {}
  export let accessEditor = undefined

  let textarea
  let editor

  onMount(() => {
    editor = CodeMirror.fromTextArea(textarea, config)
    if (accessEditor) { accessEditor(editor) }
  })

  onDestroy(() => {
    editor.toTextArea()
  })
</script>

<textarea bind:this={textarea} />
