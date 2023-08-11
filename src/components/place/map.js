import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Link } from "gatsby"

const MyMapComponent = ({ data }) => {
  return (
    <MapContainer
      center={[35.6895, 139.6917]}
      zoom={13}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.allMicrocmsBlog.nodes.map((location, index) => (
        <Marker key={index} position={[35.681236, 139.767125]}>
          <Popup>
            <Link to={location.url}>リンクを表示</Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default MyMapComponent
