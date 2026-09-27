import { demoNearbySources, type NearbySource } from '@/data/demoData';

// Haversine formula to calculate great-circle distance between two coordinates in kilometers
export function calculateHaversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return Math.round(distance * 10) / 10; // Round to 1 decimal place
}

export function getNearbySources(userLocation?: { lat: number; lng: number }): NearbySource[] {
  if (!userLocation) {
    return demoNearbySources;
  }

  // Calculate distance from user location to each demo source and sort nearest to farthest
  return demoNearbySources
    .map((src) => ({
      ...src,
      distance_km: calculateHaversineDistance(
        userLocation.lat,
        userLocation.lng,
        src.lat,
        src.lng
      ),
    }))
    .sort((a, b) => a.distance_km - b.distance_km);
}

export function getNearbySourcesForMedicine(
  medicineId: string,
  userLocation?: { lat: number; lng: number }
): NearbySource[] {
  // In demo mode, all sources carry all medicines
  void medicineId;
  return getNearbySources(userLocation);
}

export function requestLocation(): Promise<{ lat: number; lng: number }> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation not supported'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => reject(new Error(err.message)),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  });
}

export function getGoogleMapsLink(lat: number, lng: number): string {
  return `https://www.google.com/maps?q=${lat},${lng}`;
}

export function getGoogleMapsEmbed(lat: number, lng: number): string {
  return `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
}

export function getGoogleMapsSearchLink(
  query: string,
  userCoords?: { lat: number; lng: number }
): string {
  const q = encodeURIComponent(query);
  if (userCoords) {
    return `https://www.google.com/maps/search/${q}/@${userCoords.lat},${userCoords.lng},14z`;
  }
  return `https://www.google.com/maps/search/${q}`;
}
