import { Crown, Gem, Heart, Star } from "lucide-react";

const gold = "#c8953a";

const items = [
  [Gem, "CUSTOM DESIGNS", "Every event is uniquely designed to reflect your vision and style."],
  [Star, "QUALITY & DETAILS", "We pay attention to every detail to ensure a flawless experience."],
  [Heart, "STRESS-FREE EXPERIENCE", "We handle the setup so you can relax and enjoy your special day."],
  [Crown, "MEMORABLE MOMENTS", "We create unforgettable memories that you and your guests will love."],
] as const;

export default function WhyChooseUs() {
  return (
    <section className="bg-[#101211] py-5">
      <div className="container-page border border-[#4a3920] py-7">
        <div className="grid gap-6 md:grid-cols-4">
          {items.map(([Icon, title, text], index) => (
            <div
              key={title}
              className={`px-8 text-center ${
                index !== items.length - 1 ? "md:border-r md:border-[#6f552d]/60" : ""
              }`}
            >
              <Icon className="mx-auto mb-4" size={35} color={gold} strokeWidth={1.3} />
              <h3 className="mb-3 text-[12px] font-semibold">{title}</h3>
              <p className="text-[11px] leading-relaxed text-white/75">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}