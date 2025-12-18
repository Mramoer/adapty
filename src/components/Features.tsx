import React from "react";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Feature title placeholder",
    description:
      "Short description text about a key capability of your SaaS product. Keep it to one or two lines.",
    icon: (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
        ⚡
      </span>
    ),
  },
  {
    title: "Analytics section placeholder",
    description:
      "Describe how you surface insights, metrics, or dashboards for your users in a simple way.",
    icon: (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
        📊
      </span>
    ),
  },
  {
    title: "Workflow automation placeholder",
    description:
      "Explain how your tool automates repetitive tasks or connects to other systems.",
    icon: (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
        🔁
      </span>
    ),
  },
  {
    title: "Integrations placeholder",
    description:
      "Mention the platforms or integrations you support without going into technical details.",
    icon: (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
        🧩
      </span>
    ),
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="border-b border-violet-100 bg-[#FFF9F5] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Everything you need to describe your SaaS product
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-500 sm:text-[15px]">
              Use this area to outline the main value pillars. Each card below
              can represent one core feature of your product.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col rounded-2xl border border-violet-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div>{feature.icon}</div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900 sm:text-[15px]">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-[13px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;