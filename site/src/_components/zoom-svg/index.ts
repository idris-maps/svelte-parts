import ZoomSvg from './ZoomSvg.svelte'

const zoomSvg = (targetId: string, props: any = {}) => {
  const target = document.getElementById(targetId)
  new ZoomSvg({ target, props })
}

export default zoomSvg
