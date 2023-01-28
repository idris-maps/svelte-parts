<script lang="ts">
  import { getContext } from 'svelte'
  import L from 'leaflet'
  import type { GeoJsonObject } from 'geojson'

  export let data: GeoJsonObject | GeoJsonObject[]
  export let style: L.GeoJSONOptions['style'] = {}

  const { getMap } = getContext<{ getMap: () => L.Map }>('leaflet_map')
  const map = getMap()

  L.geoJSON(data, { style }).addTo(map)
</script>