<script>
  import { onMount } from 'svelte'
  import { zoom } from 'd3-zoom'
  import { select } from 'd3-selection'
  export let src
  export let alt
  export let width = undefined
  
  let svg, g, fo
  let w = 0
  let h = 0
  
  onMount(() => {
    const img = new Image()
    img.src = src
    img.alt = alt
    img.addEventListener('load', () => {
      w = img.naturalWidth
      h = img.naturalHeight
      if (svg && g && fo) {
        fo.setAttribute('width', w)
        fo.setAttribute('height', h)
        fo.appendChild(img)
        
        select(svg).call(zoom().on('zoom', ({ transform }) => {
          const { k, x, y } = transform
          select(g).attr('style', `transform:translate(${x}px, ${y}px) scale(${k})`)
        }))
      }
    })
  })
</script>

<svg viewBox={`0 0 ${w} ${h}`} bind:this={svg} style={`width:${width || w + 'px' }`}>
  <g bind:this={g}>
    <foreignObject bind:this={fo}>
    </foreignObject>
  </g>
</svg>
