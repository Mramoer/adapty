import React from "react";

const integrations = [
  "https://adapty.io/assets/uploads/2024/02/logo-airbridge.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-adjust.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-amplitude.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-appsflyer.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-firebase-and-ga.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-mixpanel.svg",
  "https://adapty.io/assets/uploads/2024/02/logo-onesignal.svg",
  "https://adapty.io/assets/uploads/2025/02/posthog-logo-colorfull.svg",
];

const Integrations: React.FC = () => {
  return (
    <section className="border-y border-violet-100 bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Подружите подписки с любимыми инструментами
            </h2>
            <p className="mt-3 text-sm text-slate-500 sm:text-[15px]">
              Плейсхолдер: выстраивайте единый поток событий подписок в
              маркетинговые, аналитические и инфраструктурные сервисы.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              <li>• Плейсхолдер: маркетинговая аналитика и атрибуция.</li>
              <li>• Плейсхолдер: продуктовая аналитика и ретеншн.</li>
              <li>• Плейсхолдер: уведомления и эксперименты.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-violet-100 bg-[#FFF9F5] p-5 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
              Плейсхолдер: ключевые интеграции
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {integrations.map((src) => (
                <div
                  key={src}
                  className="flex items-center justify-center rounded-2xl bg-white p-3 shadow-sm"
                >
                  <img
                    src={src}
                    alt="Integration logo"
                    loading="lazy"
                    className="max-h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;


