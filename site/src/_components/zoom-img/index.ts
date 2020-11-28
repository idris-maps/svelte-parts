import ZoomImg from './ZoomImg.svelte'

const zoomImg = (targetId: string, props: any = {}) => {
  const target = document.getElementById(targetId)
  new ZoomImg({ target, props })
}

export default zoomImg
