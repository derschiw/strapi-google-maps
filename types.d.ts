/**
 * The plugin's configuration content-type.
 */
export interface Config {
  id: number;
  googleMapsKey: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Location {
  coordinates: Coordinates;
  geohash: string;
}
