import { useState } from 'react';
import { useLang } from '@/context/LanguageContext';
import type { Page } from '@/App';
import type { Medicine } from '@/data/demoData';
import {
  getNearbySources,
  requestLocation,
  getGoogleMapsEmbed,
  getGoogleMapsLink,
  getGoogleMapsSearchLink,
} from '@/services/mapsService';
import type { NearbySource } from '@/data/demoData';
import {
  MapPin,
  Navigation,
  LocateFixed,
  Store,
  AlertCircle,
  Building,
} from 'lucide-react';

interface NearbySourcesPageProps {
  selectedMedicine: Medicine | null;
  onNavigate: (page: Page) => void;
}

export default function NearbySourcesPage({
  selectedMedicine,
  onNavigate,
}: NearbySourcesPageProps) {
  const { t } = useLang();
  const [sources, setSources] = useState<NearbySource[]>(getNearbySources());
  const [locationMsg, setLocationMsg] = useState<string | null>(null);
  const [usingLocation, setUsingLocation] = useState(false);
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);

  const handleLocation = async () => {
    try {
      const coords = await requestLocation();
      setUserCoords(coords);
      setSources(getNearbySources(coords));
      setUsingLocation(true);
      setLocationMsg(null);
    } catch {
      setLocationMsg(t.nearby.locationDenied);
      setUsingLocation(false);
      setSources(getNearbySources());
    }
  };

  if (!selectedMedicine) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">
          {t.nearby.title}
        </h1>
        <p className="text-slate-500 mb-6">{t.nearby.subtitle}</p>
        <div className="text-center py-12">
          <AlertCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-500 mb-4">{t.nearby.selectMedicine}</p>
          <button
            onClick={() => onNavigate('search')}
            className="px-5 py-2.5 rounded-xl bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors"
          >
            {t.nav.search}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 mb-1">
            {t.nearby.title}
          </h1>
          <p className="text-slate-500">{t.nearby.subtitle}</p>
        </div>
        <button
          onClick={handleLocation}
          className="px-4 py-2.5 rounded-xl bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          <LocateFixed className="w-4 h-4" />
          {t.nearby.requestLocation}
        </button>
      </div>

      {/* Selected medicine */}
      <div className="bg-teal-50 rounded-xl p-3 mb-4 flex items-center gap-2">
        <span className="text-sm text-teal-700 font-medium">
          {selectedMedicine.name} {selectedMedicine.strength}
        </span>
      </div>

      {/* Location message */}
      {locationMsg && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-sm text-amber-700">
          {locationMsg}
        </div>
      )}

      {/* Demo label */}
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
          {t.nearby.demoLabel}
        </span>
        {usingLocation && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium">
            <LocateFixed className="w-3 h-3" />
            GPS
          </span>
        )}
      </div>

      {/* Quick Search on Google Maps */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <a
          href={getGoogleMapsSearchLink('Jan Aushadhi Kendra near me', userCoords || undefined)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors text-xs font-medium border border-green-200"
        >
          <Building className="w-3.5 h-3.5" />
          {t.nearby.janAushadhi} ({t.nearby.viewMap})
        </a>
        <a
          href={getGoogleMapsSearchLink('pharmacy near me', userCoords || undefined)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors text-xs font-medium border border-blue-200"
        >
          <Store className="w-3.5 h-3.5" />
          {t.nearby.pharmacy} ({t.nearby.viewMap})
        </a>
      </div>

      {/* Sources list */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {sources.map((src) => (
          <div
            key={src.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-4"
          >
            <div className="flex items-start gap-3 mb-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  src.type === 'jan_aushadhi'
                    ? 'bg-green-50 text-green-600'
                    : 'bg-blue-50 text-blue-600'
                }`}
              >
                {src.type === 'jan_aushadhi' ? (
                  <Building className="w-5 h-5" />
                ) : (
                  <Store className="w-5 h-5" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-800">{src.name}</p>
                <span
                  className={`text-xs font-medium ${
                    src.type === 'jan_aushadhi'
                      ? 'text-green-600'
                      : 'text-blue-600'
                  }`}
                >
                  {src.type === 'jan_aushadhi'
                    ? t.nearby.janAushadhi
                    : t.nearby.pharmacy}
                </span>
              </div>
            </div>

            <div className="space-y-1.5 mb-3">
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{src.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-teal-600 font-medium">
                <Navigation className="w-4 h-4 shrink-0" />
                {t.nearby.distance}: {src.distance_km} km
              </div>
            </div>

            <a
              href={getGoogleMapsLink(src.lat, src.lng)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              {t.nearby.viewMap}
            </a>
          </div>
        ))}
      </div>

      {/* Map embed */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-100">
          <MapPin className="w-5 h-5 text-teal-600" />
          <h2 className="font-semibold text-slate-700">{t.nearby.viewMap}</h2>
        </div>
        <iframe
          title="nearby-map"
          src={getGoogleMapsEmbed(sources[0]?.lat || 28.6139, sources[0]?.lng || 77.209)}
          className="w-full h-72 border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}
