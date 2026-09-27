import { useLang } from '@/context/LanguageContext';
import type { Page } from '@/App';
import {
  Upload,
  Search,
  ShieldCheck,
  Camera,
  ScanLine,
  ClipboardCheck,
  MapPin,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLang();

  const steps = [
    {
      icon: Camera,
      title: t.howItWorks.step1Title,
      desc: t.howItWorks.step1Desc,
    },
    {
      icon: ScanLine,
      title: t.howItWorks.step2Title,
      desc: t.howItWorks.step2Desc,
    },
    {
      icon: ClipboardCheck,
      title: t.howItWorks.step3Title,
      desc: t.howItWorks.step3Desc,
    },
    {
      icon: MapPin,
      title: t.howItWorks.step4Title,
      desc: t.howItWorks.step4Desc,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Hero */}
      <section className="pt-12 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
          <ShieldCheck className="w-4 h-4" />
          {t.brandName}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight max-w-3xl mx-auto mb-4">
          {t.hero.heading}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          {t.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('upload')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <Upload className="w-5 h-5" />
            {t.hero.uploadBtn}
          </button>
          <button
            onClick={() => onNavigate('search')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-slate-700 font-semibold border border-slate-300 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            {t.hero.searchBtn}
          </button>
        </div>
      </section>

      {/* Safety note */}
      <section className="mb-12">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 max-w-3xl mx-auto">
          <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 leading-relaxed">
            {t.hero.safetyNote}
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="pb-16">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">
          {t.howItWorks.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-teal-600" />
                </div>
                <div className="text-sm font-bold text-teal-600 mb-1">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
