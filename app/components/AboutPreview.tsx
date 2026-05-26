import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="bg-[#101211] py-5">
      <div className="container-page grid gap-6 lg:grid-cols-[0.72fr_1.55fr]">
        <div className="pt-2">
          <p className="gold mb-2 text-[11px] font-semibold tracking-[0.25em]">
            ABOUT US
          </p>

          <h2 className="font-heading text-[38px] leading-[1.05]">
            Passion. Creativity.
            <br />
            <em className="gold">Perfection.</em>
          </h2>

          <div className="gold-line mt-4 mb-5" />

          <p className="mb-4 text-[12px] leading-relaxed text-white/85">
            Kay The Personalizer is a luxury event styling and custom experiences
            company serving Pennsylvania, New Jersey, and Delaware.
          </p>

          <p className="mb-6 text-[12px] leading-relaxed text-white/85">
            From stunning décor to unforgettable food displays, we handle every
            detail so you can enjoy every moment.
          </p>

          <button className="btn-outline px-5 py-3 text-[11px] font-semibold">
            LEARN MORE ABOUT KAY →
          </button>
        </div>

        <div className="grid gap-3 md:grid-cols-[1.05fr_1fr]">
  <div className="relative h-[310px]">
    <Image
      src="/images/grazing.jpg"
      alt="Grazing Table"
      fill
      className="border border-[#4a3920] object-cover"
    />
  </div>

  <div className="grid gap-3">
    <div className="relative h-[148px]">
      <Image
        src="/images/place-setting.jpg"
        alt="Place Setting"
        fill
        className="border border-[#4a3920] object-cover"
      />
    </div>

    <div className="relative h-[148px]">
      <Image
        src="/images/balloons.jpg"
        alt="Balloon Decor"
        fill
        className="border border-[#4a3920] object-cover"
      />
    </div>
  </div>
</div>
      </div>
    </section>
  );
}