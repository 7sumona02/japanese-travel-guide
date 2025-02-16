import { useEffect } from 'react';
import maplibregl from 'maplibre-gl';

const MAP_STYLE = 'https://maps.geoapify.com/v1/styles/klokantech-basic/style.json';
const API_KEY = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;

export default function Map() {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: 'map',
      style: MAP_STYLE,
      center: [138.2529, 36.2048], // Japan coordinates
      zoom: 6,
    });

    map.addControl(new maplibregl.NavigationControl());
  }, []);

  return <div id="map" className="w-full h-96 rounded-lg shadow-lg"></div>;
}