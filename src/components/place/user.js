import React, { Component } from "react"
import { MapContainer } from "react-leaflet/MapContainer"
import { TileLayer } from "react-leaflet/TileLayer"
import { Marker } from "react-leaflet/Marker"
import { Popup } from "react-leaflet/Popup"
import { useMap } from "react-leaflet/hooks"
import { Map } from "react-leaflet"

export default class User extends Component {
  render() {
    const { options } = this.props
    console.log(options, typeof window, "bbbbbbbbb")

    if (typeof window !== "undefined") {
      const position = [51.505, -0.09]

      return (
        <div>
          ddddd
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      )
    }
    return null
  }
}
