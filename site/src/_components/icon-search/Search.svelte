<script lang="ts">
  import FeatherList from './FeatherList.svelte'
  import MakiList from './MakiList.svelte'
  import OctList from './OctList.svelte'
  
  let term = ''
  const onKeyUp = e => {
    term = e.currentTarget.value
  }

</script>

<input placeholder="Search icons" on:keyup={onKeyUp} />
<FeatherList term={term} />
<MakiList term={term} />
<OctList term={term} />