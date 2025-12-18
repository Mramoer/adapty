import React from "react";

type SdkIcon = {
  src: string;
  alt: string;
};

const sdks: SdkIcon[] = [
  { src: "https://adapty.io/assets/uploads/2024/01/icon-swift-outline.svg", alt: "Swift" },
  { src: "https://adapty.io/assets/uploads/2024/01/icon-kotlin-outline.svg", alt: "Kotlin" },
  { src: "https://adapty.io/assets/uploads/2024/01/icon-react-outline.svg", alt: "React Native" },
  { src: "https://adapty.io/assets/uploads/2024/01/icon-flutter-outline.svg", alt: "Flutter" },
  { src: "https://adapty.io/assets/uploads/2024/01/icon-unity-outline.svg", alt: "Unity" },
  { src: "https://adapty.io/assets/uploads/2024/01/icon-web-outline.svg", alt: "Web" },
  { src: "https://adapty.io/assets/uploads/2024/02/icon-stripe-outline.svg", alt: "Stripe" },
  {
    src: "https://adapty.io/assets/uploads/2025/10/capacitor-stroke-gradient-logo.webp",
    alt: "Capacitor",
  },
  {
    src: "https://adapty.io/assets/uploads/2025/10/kmp-stroke-gradient-logo.webp",
    alt: "Kotlin Multiplatform",
  },
  {
    src: "https://wp-prod-new.adapty.io/assets/uploads/2024/09/icon-flutterflow-outline.svg",
    alt: "FlutterFlow",
  },
];

const SdkPlatforms: React.FC = () => {
  return (
    <section className="border-b border-violet-100 bg-white py-12 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 sm:text-[11px]">
              Плейсхолдер: SDK и платформы
            </p>
            <h2 className="mt-2 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              Поддержка популярных стэков и фреймворков
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-500 sm:text-[15px]">
              Плейсхолдер: подключите продукт к нативным и кроссплатформенным
              стэкам, не меняя архитектуру приложения.
            </p>
          </div>

          <button className="mt-3 inline-flex items-center gap-1 self-start rounded-full border border-violet-200 bg-[#FFF9F5] px-4 py-1.5 text-xs font-semibold text-violet-700 underline-offset-2 hover:border-violet-300 hover:bg-white hover:underline sm:mt-0 sm:text-sm">
            Документация
            <img
              src="https://adapty.io/assets/uploads/2024/08/arrow-right-small-violet-400__16x16-size.svg"
              alt="Перейти"
              className="h-3 w-3"
            />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10">
          {sdks.map((sdk) => (
            <div
              key={sdk.alt}
              className="group flex items-center justify-center rounded-2xl border border-violet-50 bg-[#FFF9F5] p-3 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-200/70"
            >
              <img
                src={sdk.src}
                alt={sdk.alt}
                loading="lazy"
                className="max-h-10 w-auto object-contain transition group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(129,140,248,0.9)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SdkPlatforms;


