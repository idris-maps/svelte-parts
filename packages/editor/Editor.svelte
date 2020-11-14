<script>
  import Editor from './codemirror/CodeMirror.svelte'
  import 'codemirror/mode/gfm/gfm'

  export let theme = 'default'
  export let onChange = undefined
  export let initialValue = ''

  const config = {
    lineNumbers: true,
    lineWrapping: true,
    theme,
    mode: {
      name: 'gfm',
      highlightFormatting: true,
    },
  }

  const accessEditor = editor => {
    editor.setSize('100%', '100%')
    editor.on('change', e => {
      if (onChange) { onChange(e.getValue()) }
    })
    editor.setValue(initialValue)
  }
</script>


<Editor config={config} accessEditor={accessEditor} />
