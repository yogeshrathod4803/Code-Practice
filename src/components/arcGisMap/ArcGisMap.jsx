import React, { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView.js";
import Map from "@arcgis/core/Map.js";
import "../arcGisMap/ArcGisMap.css";

const ArcGisMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      basemap: "osm",
    });

    const view = new MapView({
      map: map,
      container: mapRef.current,
      center: [-122.4194, 37.7749],
      zoom: 13,
    });

    return () => view && view.destroy();
  }, []);

  return (
    <div>
      <div className="map-container" ref={mapRef}></div>
      <div className="address-container">
        <address>
          1 Dr Carlton B Goodlett Pl, San Francisco, CA 94102, USA
        </address>
      </div>
    </div>
  );
};

export default ArcGisMap;
