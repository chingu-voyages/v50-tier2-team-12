import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useCallback, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Link } from 'react-router-dom';
import markerUrl from '../../assets/marker.svg';
import { cn, removeDuplicates } from '../../utils/utils';
import ChangeMapCenter from './ChangeMapCenter';
import DropDown from './DropDown';

const storageKey = 'app-country';

export default function Map({ restaurants }) {
  const defaultCountry = localStorage.getItem(storageKey) ?? '';

  const countries = removeDuplicates(restaurants, 'country').map(
    (restaurant) => restaurant.country
  );

  countries.sort();

  const [filter, setFilter] = useState(defaultCountry);

  const filteredRestaurants = restaurants.filter((restuarant) =>
    restuarant.country.includes(filter)
  );

  const averageLatitude = getAverage(filteredRestaurants, 'latitude');

  const averageLongitude = getAverage(filteredRestaurants, 'longitude');

  // map center
  const center = [averageLatitude, averageLongitude];

  const zoom = filter ? 10 : 5;

  // custom map marker icon
  const markerIcon = new Icon({
    iconUrl: markerUrl,
    iconSize: [38, 38],
  });

  // change value of filter (country)
  const updateFilter = useCallback((value) => {
    setFilter(value);
    localStorage.setItem(storageKey, value);
  }, []);

  return (
    <>
      <DropDown
        value={filter}
        handleChange={updateFilter}
        options={countries}
        label='Select in which city you are'
        showDefaultOption
      />

      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        className={cn(
          'w-screen min-h-[calc(100lvh-12rem)] max-w-full rounded-md'
        )}
      >
        <ChangeMapCenter center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        <MarkerClusterGroup>
          {filteredRestaurants.map((restaurant) => {
            return (
              <Marker
                position={[restaurant.latitude, restaurant.longitude]}
                key={restaurant.name}
                title={restaurant.name}
                icon={markerIcon}
              >
                <Popup>
                  <h4 className='mb-1 text-xl'>{restaurant.name}</h4>
                  <Link
                    to={`/restaurants/${restaurant.name}`}
                    className='capitalize text-center block'
                  >
                    view restaurant
                  </Link>
                </Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
}

function getAverage(items, key) {
  return items.reduce((sum, item) => sum + item[key], 0) / items.length;
}
