import { useLang } from '@/context/LanguageContext';
import type { ExtractedMedicine } from '@/data/demoData';
import { CheckCircle2, AlertTriangle, Pill, Package, Beaker, Hash } from 'lucide-react';

interface MedicineCardProps {
  medicine: ExtractedMedicine;
  onViewDetails?: () => void;
  onComparePrices?: () => void;
  onFindNearby?: () => void;
}

export default function MedicineCard({
  medicine,
  onViewDetails,
  onComparePrices,
  onFindNearby,
}: MedicineCardProps) {
  const { t } = useLang();
  const isClear = !medicine.needs_verification;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-5">
      {/* Status badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {isClear ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              {t.medicine.clearlyRead}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              {t.medicine.needsVerification}
            </span>
          )}
        </div>
      </div>

      {/* Medicine name */}
      <h3 className="text-xl font-bold text-slate-800 mb-3">
        {medicine.name}
      </h3>

      {/* Details grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Beaker className="w-4 h-4 text-slate-400 shrink-0" />
          <div>
            <p className="text-xs text-slate-400">{t.medicine.strength}</p>
            <p className="text-sm font-semibold text-slate-700">
              {medicine.strength}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Pill className="w-4 h-4 text-slate-400 shrink-0" />
          <div>
            <p className="text-xs text-slate-400">{t.medicine.form}</p>
            <p className="text-sm font-semibold text-slate-700">
              {medicine.dosage_form}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Hash className="w-4 h-4 text-slate-400 shrink-0" />
          <div>
            <p className="text-xs text-slate-400">{t.medicine.quantity}</p>
            <p className="text-sm font-semibold text-slate-700">
              {medicine.quantity}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-slate-400 shrink-0" />
          <div>
            <p className="text-xs text-slate-400">{t.medicine.name}</p>
            <p className="text-sm font-semibold text-slate-700">
              {medicine.name}
            </p>
          </div>
        </div>
      </div>

      {/* MedicineBridge Check */}
      <MedicineBridgeCheck medicine={medicine} />

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2 mt-4">
        {onViewDetails && (
          <button
            onClick={onViewDetails}
            className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors"
          >
            {t.medicine.viewDetails}
          </button>
        )}
        {onComparePrices && (
          <button
            onClick={onComparePrices}
            className="px-4 py-2 rounded-lg bg-teal-50 text-teal-700 text-sm font-medium hover:bg-teal-100 transition-colors"
          >
            {t.medicine.comparePrices}
          </button>
        )}
        {onFindNearby && (
          <button
            onClick={onFindNearby}
            className="px-4 py-2 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium hover:bg-blue-100 transition-colors"
          >
            {t.medicine.findNearby}
          </button>
        )}
      </div>
    </div>
  );
}

function MedicineBridgeCheck({ medicine }: { medicine: ExtractedMedicine }) {
  const { t } = useLang();
  const hasName = !!medicine.name;
  const hasStrength = !!medicine.strength;
  const hasQuantity = !!medicine.quantity;
  const allGood = hasName && hasStrength && hasQuantity && !medicine.needs_verification;

  return (
    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
      <p className="text-xs font-semibold text-slate-500 mb-2">
        {t.medicine.checkTitle}
      </p>
      {allGood ? (
        <div className="space-y-1">
          {hasName && (
            <CheckItem text={t.medicine.nameIdentified} />
          )}
          {hasStrength && (
            <CheckItem text={t.medicine.strengthIdentified} />
          )}
          {hasQuantity && (
            <CheckItem text={t.medicine.quantityIdentified} />
          )}
        </div>
      ) : (
        <div className="flex items-center gap-1.5 text-amber-600">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span className="text-sm font-medium">
            {t.medicine.needsVerificationShort}
          </span>
        </div>
      )}
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-1.5 text-green-600">
      <CheckCircle2 className="w-4 h-4 shrink-0" />
      <span className="text-sm">{text}</span>
    </div>
  );
}
