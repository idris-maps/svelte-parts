<script lang="ts">
  import { getContext } from 'svelte'
  import L from 'leaflet'

  export let url: string = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  export let maxZoom: number = 19
  export let attribution: string = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

  const { getMap } = getContext<{ getMap: () => L.Map }>('leaflet_map')
  const map = getMap()

  if (map) {
    L.tileLayer(url, {
      maxZoom,
      attribution,
    }).addTo(map)
  }
</script>