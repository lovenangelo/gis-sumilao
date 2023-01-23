import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, HeatmapLayer, LoadScript } from "@react-google-maps/api";
import { titles } from "../constants/string";

const onHeatMapLoad = (
  heatmapLayer: google.maps.visualization.HeatmapLayer
) => {
  console.log("HeatmapLayer onLoad heatmapLayer: ", heatmapLayer);
};

const onHeatMapUnmount = (
  heatmapLayer: google.maps.visualization.HeatmapLayer
) => {
  console.log("HeatmapLayer onLoad heatmapLayer: ", heatmapLayer);
};

const containerStyle = {
  width: "100vw",
  height: "75vh",
  marginLeft: "auto",
  marginRight: "auto",
};

const center = {
  lat: 8.3451,
  lng: 124.9767,
};

function Map() {
  const [map, setMap] = useState<google.maps.Map>();

  const onMapLoad = useCallback(
    (map: google.maps.Map) => {
      return setMap(map);
    },
    [map]
  );

  return (
    <div className="w-full">
      <h1 className="ml-auto mr-auto text-3xl font-bold">{titles.map_title}</h1>
      <LoadScript googleMapsApiKey="AIzaSyAy5Egle-tE5Jxp5S0nhE2Rz68UZAW_fPM">
        <GoogleMap
          id="heatmap-layer"
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          onLoad={onMapLoad}
        >
          <>
            {/* <HeatmapLayer
              onLoad={onHeatMapLoad}
              onUnmount={onHeatMapUnmount}
              data={[
                new google.maps.LatLng(37.782, -122.447),
                new google.maps.LatLng(37.782, -122.445),
                new google.maps.LatLng(37.782, -122.443),
                new google.maps.LatLng(37.782, -122.441),
                new google.maps.LatLng(37.782, -122.439),
                new google.maps.LatLng(37.782, -122.437),
                new google.maps.LatLng(37.782, -122.435),
                new google.maps.LatLng(37.785, -122.447),
                new google.maps.LatLng(37.785, -122.445),
                new google.maps.LatLng(37.785, -122.443),
                new google.maps.LatLng(37.785, -122.441),
                new google.maps.LatLng(37.785, -122.439),
                new google.maps.LatLng(37.785, -122.437),
                new google.maps.LatLng(37.785, -122.435),
              ]}
            /> */}
          </>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default React.memo(Map);
