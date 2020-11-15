import Icon from './Icon.svelte'

const icon = (targetId: string, props: any = {}) => {
  const target = document.getElementById(targetId)
  new Icon({ target, props })
}

export default icon