import React from "react";

const logos = [
  {
    src: "https://adapty.io/assets/uploads/2024/01/logo-feeld-gray.svg",
    alt: "Feeld",
  },
  {
    src: "https://adapty.io/assets/uploads/2024/01/logo-bumble-gray.svg",
    alt: "Bumble",
  },
  {
    src: "https://adapty.io/assets/uploads/2025/02/weewoo.svg",
    alt: "Weewoo",
  },
  {
    src: "https://adapty.io/assets/uploads/2025/02/AppNation.webp",
    alt: "AppNation",
  },
  {
    src: "https://adapty.io/assets/uploads/2025/02/almus.svg",
    alt: "almus",
  },
  {
    src: "https://adapty.io/assets/uploads/2024/01/logo-text-impala-studios-gray.svg",
    alt: "Impala Studios",
  },
  {
    src: "https://adapty.io/assets/uploads/2024/01/logo-hubx-gray.svg",
    alt: "HubX",
  },
];

const LogoCloud: React.FC = () => {
  return (
    <section className="border-b border-violet-100 bg-[#FFF9F5] py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.16em] text-slate-500 sm:text-[11px]">
          Доверяют более 15,000+ приложений и крупнейших мировых издателей приложений
        </p>

        <div className="mt-6 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 opacity-80 sm:grid-cols-4 lg:grid-cols-7">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="max-h-8 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;


