import React from "react";

type Benefit = {
  label: string;
  text: string;
};

const benefits: Benefit[] = [
  {
    label: "Benefit one",
    text: "Explain the primary outcome your customers get. Keep the copy short and outcome‑focused.",
  },
  {
    label: "Benefit two",
    text: "Add a second key benefit that complements the first, such as efficiency or visibility.",
  },
  {
    label: "Benefit three",
    text: "Highlight another advantage, for example, reduced risk, less manual work, or faster launch.",
  },
  {
    label: "Benefit four",
    text: "Mention how teams collaborate better or make decisions faster using your product.",
  },
];

const Benefits: React.FC = () => {
  return (
    <section
      id="benefits"
      className="bg-[#FFF9F5] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          Почему команды выбирают этот продукт
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-[15px]">
          Плейсхолдер: несколько коротких причин, которые показывают, чем ваше
          решение отличается от альтернатив.
        </p>

        <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.label}
              className="rounded-2xl border border-violet-100 bg-white p-4 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {benefit.label}
              </p>
              <p className="mt-2 text-sm text-slate-700">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;