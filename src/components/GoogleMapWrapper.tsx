import { Wrapper, Status } from "@googlemaps/react-wrapper";
import GoogleMap from "./GoogleMap";

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      // return <Spinner />;
      return <h1>LOADING</h1>;
    case Status.FAILURE:
      // return <ErrorComponent />;
      return <h1>Failed to load</h1>;
    case Status.SUCCESS:
      // return <MyMapComponent />;
      return <h1>Map loaded</h1>;
  }
};

const center = { lat: 37.7749, lng: -122.4194 };

const zoom = 13;

const GoogleMapWrapper = () => (
  <Wrapper apiKey={"AIzaSyDY5QfcjjGoo_wPV6rqZsFlfoxMXxSB4c8"} render={render}>
    <GoogleMap center={center} zoom={zoom} />
  </Wrapper>
);

export default GoogleMapWrapper;
