const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-violet-100 bg-[#FFF9F5]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-600">
            <span className="text-xs font-bold tracking-tight text-white">
              AD
            </span>
          </div>
          <span className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
            adapty
          </span>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-xs font-medium text-slate-700 sm:flex sm:text-sm">
            <a href="#product" className="transition hover:text-slate-900">
              Продукт
            </a>
            <a href="#cases" className="transition hover:text-slate-900">
              Кейсы
            </a>
            <a href="#resources" className="transition hover:text-slate-900">
              Ресурсы
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden rounded-full border border-violet-500 px-4 py-1.5 text-xs font-semibold text-violet-600 transition hover:bg-violet-50 sm:inline-flex sm:px-5 sm:text-sm">
              Начать
            </button>
            <button className="rounded-full bg-violet-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm shadow-violet-500/40 transition hover:bg-violet-500 sm:px-5 sm:text-sm">
              Запись на демо
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;