import Form from './Form.svelte'

const form = (targetId: string, props: any = {}) => {
  const target = document.getElementById(targetId)
  new Form({ target, props })
}

export default form