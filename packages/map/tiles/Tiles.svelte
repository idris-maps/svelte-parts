<script>
  import { getContext } from 'svelte'
  import { tileLayer } from 'leaflet'

  export let url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  export let maxZoom = 19
  export let attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

  const { getMap } = getContext('leaflet_map')
  const map = getMap()

  if (map) {
    tileLayer(url, {
      maxZoom,
      attribution,
    }).addTo(map)
  }
</script>