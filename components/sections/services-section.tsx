import { Code2, LayoutTemplate, Smartphone, Workflow } from "lucide-react";

const services = [
  { icon: LayoutTemplate, number: "01", title: "Website Design", description: "Clear, modern interfaces shaped around your brand, audience, and business goals." },
  { icon: Code2, number: "02", title: "Web Development", description: "Fast, maintainable websites built with modern frontend technologies and thoughtful structure." },
  { icon: Smartphone, number: "03", title: "Responsive Experiences", description: "Interfaces that remain polished and easy to use across mobile, tablet, and desktop screens." },
  { icon: Workflow, number: "04", title: "Product Websites", description: "Landing pages and MVP experiences that explain what you offer and make the next step clear." },
];

export function ServicesSection() {
  return (
    <section className="border-b border-zinc-300 bg-[#f5f5f2] px-5 py-24 text-[#0a0a0a] sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Capabilities</p>
          </div>

          <div>
            <div className="max-w-3xl">
              <h2 className="font-display text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">From first idea to a website people can use.</h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">I combine design thinking and frontend development to create digital experiences that look considered and work properly.</p>
            </div>

            <div className="mt-16 grid border-t border-zinc-300 sm:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isRightColumn = index % 2 === 1;
                return (
                  <article key={service.number} className={`border-b border-zinc-300 py-8 sm:px-8 sm:py-10 lg:py-12 ${isRightColumn ? "sm:border-l" : "sm:pl-0"} ${index >= 2 ? "sm:pb-0" : ""}`}>
                    <div className="flex items-start justify-between gap-6">
                      <Icon aria-hidden="true" size={25} strokeWidth={1.4} />
                      <span className="text-xs tracking-[0.2em] text-zinc-400">{service.number}</span>
                    </div>
                    <h3 className="mt-10 font-display text-2xl font-medium tracking-[-0.03em] sm:text-3xl">{service.title}</h3>
                    <p className="mt-4 max-w-md text-sm leading-6 text-zinc-600 sm:text-base">{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
