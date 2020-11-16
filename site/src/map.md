---
title: "@svelte-parts/map"
description: Leaflet map components for svelte
layout: layout.njk
---

# @svelte-parts/map

Map components using [leaflet](https://leafletjs.com/). Lets you create very basic maps with tiles, markers and geojson. If you need something beyond that, use these components for inspiration and create your own. More about that below.

## Demo

```comp
name: map-demo
fallback: Here is a map if you turn on js
```

## Install

```
npm install @svelte-parts/map
```

## Usage

```html
<script>
  import Map from '@svelte-parts/map'
  import Marker from '@svelte-parts/map/marker'
  import Tiles from '@svelte-parts/map/tiles'
</script>

<Map width="100%" height="300px" lon={0} lat={51.5}>
  <Tiles />
  <Marker lon={0} lat={51.5} popup="Hello, I am a popup" />
</Map>
```

### `Map`

This is the wrapper. Other map components must be inside it.

**Properties**

* lat (default: 0)
* lon (default: 0)
* zoom (default: 5)
* width (default: `100%`)
* height (default: `100px`)

### `Tiles`

The background tiles.

**Properties**

* url (default: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`)
* maxZoom (default: 19)
* attribution (default: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`)

Find more tile providers [here](https://leaflet-extras.github.io/leaflet-providers/preview/).

### `Marker`

**Properties**

* lat (default: 0)
* lon (default: 0)
* popup (default: `undefined`)

### `Geojson`

**Properties**

* data (a [geojson](https://en.wikipedia.org/wiki/GeoJSON) object)
* style (optional styling, see [leaflet docs](https://leafletjs.com/reference-1.7.1.html#geojson-style))

## CSS

In order to see a map at all, you need to use the css file `node_modules/leaflet/dist/leaflet.css`. Add it to your project however you want.

**Important**: the folder `node_modules/leaflet/dist/images` needs to be served in your build from the same folder as the css file.

## Creating your own components

[Leaflet](https://leafletjs.com/) is a very capable library. These components barely scratch the surface of what you can do. The api and documentation are easy to get into. You may want to create your own components. Have a look at how I made the [Marker](https://github.com/idris-maps/svelte-parts/blob/master/packages/map/marker/Marker.svelte).

Access the leaflet map instance with:

```js
const { getMap } = getContext('leaflet_map')
const map = getMap()
```

Import the leaflet functions and properties you need to create new components.

The [Map component](https://github.com/idris-maps/svelte-parts/blob/master/packages/map/Map.svelte), to initialise the leaflet instance, is also straight forward. You may not this library after all.
