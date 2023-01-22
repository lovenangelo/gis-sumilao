import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "500px",
  height: "500px",
};

const center = {
  lat: 8.3451,
  lng: 124.9767,
};

function MyComponent() {
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyAy5Egle-tE5Jxp5S0nhE2Rz68UZAW_fPM">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default React.memo(MyComponent);
