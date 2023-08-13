import React from "react"
import {
  MapContainer,
  TileLayer,
  Marker,
  Circle,
  FeatureGroup,
  Popup,
} from "react-leaflet"
import { Link } from "gatsby"

const MyMapComponent = ({ data }) => {
  const informations = data.allMicrocmsInfomation.nodes.map((a, i) => a)
  return (
    <MapContainer
      center={[35.6895, 139.6917]}
      zoom={13}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.allMicrocmsBlog.nodes.map((blog, index) => (
        <Marker
          key={index}
          position={[blog.latitude ?? 35.6895, blog.longitude ?? 139.6917]}
        >
          <Popup>
            <Link to={`/blog/${blog.id}`}>
              {blog.title}
              <br />
              場所：{blog.place}
            </Link>
          </Popup>
        </Marker>
      ))}
      {informations.map((blog, index) => (
        <FeatureGroup pathOptions={{ color: "purple" }}>
          <Circle
            center={[blog.latitude, blog.longitude]}
            pathOptions={{ fillColor: "red" }}
            radius={100}
            stroke={false}
          />
          <Popup>
            <Link to={`/event/${blog.id}`}>
              {blog.title}
              <br />
              場所：{blog.place}
              <br />
              開催予定
            </Link>
          </Popup>
          <Marker
            key={index}
            position={[blog.latitude ?? 35.6895, blog.longitude ?? 139.6917]}
          ></Marker>
        </FeatureGroup>
      ))}
    </MapContainer>
  )
}

export default MyMapComponent
