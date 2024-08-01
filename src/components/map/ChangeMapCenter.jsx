import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

export default function ChangeCenter({ center }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
}
