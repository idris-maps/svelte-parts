<script>
  import Map from '@svelte-parts/map'
  import Marker from '@svelte-parts/map/marker'
  import Tiles from '@svelte-parts/map/tiles'
</script>

<Map width="100%" height="300px" lon={0} lat={51.5}>
  <Tiles />
	<Marker lon={0} lat={51.5} popup="Hello, I am a popup" />
</Map>
