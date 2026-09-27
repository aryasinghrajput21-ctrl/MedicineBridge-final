import { useLang } from '@/context/LanguageContext';
import type { Page } from '@/App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const { t, lang, setLang } = useLang();

  const navItems: { key: Page; label: string }[] = [
    { key: 'home', label: t.nav.home },
    { key: 'upload', label: t.nav.upload },
    { key: 'search', label: t.nav.search },
    { key: 'price', label: t.nav.priceComparison },
    { key: 'nearby', label: t.nav.nearbySources },
    { key: 'dashboard', label: t.nav.dashboard },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-lg text-slate-800 hidden sm:block">
              {t.brandName}
            </span>
          </button>

          {/* Nav links - desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.key
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language switch */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center bg-slate-100 rounded-lg p-0.5">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  lang === 'en'
                    ? 'bg-white text-teal-700 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  lang === 'hi'
                    ? 'bg-white text-teal-700 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>
        </div>

        {/* Nav links - mobile */}
        <nav className="lg:hidden flex items-center gap-1 overflow-x-auto pb-2 -mx-1 px-1">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                currentPage === item.key
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
