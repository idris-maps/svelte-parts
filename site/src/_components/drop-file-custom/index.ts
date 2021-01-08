import DropFile from './DropFile.svelte'

const dropFile = (targetId: string, props: any = {}) => {
  const target = document.getElementById(targetId)
  new DropFile({ target, props })
}

export default dropFile
