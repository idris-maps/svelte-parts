import Search from './Search.svelte'

const search = (targetId: string, props: any = {}) => {
  const target = document.getElementById(targetId)
  new Search({ target, props })
}

export default search
