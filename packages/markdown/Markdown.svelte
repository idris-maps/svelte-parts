<script>
  import { marked } from 'marked'
  import dompurify from 'dompurify'

  export let markedOptions = undefined 
  export let markedExtensions = []
  export let dompurifyConfig = {}

  const parseMd = node => {
    if (markedOptions) { marked.setOptions(markedOptions) }
    markedExtensions.forEach(ext => marked.use(ext))

    const sanitizeConfig = {
      ...dompurifyConfig,
      RETURN_DOM: false,
      RETURN_DOM_FRAGMENT: false,
      RETURN_DOM_IMPORT: false,
    }
    node.innerHTML = String(dompurify.sanitize(marked(node.textContent), sanitizeConfig))
  }
</script>

<div use:parseMd>
  <slot />
</div>
