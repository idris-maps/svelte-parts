<script lang="ts">
  import { onMount, setContext } from 'svelte'
  import L from 'leaflet'

  setContext('leaflet_map', {
    getMap: () => map
  });

  export let lat: number = 0
  export let lon: number = 0
  export let zoom: number = 5
  export let width: string = '100%'
  export let height: string = '100px'

  $: style = `width:${width};height:${height};`

  let container: HTMLDivElement
  let map: L.Map

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