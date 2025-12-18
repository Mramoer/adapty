import React from "react";

type Story = {
  title: string;
  subtitle: string;
  category: string;
  metric: string;
  description: string;
  image: string;
};

const stories: Story[] = [
  {
    title: "Productivity app",
    subtitle: "Продуктивность",
    category: "",
    metric: "+50% общей выручки",
    description: "Как ценовые тесты раскрыли потенциал",
    image:
      "https://adapty.io/assets/uploads/2025/12/app-icon-productivity-app@4x.webp",
  },
  {
    title: "Text on Pic",
    subtitle: "Text on Pic",
    category: "Фото и видео",
    metric: "Рост MRR более 30%",
    description:
      "Как увеличить доход с помощью правильных тестов",
    image:
      "https://adapty.io/assets/uploads/2025/12/app-icon-text-on-pic@3x.webp",
  },
  {
    title: "Trip planning",
    subtitle: "Trip planning",
    category: "Путешествия",
    metric: "+102% рост ARPU",
    description:
      "Новая онбординг удвоила доход с пользователя",
    image:
      "https://adapty.io/assets/uploads/2025/11/logo-secret-app@3x.webp",
  },
  {
    title: "Going Merry",
    subtitle: "Going Merry",
    category: "Издатель приложения",
    metric: "Рост MRR в 5 раз",
    description:
      "Как масштабировать доход от подписок с помощью Paywall Builder",
    image:
      "https://adapty.io/assets/uploads/2025/09/going-merry-app-logo.webp",
  },
  {
    title: "Shmoody",
    subtitle: "Shmoody",
    category: "Ментальное здоровье",
    metric: "ARR вырос с $0 до $2M",
    description:
      "Как вырасти от бесплатного приложения до $2M ARR с Adapty",
    image:
      "https://adapty.io/assets/uploads/2025/05/app-logo-shmoody.webp",
  },
  {
    title: "Lively",
    subtitle: "Lively",
    category: "Здоровье и фитнес",
    metric: "На 83% меньше возвратов",
    description: "Сэкономлено 82% потенциального дохода",
    image:
      "https://adapty.io/assets/uploads/2025/04/app-logo-lively@2x.png",
  },
  {
    title: "Glam AI",
    subtitle: "Glam AI",
    category: "Макияж и красота",
    metric: "ROAS от Adapty – 108%",
    description: "До 1.2 млн долларов в год за 3 месяца",
    image: "https://adapty.io/assets/uploads/2025/03/app-logo-glam-ai.webp",
  },
  {
    title: "Pepapp",
    subtitle: "Pepapp",
    category: "Здоровье и фитнес",
    metric: "Окупаемость – 400%",
    description:
      "Как сделать Adapty бесплатным с помощью Refund Saver",
    image: "https://adapty.io/assets/uploads/2025/01/Pepapp-icon@2x.webp",
  },
  {
    title: "Fotorama",
    subtitle: "Fotorama",
    category: "Фото и Видео",
    metric: "-40% возвратов",
    description:
      "Как снизить уровень возвратов с помощью Adapty",
    image:
      "https://adapty.io/assets/uploads/2024/12/app-icon-fotorama-original.webp",
  },
];

const GrowthStories: React.FC = () => {
  return (
    <section className="border-b border-slate-100 bg-[#F7F5FF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-[26px]">
          Реальные истории роста наших клиентов
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="flex flex-col rounded-[24px] border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    loading="lazy"
                    className="h-8 w-8 rounded-xl object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {story.title}
                  </div>
                  {story.subtitle && story.subtitle !== story.title && (
                    <div className="text-xs text-slate-500">
                      {story.subtitle}
                    </div>
                  )}
                  {story.category && (
                    <div className="text-xs text-slate-500">
                      {story.category}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 text-sm font-semibold text-[#4338CA]">
                {story.metric}
              </div>
              <p className="mt-2 text-sm text-slate-600">
                {story.description}
              </p>

              <button className="mt-5 inline-flex items-center gap-1 self-start rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                Подробнее
                <img
                  src="https://adapty.io/assets/uploads/2024/08/arrow-right-small-violet-400__16x16-size.svg"
                  alt="Подробнее"
                  className="h-3 w-3"
                />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthStories;


