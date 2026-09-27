import { useLang } from '@/context/LanguageContext';
import type { Page } from '@/App';
import { demoPrescriptions, type ExtractedMedicine } from '@/data/demoData';
import {
  FileText,
  Search as SearchIcon,
  Bookmark,
  Pill,
  Calendar,
  ChevronRight,
  Package,
} from 'lucide-react';

interface DashboardPageProps {
  onNavigate: (page: Page) => void;
  onViewPrescription?: (medicines: ExtractedMedicine[]) => void;
}

export default function DashboardPage({
  onNavigate,
  onViewPrescription,
}: DashboardPageProps) {
  const { t } = useLang();

  const savedMedicines = [
    { name: 'Paracetamol 500 mg', info: 'Tablet • Cipla Ltd.' },
    { name: 'Metformin 500 mg', info: 'Tablet • USV Pvt Ltd' },
  { name: 'Azithromycin 500 mg', info: 'Tablet • Sun Pharma' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        {t.dashboard.title}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Prescriptions */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-teal-600" />
            <h2 className="font-semibold text-slate-800">
              {t.dashboard.recentPrescriptions}
            </h2>
          </div>
          {demoPrescriptions.length === 0 ? (
            <p className="text-sm text-slate-400 py-4 text-center">
              {t.dashboard.noPrescriptions}
            </p>
          ) : (
            <div className="space-y-3">
              {demoPrescriptions.map((rx) => (
                <div
                  key={rx.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
                  onClick={() => {
                    if (onViewPrescription) {
                      onViewPrescription(rx.medicines);
                    } else {
                      onNavigate('upload');
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center">
                      <Package className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-sm font-medium text-slate-700">
                          {formatDate(rx.date)}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {rx.medicineCount} {t.dashboard.numMedicines}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-teal-600 text-sm font-medium">
                    {t.dashboard.viewResults}
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Recent Searches */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-4">
            <SearchIcon className="w-5 h-5 text-blue-600" />
            <h2 className="font-semibold text-slate-800">
              {t.dashboard.recentSearches}
            </h2>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Paracetamol', date: '2026-09-21' },
              { name: 'Metformin', date: '2026-09-20' },
              { name: 'Azithromycin', date: '2026-09-19' },
            ].map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
                onClick={() => onNavigate('search')}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Pill className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">
                      {s.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {formatDate(s.date)}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </div>
            ))}
          </div>
        </section>

        {/* Saved Medicines */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Bookmark className="w-5 h-5 text-teal-600" />
            <h2 className="font-semibold text-slate-800">
              {t.dashboard.savedMedicines}
            </h2>
          </div>
          {savedMedicines.length === 0 ? (
            <p className="text-sm text-slate-400 py-4 text-center">
              {t.dashboard.noSaved}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {savedMedicines.map((med, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
                  onClick={() => onNavigate('search')}
                >
                  <p className="text-sm font-semibold text-slate-800">
                    {med.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{med.info}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}
