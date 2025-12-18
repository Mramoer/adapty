import React, { useState } from "react";

type LangId = "swift" | "kotlin" | "react-native" | "flutter" | "unity";

type Lang = {
  id: LangId;
  label: string;
};

const languages: Lang[] = [
  { id: "swift", label: "Swift" },
  { id: "kotlin", label: "Kotlin" },
  { id: "react-native", label: "React Native" },
  { id: "flutter", label: "Flutter" },
  { id: "unity", label: "Unity" },
];

const CODE_BY_LANG: Record<LangId, string> = {
  swift: `// Your app's code
import Adapty

do {
  try await Adapty.activate("YOUR_APP_KEY")

  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)

  // successful purchase
} catch {
  // handle the error
}`,
  kotlin: `// Your app's code
Adapty.activate(this, AdaptyConfig.Builder("YOUR_APP_KEY").build())
 
// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
\twhen (result) {
\t\tis AdaptyResult.Success -> {
\t\t\tif (result.value is AdaptyPurchaseResult.Success)
\t\t\t\t// successful purchase
\t\t}
\t\tis AdaptyResult.Error -> {
\t\t\t// handle the error
\t\t}
\t}
}`,
  "react-native": `import { adapty } from 'react-native-adapty';
await adapty.activate('YOUR_APP_KEY');
 
// Make a purchase, Adapty handles the rest
try {
\tconst profile = await adapty.makePurchase(product);
\t// successful purchase
} catch (error) {
\t// handle the error
}`,
  flutter: `import 'package:adapty_flutter/adapty_flutter.dart';
 
try {
  await Adapty().activate();
 
  // Make a purchase, Adapty handles the rest
  final purchaseResult = await Adapty().makePurchase(product: product);
  // successful purchase
} on AdaptyError catch (adaptyError) {
  // handle the error
} catch (error) {
  // handle other errors
}`,
  unity: `using AdaptySDK;
 
Adapty.makePurchase(product, (profile, error) => {
\tif (error == null) {
\t\t// successful purchase
\t}
});`,
};

const SdkSection: React.FC = () => {
  const [activeLang, setActiveLang] = useState<LangId>("swift");

  return (
    <section className="border-b border-black bg-[#050508] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-8">
        {/* Text + testimonial */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold leading-snug sm:text-[26px]">
            Интегрируйте покупки в приложении
            <br />
            с помощью нескольких строк кода
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-[15px]">
            Интегрируйте IAP за несколько часов без серверного кодирования с помощью
            простого и удобного SDK. А дальше, Adapty будет управлять работой и
            состоянием каждой вашей подписки – от активации, до возврата.
          </p>
          <button className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#F5A3FF] underline-offset-4 hover:underline">
            Быстрая интеграция
            <img
              src="https://adapty.io/assets/uploads/2024/08/arrow-right-small-accent.svg"
              alt="Стрелка"
              className="h-3 w-3"
            />
          </button>

          {/* Testimonial card */}
          <article className="mt-8 max-w-md rounded-3xl border border-white/10 bg-white/5 p-5 text-sm backdrop-blur">
            <img
              src="https://adapty.io/assets/uploads/2024/02/Smitten_Color-Logo-Small-02.webp"
              alt="Smitten"
              className="h-6 w-auto"
              loading="lazy"
            />
            <p className="mt-4 leading-relaxed text-slate-50">
              «С SDK Adapty, добавить покупки в приложение оказалось проще простого.
              С помощью всего нескольких строк кода я смог без проблем добавить
              подписки как для iOS, так и для Android.»
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs text-slate-200">
              <img
                src="https://adapty.io/assets/uploads/2024/02/Magnus-Olafsson-Smitten@2x.webp"
                alt="Magnus Olafsson"
                className="h-9 w-9 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <div className="font-semibold">Магнус Олафссон</div>
                <div className="mt-0.5 text-[11px] text-slate-300">
                  Главный технический директор в Smitten
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Code block */}
        <div className="flex-1">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D10] shadow-xl">
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 text-xs text-slate-300">
              <div className="flex gap-2 sm:gap-3">
                {languages.map((lang) => {
                  const isActive = lang.id === activeLang;
                  return (
                    <button
                      key={lang.id}
                      type="button"
                      onClick={() => setActiveLang(lang.id)}
                      className={`relative rounded-full px-3 py-1 font-medium transition ${
                        isActive
                          ? "bg-white text-[#0D0D10] shadow-sm"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {lang.label}
                      {isActive && (
                        <span className="pointer-events-none absolute inset-x-1 bottom-0 h-[2px] rounded-full bg-linear-to-r from-violet-400 via-fuchsia-400 to-sky-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            <pre className="overflow-x-auto bg-[#050509] px-4 py-4 text-[11px] leading-relaxed text-slate-100 sm:text-xs">
{CODE_BY_LANG[activeLang]}
            </pre>
            <div className="flex items-center justify-between border-t border-white/5 px-4 py-3 text-xs text-slate-300">
              <div className="inline-flex items-center gap-2">
                <img
                  src="https://adapty.io/assets/uploads/2024/01/github-logo.svg"
                  alt="GitHub"
                  className="h-4 w-4"
                />
                <span>GitHub · Open Source</span>
              </div>
              <button className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold text-slate-50 hover:border-white/40">
                Go to GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SdkSection;

