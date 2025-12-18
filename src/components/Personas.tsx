import React from "react";

type Persona = {
  title: string;
  image: string;
  chips: string[];
};

const personas: Persona[] = [
  {
    title: "Для разработчиков",
    image:
      "https://adapty.io/assets/uploads/2025/02/img-card-cover-sdk-install@2x.webp",
    chips: [
      "Подписки SDK",
      "Сбережение на возвратах",
      "Удалённая конфигурация",
      "Резервные пейволлы",
    ],
  },
  {
    title: "Для владельцев",
    image:
      "https://adapty.io/assets/uploads/2025/02/img-card-cover-charts@2x.webp",
    chips: [
      "Аналитика доходов",
      "Аналитика LTV",
      "Прогнозы ИИ для LTV и доходов",
    ],
  },
  {
    title: "Для маркетологов",
    image:
      "https://adapty.io/assets/uploads/2025/02/img-card-cover-paywalls@2x.webp",
    chips: ["A/B тестирование", "Конструктор без кода", "Локализации"],
  },
];

const Personas: React.FC = () => {
  return (
    <section className="border-b border-slate-100 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">
            Управляйте своим подписочным бизнесом.
            <br className="hidden sm:block" />
            <span> Быстрее и дешевле.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {personas.map((persona) => (
            <article
              key={persona.title}
              className="flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-[#FBFAFF] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={persona.image}
                  alt={persona.title}
                  loading="lazy"
                  className="h-48 w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 pb-5 pt-6 text-sm text-slate-900 sm:px-6 sm:pb-6">
                <h3 className="text-base font-semibold sm:text-[17px]">
                  {persona.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {persona.chips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center rounded-full bg-white px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personas;


