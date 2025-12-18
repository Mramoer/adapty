import React from "react";

const Metrics: React.FC = () => {
  return (
    <section className="border-b border-slate-100 bg-[#F9F7FF] py-16 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[11px]">
          Управляйте своим подписочным бизнесом.
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          Быстрее и дешевле.
        </h2>
        <p className="mt-4 text-sm text-slate-600 sm:text-[15px]">
          Adapty обрабатывает доход от подписок с самым высоким SLA уровнем в индустрии
        </p>

        <div className="mt-10 grid gap-8 text-left sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              $2&nbsp;млрд.
            </div>
            <p className="mt-2 text-sm text-slate-600">обрабатываемого дохода</p>
          </div>
          <div>
            <div className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              99.99%
            </div>
            <p className="mt-2 text-sm text-slate-600">времени безотказной работы</p>
          </div>
          <div>
            <div className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              2.5&nbsp;млрд.
            </div>
            <p className="mt-2 text-sm text-slate-600">обслуживаемых пользователей</p>
          </div>
          <div>
            <div className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              60&nbsp;млрд.
            </div>
            <p className="mt-2 text-sm text-slate-600">обращений к API / месяц</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;


