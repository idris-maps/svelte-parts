# Icons

Icon components for svelte.

Collections:

* [feather icons](https://feathericons.com/) ([repo](https://github.com/feathericons/feather) - License: MIT)
* [maki](https://labs.mapbox.com/maki-icons/) ([repo](https://github.com/mapbox/maki) - License: CC0)
* [octicons](https://primer.style/octicons/) ([repo](https://github.com/primer/octicons) - License: MIT)

## Usage

```html
<script>
  import ActivityIcon from 'svelte-parts/icons/feather/Activity.svg'
  import AerialwayIcon from 'svelte-parts/icons/maki/Aerialway.svg'
  import AlertIcon from 'svelte-parts/icons/octicons/Alert.svg'
</script>

<h1>Inlined <ActivityIcon /> icons</h1>
<p> That keep the same size <AerialwayIcon /> as the text</p>
<button>Even here <AlertIcon /> in a button </button>
```

