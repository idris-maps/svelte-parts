# Map

Mapping components using [leaflet](https://leafletjs.com/). Lets you create very basic maps with tiles, markers and geojson. If you need something beyond that, use these components for inspiration and create your own. More about that below.

## Usage

```html
<script>
  import { Map, Marker, Tiles } from 'svelte-parts/map'
</script>

<Map width="100%" height="300px" lon={0} lat={51.5}>
  <Tiles />
  <Marker lon={0} lat={51.5} popup="Hello, I am a popup" />
</Map>
```
