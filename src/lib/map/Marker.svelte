<script lang="ts">
  import { getContext } from 'svelte'
  import L from 'leaflet'

  export let lat: number = 0
  export let lon: number = 0
  export let popup: string | undefined = undefined

  const { getMap } = getContext<{ getMap: () => L.Map }>('leaflet_map')
  const map = getMap()

  const d = L.marker([lat, lon])
  if (popup) { d.bindPopup(popup) }
  if (map) { d.addTo(map) }
</script>