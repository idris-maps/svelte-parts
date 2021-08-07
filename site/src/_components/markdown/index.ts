import Markdown from './Markdown.svelte'

const markdown = (targetId: string, props: any = {}) => {
  const target = document.getElementById(targetId)
  new Markdown({ target, props })
}

export default markdown
