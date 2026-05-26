import { Cake, Gift, GlassWater, Sparkles, Trees } from "lucide-react";

const gold = "#c8953a";

const services = [
  ["EVENT STYLING", "Elegant table settings, centerpieces & custom event designs.", Cake],
  // ["GRAZING TABLES", "Beautifully curated grazing tables for any occasion.", Cloche],
  ["BALLOON & BACKDROP DÉCOR", "Custom balloon installations and backdrops that wow.", Sparkles],
  ["DESSERT & TREAT BOXES", "Delicious custom treats and gift boxes for every celebration.", Gift],
  ["SEASONAL PACKAGES", "Holiday décor and seasonal packages designed with care.", Trees],
  ["INTIMATE EVENTS", "Private dinners & intimate setups made memorable.", GlassWater],
] as const;

export default function ServicesSection() {
  return (
    <section className="bg-[#101211] py-4">
      <div className="container-page text-center">
        <p className="gold text-[10px] font-semibold tracking-[0.28em]">
          WHAT WE DO
        </p>

        <h2 className="font-heading text-[33px] leading-none">OUR SERVICES</h2>

        <div className="mx-auto mt-2 h-px w-20 bg-[#c8953a]" />

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {services.map(([title, text, Icon]) => (
            <div
              key={title}
              className="min-h-[185px] border border-[#4a3920] px-5 py-6"
            >
              <Icon
                className="mx-auto mb-4"
                size={38}
                color={gold}
                strokeWidth={1.3}
              />

              <h3 className="mb-4 text-[13px] font-semibold leading-snug">
                {title}
              </h3>

              <p className="text-[11px] leading-relaxed text-white/75">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}