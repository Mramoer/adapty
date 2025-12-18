import React from "react";

type TestimonialCard = {
  logo: string;
  logoAlt: string;
  avatar: string;
  name: string;
  role: string;
  quote: string;
};

const cards: TestimonialCard[] = [
  {
    logo: "https://adapty.io/assets/uploads/2024/02/Smitten_Color-Logo-Small-02.webp",
    logoAlt: "Smitten logo",
    avatar: "https://adapty.io/assets/uploads/2024/02/Magnus-Olafsson-Smitten@2x.webp",
    name: "Плейсхолдер имени",
    role: "Плейсхолдер должности, Smitten",
    quote:
      "Плейсхолдер: короткая цитата про рост выручки и ускорение экспериментов с подписками.",
  },
  {
    logo: "https://adapty.io/assets/uploads/2024/03/logo-smartist-black@2x.png",
    logoAlt: "Smartist logo",
    avatar: "https://adapty.io/assets/uploads/2024/02/Ilgar-Tali-Smartist@2x.webp",
    name: "Плейсхолдер имени",
    role: "Плейсхолдер должности, Smartist",
    quote:
      "Плейсхолдер: ещё одна цитата про прозрачную аналитику и удобный билдер пейволлов.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="border-y border-violet-100 bg-[#1C1237] py-14 text-white sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-violet-200 sm:text-[11px]">
              <img
                src="https://adapty.io/assets/uploads/2023/12/paywall-library.svg"
                alt="Quotes"
                className="h-4 w-4 invert"
              />
              Плейсхолдер: отзывы клиентов
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
              Команды по всему миру растят доход с подписок
            </h2>
            <p className="mt-3 max-w-xl text-sm text-violet-100/80 sm:text-[15px]">
              Плейсхолдер: истории клиентов, которые добились роста конверсии и
              удержания с помощью вашего продукта.
            </p>
          </div>

          <img
            src="https://adapty.io/assets/uploads/2023/12/quotes.svg"
            alt="Цитаты"
            className="mt-2 h-10 w-10 opacity-70 sm:mt-0"
          />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.logoAlt}
              className="flex h-full flex-col rounded-3xl border border-violet-500/30 bg-white/5 p-5 backdrop-blur"
            >
              <img
                src={card.logo}
                alt={card.logoAlt}
                loading="lazy"
                className="h-6 w-auto object-contain"
              />
              <p className="mt-4 text-sm leading-relaxed text-violet-50/90 sm:text-[15px]">
                “{card.quote}”
              </p>

              <div className="mt-5 flex items-center gap-3">
                <img
                  src={card.avatar}
                  alt={card.name}
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="text-xs text-violet-100/90">
                  <div className="font-semibold">{card.name}</div>
                  <div className="mt-0.5 text-[11px] text-violet-200/80">
                    {card.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


