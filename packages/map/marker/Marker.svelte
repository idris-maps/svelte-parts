<script>
  import { getContext } from 'svelte'
  import { marker } from 'leaflet'

  export let lat = 0
  export let lon = 0
  export let popup

  const { getMap } = getContext('leaflet_map')
  const map = getMap()

  const d = marker([lat, lon])
  if (popup) { d.bindPopup(popup) }
  if (map) { d.addTo(map) }
</script>