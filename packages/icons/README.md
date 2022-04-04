# @svelte-parts/icons

Icon components for svelte.

[Demo and list of all available icons](https://svelte-parts.surge.sh/icons)

Try it out in the [svelte REPL](https://svelte.dev/repl/b2d79abbdda848abb6b6c0cdb9d86024?version=3.46.6)

Collections:

* [feather icons](https://feathericons.com/) ([repo](https://github.com/feathericons/feather) - License: MIT)
* [maki](https://labs.mapbox.com/maki-icons/) ([repo](https://github.com/mapbox/maki) - License: CC0)
* [octicons](https://primer.style/octicons/) ([repo](https://github.com/primer/octicons) - License: MIT)

## Install

```
npm install @svelte-parts/icons
```

## Usage

```html
<script>
  import ActivityIcon from '@svelte-parts/icons/feather/activity'
  import AerialwayIcon from '@svelte-parts/icons/maki/aerialway'
  import AlertIcon from '@svelte-parts/icons/octicons/alert'
</script>

<h1>Inlined <ActivityIcon /> icons</h1>
<p> That keep the same size <AerialwayIcon /> as the text</p>
<button>Even here <AlertIcon /> in a button </button>
```

If you want to make it fit the container like SVG, set `inline` to `false`

```jsx
<div style="width:500px">
  <Icon inline={false}>
</div>
```
