import { Mail, MapPin, Phone } from "lucide-react";

const gold = "#c8953a";

export default function Testimonials() {
  return (
    <section className="bg-[#101211] py-2 text-center">
      <div className="container-page">
        <p className="gold text-[10px] font-semibold tracking-[0.28em]">
          KIND WORDS
        </p>

        <h2 className="font-heading text-[31px] leading-none">
          CLIENT TESTIMONIALS
        </h2>

        <div className="mx-auto mt-2 h-px w-20 bg-[#c8953a]" />

        <div className="mt-6 grid items-center gap-6 md:grid-cols-[1fr_1fr_1fr]">
          <div className="text-left">
            <div className="gold mb-2 text-sm">★★★★★</div>
            <p className="text-[12px] leading-relaxed text-white/80">
              Thank you @kay_the_personalizer for a fabulous evening filled with
              excellent food, beautiful setup and amazing service.
            </p>
            <p className="mt-4 text-[12px] font-semibold">– Joanna C.</p>
          </div>

          <div className="border-x border-[#6f552d]/60 px-8 text-left">
            <div className="space-y-3 text-[12px] text-white/80">
              <p className="flex gap-3">
                <Phone size={15} color={gold} /> (609) 582-3700
              </p>
              <p className="flex gap-3">
                <Mail size={15} color={gold} /> kaythepersonalizer@gmail.com
              </p>
              <p className="flex gap-3">
                <MapPin size={15} color={gold} /> Serving Pennsylvania, New Jersey & Delaware
              </p>
              <p className="flex gap-3">
                {/* <Instagram size={15} color={gold} /> @kay_the_personalizer */}
              </p>
            </div>
          </div>

          <div className="text-left">
            <div className="gold mb-2 text-sm">★★★★★</div>
            <p className="text-[12px] leading-relaxed text-white/80">
              The decor, the food, the details — everything was perfect! Highly
              recommend her for any occasion.
            </p>
            <p className="mt-4 text-[12px] font-semibold">– Leemat18</p>
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#c8953a]" />
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
        </div>
      </div>
    </section>
  );
}