<script>
  import { getContext } from 'svelte'
  import L from 'leaflet'

  export let data
  export let style = {}

  const { getMap } = getContext('leaflet_map')
  const map = getMap()

  L.geoJSON(data, { style }).addTo(map)
</script>