import Logo from './Logo.svelte'

const logo = (targetId: string, props: any = {}) => {
  const target = document.getElementById(targetId)
  new Logo({ target, props })
}

export default logo
