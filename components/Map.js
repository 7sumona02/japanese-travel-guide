import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 35.6895, // Tokyo coordinates
  lng: 139.6917,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Add your API key in .env
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={6} center={center}>
      <Marker position={{ lat: 35.6895, lng: 139.6917 }} />
      <Marker position={{ lat: 34.6937, lng: 135.5023 }} /> {/* Osaka */}
      <Marker position={{ lat: 35.0116, lng: 135.7681 }} /> {/* Kyoto */}
    </GoogleMap>
  );
}