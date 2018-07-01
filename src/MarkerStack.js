import L from 'leaflet'
import { Marker } from 'react-leaflet'
import PropTypes from 'prop-types'
import './lib/L.Icon.Chip.js'

import MS from './lib/L.Marker.Stack'

// Converts leaflet-marker-stack to a React Component
export class MarkerStack extends Marker {
  createLeafletElement(props) {
    const { position, ...otherProps } = props
    const { map } = this.context

    const icons = props.icons.map(icon => {
      return L.icon.chip(icon) // Extended L.DivIcon from ./lib/L.Icon.Chip
    })

    this.marker = new L.Marker.Stack(position, {
      ...otherProps,
      icons
    }).addTo(map)

    return this.marker
  }

  updateLeafletElement(fromProps, toProps) {
    const { map } = this.context

    this.marker.removeFrom(map) // Resets
    this.createLeafletElement(toProps) // To redraw MarkerStack
  }

  addMarkerStack = () => {
    this.marker.addMarkerStack()
  }

  removeMarkerStack = () => {
    this.marker.removeMarkerStack()
  }
}

MarkerStack.propTypes = {
  position: PropTypes.object,
  icons: PropTypes.array
}

export default MarkerStack
