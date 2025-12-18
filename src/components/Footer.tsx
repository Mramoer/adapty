import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050508] text-slate-200">
      {/* CTA strip */}
      <section className="border-b border-white/10 bg-[#050508] py-12 sm:py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-xl text-lg font-semibold leading-snug sm:text-xl">
            <p>Начните сегодня или</p>
            <p>запланируйте демонстрацию</p>
            <p>для вашего личного онбординга</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:bg-slate-100 sm:px-7 sm:py-3">
              Начать бесплатно
            </button>
            <button className="inline-flex items-center justify-center rounded-full bg-[#7C3BFF] px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-violet-500/40 transition hover:bg-[#6A32E0] sm:px-7 sm:py-3">
              Записаться на демонстрацию
            </button>
          </div>
        </div>
      </section>

      {/* Main footer navigation */}
      <section className="border-b border-white/10 py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Logo row */}
          <div className="flex items-center gap-2 pb-8 sm:pb-10">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white">
              <span className="text-xs font-bold text-black">AD</span>
            </div>
            <span className="text-base font-semibold tracking-tight">Adapty</span>
          </div>

          <div className="grid gap-8 text-sm text-slate-300 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Менеджмент пейволлов
              </h3>
              <ul className="mt-3 space-y-1.5">
                <li>Конструктор пейволлов</li>
                <li>Конструктор онбординга</li>
                <li>AI генератор</li>
                <li>A/B тестирование</li>
                <li>Автопилот</li>
                <li>Таргетинг</li>
                <li>Локализация</li>
                <li>Удаленная конфигурация</li>
              </ul>

              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Инфраструктура
              </h3>
              <ul className="mt-3 space-y-1.5">
                <li>SDK для подписок</li>
                <li>Синхронизация</li>
                <li>Резервные пейволлы</li>
                <li>Контроль возвратов</li>
                <li>Интеграции</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Роли
              </h3>
              <ul className="mt-3 space-y-1.5">
                <li>Для разработчиков</li>
                <li>Для маркетологов</li>
                <li>Для владельцев</li>
              </ul>

              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Уровни
              </h3>
              <ul className="mt-3 space-y-1.5">
                <li>Инди</li>
                <li>Стартапы</li>
                <li>Издательство</li>
                <li>Предприятие</li>
              </ul>

              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Кейсы клиентов
              </h3>
              <ul className="mt-3 space-y-1.5">
                <li>Интеграция подписок</li>
                <li>Увеличение доходов</li>
                <li>Производительность</li>
                <li>Читать кейсы клиентов</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Сравнение
              </h3>
              <ul className="mt-3 space-y-1.5">
                <li>RevenueCat</li>
                <li>Purchasely</li>
                <li>Qonversion</li>
                <li>Superwall</li>
              </ul>

              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                SDK
              </h3>
              <ul className="mt-3 space-y-1.5">
                <li>iOS</li>
                <li>Android</li>
                <li>React Native</li>
                <li>Flutter</li>
                <li>FlutterFlow</li>
                <li>Kotlin Multiplatform</li>
                <li>Capacitor</li>
                <li>Unity</li>
                <li>Stripe</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Ресурсы
              </h3>
              <ul className="mt-3 space-y-1.5">
                <li>Блог</li>
                <li>Гайды</li>
                <li>Подкасты</li>
                <li>Вебинары</li>
                <li>Мероприятия</li>
                <li>Глоссарий</li>
                <li>Документация</li>
                <li>Галерея пейволлов</li>
                <li>Модель прогнозирования LTV</li>
                <li>Финансовый календарь Apple</li>
                <li>Проверка чеков Apple</li>
                <li>Калькулятор подписки</li>
                <li>Калькулятор экономии с возвратов</li>
                <li>Отчеты по рынку подписок</li>
                <li>Сообщество</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Аналитика
              </h3>
              <ul className="mt-3 space-y-1.5">
                <li>Аналитика доходов</li>
                <li>Аналитика LTV</li>
                <li>Прогнозирование</li>
                <li>Менеджер Apple Ads</li>
              </ul>

              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Компания
              </h3>
              <ul className="mt-3 space-y-1.5">
                <li>О нас</li>
                <li>Контакты</li>
                <li>Карьера</li>
                <li>Условия</li>
                <li>Конфиденциальность</li>
                <li>Защита данных</li>
                <li>Состояние системы</li>
                <li>Соответствие SOC2</li>
                <li>Партнёрство</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom line */}
      <section className="py-6">
        <div className="mx-auto max-w-6xl px-4 text-xs text-slate-500 sm:px-6 lg:px-8">
          <p>© {year} Adapty Tech Inc.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;