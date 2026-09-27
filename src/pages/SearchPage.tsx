import { useState } from 'react';
import { useLang } from '@/context/LanguageContext';
import type { Page } from '@/App';
import { searchMedicines } from '@/services/medicineService';
import type { Medicine } from '@/data/demoData';
import {
  Search,
  Pill,
  Beaker,
  Building2,
  Tag,
  Calendar,
  Store,
  AlertCircle,
} from 'lucide-react';

interface SearchPageProps {
  onNavigate: (page: Page) => void;
  onSelectMedicine?: (med: Medicine) => void;
}

export default function SearchPage({ onSelectMedicine }: SearchPageProps) {
  const { t } = useLang();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Medicine[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setResults(searchMedicines(query));
    setSearched(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-2">
        {t.search.title}
      </h1>

      {/* Search bar */}
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.search.placeholder}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-700"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap"
        >
          {t.search.searchBtn}
        </button>
      </form>

      {/* Demo data label */}
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
          {t.search.demoLabel}
        </span>
      </div>

      {/* No results */}
      {searched && results.length === 0 && (
        <div className="text-center py-12">
          <AlertCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-500">{t.search.noResults}</p>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((med) => (
            <div
              key={med.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-5"
            >
              <h3 className="text-lg font-bold text-slate-800 mb-1">
                {med.name}
              </h3>
              <p className="text-sm text-slate-500 mb-4">
                {med.generic_name}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <DetailItem
                  icon={Beaker}
                  label={t.medicine.strength}
                  value={med.strength}
                />
                <DetailItem
                  icon={Pill}
                  label={t.medicine.form}
                  value={med.dosage_form}
                />
                <DetailItem
                  icon={Building2}
                  label={t.medicine.manufacturer}
                  value={med.manufacturer}
                />
                <DetailItem
                  icon={Tag}
                  label={t.medicine.referencePrice}
                  value={`₹${med.reference_price}`}
                />
                <DetailItem
                  icon={Store}
                  label={t.medicine.source}
                  value={med.source}
                />
                <DetailItem
                  icon={Calendar}
                  label={t.medicine.lastUpdated}
                  value={formatDate(med.updated_at)}
                />
              </div>

              <button
                onClick={() => onSelectMedicine?.(med)}
                className="w-full px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors"
              >
                {t.medicine.viewDetails}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DetailItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-4 h-4 text-slate-400 shrink-0" />
      <div>
        <p className="text-xs text-slate-400">{label}</p>
        <p className="text-sm font-semibold text-slate-700">{value}</p>
      </div>
    </div>
  );
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}
