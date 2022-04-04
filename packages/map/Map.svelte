<script>
  import { onMount, setContext } from 'svelte'
  import L from 'leaflet'

  setContext('leaflet_map', {
    getMap: () => map
  });

  export let lat = 0
  export let lon = 0
  export let zoom = 5
  export let width = '100%'
  export let height = '100px'

  $: style = `width:${width};height:${height};`

  let container
  let map

  onMount(() => {
    map = L.map(container).setView([lat, lon], zoom)

    return () => {
      map.remove()
    }
  })
</script>

<div bind:this={container} style={style}>
  {#if map}
    <slot></slot>
  {/if}
</div>