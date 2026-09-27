import { useLang } from '@/context/LanguageContext';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-slate-800 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-start gap-3 mb-4">
          <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed text-slate-300">
            {t.footer.disclaimer}
          </p>
        </div>
        <div className="border-t border-slate-700 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-semibold text-slate-200">{t.brandName}</span>
          </div>
          <p className="text-xs text-slate-400">
            © 2026 {t.brandName}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
