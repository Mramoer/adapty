import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-violet-100 bg-[#FFF9F5]">
      {/* text block */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-xl">
          {/* top badge + link */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 font-medium text-violet-600 shadow-sm">
              Гайд
            </span>
            <button
              type="button"
              className="inline-flex items-center gap-1 font-medium text-[#6A40FF] underline-offset-4 hover:underline"
            >
              Как вырасти до $100K | Скачать
              <img
                src="https://adapty.io/assets/uploads/2024/08/arrow-right-small-accent.svg"
                alt="Стрелка"
                className="h-3 w-3"
              />
            </button>
          </div>

          <h1 className="mt-7 text-[32px] font-extrabold leading-[1.06] tracking-tight text-[#3D2CF5] sm:text-[40px] lg:text-[54px]">
            <span className="relative inline-block">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-[-12px] inset-y-[22%] -z-10 rounded-[999px] bg-[linear-gradient(90deg,rgba(136,106,255,0)_10%,rgba(136,106,255,.3)_50%,rgba(136,106,255,0)_90%)]"
              />
              <span className="relative">
                Платформа
                <br />
                для роста
                <br />
                мобильных
                <br />
                приложений
              </span>
            </span>
          </h1>

          <p className="mt-6 text-sm leading-relaxed text-[#4F425F] sm:text-base">
            Сэкономьте месяцы на внедрении подписок и удвойте доход от приложения благодаря
            эффективному управлению пейволлами.
          </p>

          {/* Email form + CTAs */}
          <form className="mt-8 space-y-3 sm:space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex w-full flex-1 items-stretch rounded-full border border-violet-100 bg-white shadow-sm">
                <input
                  type="email"
                  placeholder="Email адрес"
                  className="h-11 flex-1 rounded-full border-0 bg-transparent px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus-visible:outline-none sm:h-12 sm:text-sm"
                />
                <button
                  type="submit"
                  className="h-11 rounded-full bg-violet-600 px-6 text-sm font-semibold text-white shadow-sm shadow-violet-500/40 transition hover:bg-violet-500 sm:h-12 sm:px-7"
                >
                  Начать
                </button>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#6A40FF] underline-offset-4 hover:underline"
              >
                Запись на демо
                <img
                  src="https://adapty.io/assets/uploads/2024/08/arrow-right-small-accent.svg"
                  alt="Стрелка"
                  className="h-3 w-3"
                />
              </button>
            </div>
            <div className="flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:gap-4 sm:text-[13px]">
              <span>Плейсхолдер: текст о безопасности и условиях сервиса.</span>
              <button
                type="button"
                className="inline-flex w-max items-center gap-1 text-violet-600 underline-offset-2 hover:underline"
              >
                Скачать гайд
                <img
                  src="https://adapty.io/assets/uploads/2024/08/arrow-right-small-accent.svg"
                  alt="Стрелка"
                  className="h-3 w-3"
                />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* visual block on mobile (под текстом) */}
      <div className="px-4 pb-14 sm:px-6 md:hidden">
        <div className="relative mx-auto max-w-3xl">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-linear-to-tr from-violet-200/50 via-fuchsia-100/40 to-orange-100/40 blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-violet-100 bg-white/90 p-4 shadow-xl shadow-violet-200/60">
            <img
              src="https://adapty.io/assets/uploads/2025/02/adapty-overview@2x.webp"
              alt="Обзор аналитики приложения"
              className="w-full rounded-3xl object-cover"
              loading="lazy"
            />
            <img
              src="https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@2x.webp"
              alt="Превью экрана подписки"
              className="absolute left-4 top-1/2 w-32 -translate-y-1/2 rounded-[26px] object-cover shadow-2xl shadow-slate-500/40 sm:left-8 sm:w-40"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* visual block on desktop — справа от секции */}
      <div className="pointer-events-none absolute inset-y-14 right-4 hidden md:block lg:inset-y-16 lg:right-10">
        <div className="relative w-[460px] max-w-[50vw] lg:w-[520px]">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-linear-to-tr from-violet-200/50 via-fuchsia-100/40 to-orange-100/40 blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-violet-100 bg-white/90 p-4 shadow-xl shadow-violet-200/60">
            <img
              src="https://adapty.io/assets/uploads/2025/02/adapty-overview@2x.webp"
              alt="Обзор аналитики приложения"
              className="w-full rounded-3xl object-cover"
              loading="lazy"
            />
            <img
              src="https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@2x.webp"
              alt="Превью экрана подписки"
              className="absolute left-6 top-1/2 w-40 -translate-y-1/2 rounded-[26px] object-cover shadow-2xl shadow-slate-500/40 lg:left-10 lg:w-44"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;