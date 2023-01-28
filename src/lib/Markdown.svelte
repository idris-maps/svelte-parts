<script lang="ts">
  import { marked } from 'marked'
  import dompurify from 'dompurify'

  export let markedOptions: marked.MarkedOptions | undefined = undefined 
  export let markedExtensions: marked.MarkedExtension[] = []
  export let dompurifyConfig: dompurify.Config = {}

  const parseMd = (node: HTMLDivElement) => {
    if (markedOptions) { marked.setOptions(markedOptions) }
    markedExtensions.forEach(ext => marked.use(ext))

    const sanitizeConfig = {
      ...dompurifyConfig,
      RETURN_DOM: false,
      RETURN_DOM_FRAGMENT: false,
      RETURN_DOM_IMPORT: false,
    }
    if (node.textContent) {
      node.innerHTML = String(dompurify.sanitize(marked(node.textContent), sanitizeConfig))
    }
  }
</script>

<div use:parseMd>
  <slot />
</div>
