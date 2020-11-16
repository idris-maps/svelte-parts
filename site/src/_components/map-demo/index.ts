import Map from './Map.svelte'

const map = (targetId: string, props: any = {}) => {
  const target = document.getElementById(targetId)
  new Map({ target, props })
}

export default map
