## Components

#### `Map`

This is the wrapper. Other map components must be inside of it.

**Properties**

* lat (default: 0)
* lon (default: 0)
* zoom (default: 5)
* width (default: `100%`)
* height (default: `100px`)

#### `Tiles`

The background tiles.

**Properties**

* url (default: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`)
* maxZoom (default: 19)
* attribution (default: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`)

Find more tile providers [here](https://leaflet-extras.github.io/leaflet-providers/preview/).

#### `Marker`

**Properties**

* lat (default: 0)
* lon (default: 0)
* popup (default: `undefined`)

#### `Geojson`

**Properties**

* data (a [geojson](https://en.wikipedia.org/wiki/GeoJSON) object)
* style (optional styling, see [leaflet docs](https://leafletjs.com/reference-1.7.1.html#geojson-style))

## Creating your own components

There is a lot more you can do with [Leaflet](https://leafletjs.com/). These components barely scratch the surface. The api and documentation are easy to get into. You may want to create your own components.

Access the leaflet map instance with:

```js
const { getMap } = getContext('leaflet_map')
const map = getMap()
```

Import the leaflet functions and properties you need to create new components.

