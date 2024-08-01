import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

export default function ChangeCenter({ center, zoom }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [center, map, zoom]);
  return null;
}
