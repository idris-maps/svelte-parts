import Icons from './Icons.svelte'

const icons = (targetId: string, props: any = {}) => {
  const target = document.getElementById(targetId)
  new Icons({ target, props })
}

export default icons