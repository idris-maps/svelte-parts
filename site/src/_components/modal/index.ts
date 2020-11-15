import Modal from './Modal.svelte'

const modal = (targetId: string, props: any = {}) => {
  const target = document.getElementById(targetId)
  new Modal({ target, props })
}

export default modal