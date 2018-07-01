## Description

A plugin for [React-Leaflet 1.x.x](https://github.com/PaulLeCam/react-leaflet) bringing over the original [leaflet-marker-stack](https://github.com/IvanSanchez/Leaflet.Marker.Stack) plugin to render vertically stacked chip icons onto a [leaflet](https://github.com/Leaflet/Leaflet) map.

Tested and supported with React-Leaflet 1.9.1. Not supported by React-Leaflet 2.x.x

[Code of Conduct](./CODE_OF_CONDUCT.md)

## Installation

```
npm install react-leaflet-marker-stack@next

# or

yarn add react-leaflet-marker-stack@next
```

## Usage Example

![Marker Stack Example](./markerStackExample.png)

```
import React, { Component } from 'react'
import MarkerStack from 'react-leaflet-marker-stack'
import { Map, TileLayer } from 'react-leaflet'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    }

    this.buildRainbowIcons = this.buildRainbowIcons.bind(this)
    this.buildIcons = this.buildIcons.bind(this)
  }

  buildRainbowIcons() {
    const data = [
      { amount: 1000 },
      { amount: 2000 },
      { amount: 3000 },
      { amount: 4000 },
      { amount: 5000 },
      { amount: 6000 }
    ]
    return data.map(item => {
      if (item.amount >= 6000) return { color: 'purple', iconSize: [10, 8], iconAnchor: [5, 4] }
      if (item.amount >= 5000) return { color: 'blue', iconSize: [12, 8], iconAnchor: [6, 4] }
      if (item.amount >= 4000) return { color: 'green', iconSize: [14, 8], iconAnchor: [7, 4] }
      if (item.amount >= 3000) return { color: 'yellow', iconSize: [16, 8], iconAnchor: [8, 4] }
      if (item.amount >= 2000) return { color: 'orange', iconSize: [18, 8], iconAnchor: [9, 4] }
      if (item.amount >= 1000) return { color: 'red', iconSize: [20, 8], iconAnchor: [10, 4] }
    })
  }

  buildIcons() {
    const data = [
      { amount: 1000 },
      { amount: 2000 },
      { amount: 3000 },
      { amount: 4000 },
      { amount: 5000 },
      { amount: 6000 },
      { amount: 7000 }
    ]
    return data.map(item => {
      if (item.amount >= 6000) return { color: 'rgb(155, 155,255)', iconSize: [12, 8], iconAnchor: [6, 4] }
      if (item.amount >= 3000) return { color: 'rgb(155, 140,255)', iconSize: [12, 8], iconAnchor: [6, 4] }
      if (item.amount >= 1000) return { color: 'rgb(155, 100,255)', iconSize: [12, 8], iconAnchor: [6, 4] }
    })
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    const mapStyle = { height: '500px', width: '500px' }
    return (
      <Map style={mapStyle} center={position} ref="map" zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerStack position={position} icons={this.buildRainbowIcons()} />
        <MarkerStack position={[51.507, -0.1]} icons={this.buildIcons()} />
        <MarkerStack position={[51.501, -0.095]} icons={this.buildIcons()} />
        <MarkerStack position={[51.511, -0.08]} icons={this.buildIcons()} />
      </Map>
    )
  }
}
```

## Documentation

`MarkerStack` JSX takes `position` and `icons` as git props.

- `Position` can be an array of [Lat, Lon] values or an object of {lat: "-30.0", lng: "40.0"} values.

- `Icons` should be an array consisting of a specific object shape to customize the icons.

(example: `{ color: 'red', iconSize: [12, 8], iconAnchor: [6, 4] }`)

- color: can be any CSS color property
- iconSize: is an array containing [Width, Height] values
- iconAnchor: is an array containing [X, Y] offsets of the icon.
- border: can be any CSS border property (ex: `red solid 1px`)

## Contributing Help

- Need help porting this over to React-Leaflet v2

## Credit

Credit to [react-leaflet-distance-marker](https://github.com/fullhdpixel/react-leaflet-distance-marker) which I used as an example to create a React-Leaflet plugin and to
) and [Leaflet.Marker.Stack](https://github.com/IvanSanchez/Leaflet.Marker.Stack)
for providing the source for the actual non-react plugin.
