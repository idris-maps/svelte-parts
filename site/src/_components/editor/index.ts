import Editor from './Editor.svelte'

const editor = (targetId: string, props: any = {}) => {
  const target = document.getElementById(targetId)
  new Editor({ target, props })
}

export default editor