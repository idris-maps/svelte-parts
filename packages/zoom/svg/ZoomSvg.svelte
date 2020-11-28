<script>
  import { onMount } from 'svelte'
  import { zoom } from 'd3-zoom'
  import { select } from 'd3-selection'
  
  export let viewBox = '0 0 300 150'
  
  let svg, g

  onMount(() => {
    if (svg && g) {
      select(svg).call(zoom().on('zoom', ({ transform }) => {
        const { k, x, y } = transform
        select(g).attr('transform', `translate(${x}, ${y}) scale(${k})`)
      }))
    }
  })
</script>

<svg viewBox={viewBox} bind:this={svg}>
  <g bind:this={g}>
    <slot></slot>
  </g>
</svg>
