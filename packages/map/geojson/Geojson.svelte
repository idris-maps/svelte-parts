<script>
  import { getContext } from 'svelte'
  import { geoJSON } from 'leaflet'

  export let data
  export let style

  const { getMap } = getContext('leaflet_map')
  const map = getMap()

  geoJSON(data, { style }).addTo(map)
</script>