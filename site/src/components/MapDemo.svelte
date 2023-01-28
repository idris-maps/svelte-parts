<script>
  import { Map, Marker, Tiles } from 'svelte-parts/map'
</script>

<Map width="100%" height="300px" lon={0} lat={51.5}>
  <Tiles />
  <Marker lon={0} lat={51.5} popup="Hello, I am a popup" />
</Map>
