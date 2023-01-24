import { useRef, useEffect } from "react";

function GoogleMap({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    }
  });

  return (
    <div className="h-screen w-screen">
      <h1 className="center">Geographical Information System</h1>
      <div className="w-full h-5/6" ref={ref} id="map" />
    </div>
  );
}

export default GoogleMap;
