import FormBuilder from './FormBuilder.svelte'

const formBuilder = (targetId: string, props: any = {}) => {
  const target = document.getElementById(targetId)
  new FormBuilder({ target, props })
}

export default formBuilder
