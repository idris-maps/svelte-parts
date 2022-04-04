<script>
  import { getContext } from 'svelte'
  import L from 'leaflet'

  export let lat = 0
  export let lon = 0
  export let popup = undefined

  const { getMap } = getContext('leaflet_map')
  const map = getMap()

  const d = L.marker([lat, lon])
  if (popup) { d.bindPopup(popup) }
  if (map) { d.addTo(map) }
</script>