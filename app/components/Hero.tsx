export default function Hero() {
  return (
    <section className="hero-bg min-h-[470px] border-b border-[#2b2418]">
      <div className="container-page pt-24">
        <div className="max-w-[520px] pt-12">
          <p className="font-heading gold mb-4 text-[15px] font-medium tracking-[0.28em]">
            Luxury Event Styling &
          </p>

          <h1 className="font-heading text-[58px] leading-[0.88] font-semibold tracking-wide md:text-[74px]">
            CUSTOM <br /> EXPERIENCES
          </h1>

          <div className="gold-line mt-5 mb-4" />

          <p className="text-[18px] leading-snug text-white/90">
            Turning moments into <br />
            <em className="font-heading text-[22px]">unforgettable memories.</em>
          </p>

          <div className="mt-6 flex gap-5">
            <a
              href="#contact"
              className="btn-gold px-6 py-3 text-xs font-semibold tracking-wide"
            >
              BOOK A CONSULTATION →
            </a>

            <a
              href="#work"
              className="btn-outline px-7 py-3 text-xs font-semibold tracking-wide"
            >
              VIEW OUR WORK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}