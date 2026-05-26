import {
  FaGift,
  FaGlassCheers,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { GiBalloons, GiMeal, GiPartyPopper } from "react-icons/gi";

const categories = [
  { label: "ALL", icon: null },
  { label: "EVENT STYLING", icon: <GiPartyPopper /> },
  { label: "GRAZING TABLES", icon: <GiMeal /> },
  { label: "BALLOON DECOR", icon: <GiBalloons /> },
  { label: "HOLIDAY & SEASONAL", icon: <FaRegCalendarAlt /> },
  { label: "TREAT BOXES", icon: <FaGift /> },
  { label: "INTIMATE EVENTS", icon: <FaGlassCheers /> },
];

const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg",
  "/images/gallery-9.jpg",
  "/images/gallery-10.jpg",
  "/images/gallery-11.jpg",
  "/images/gallery-12.jpg",
];

export default function GalleryPage() {
  return (
    <main className="bg-[#090b0b] text-white">
      {/* HERO */}
      <section className="gallery-hero min-h-[520px] pt-36">
        <div className="container-page flex min-h-[390px] items-center">
          <div className="max-w-[650px]">
            <p className="gold mb-5 text-sm font-semibold tracking-[0.28em]">
              OUR GALLERY
            </p>

            <h1 className="font-heading text-[52px] font-semibold leading-[1] md:text-[74px]">
              Moments <br />
              <em className="gold">Beautifully Created</em>
            </h1>

            <div className="gold-line my-7" />

            <p className="max-w-[520px] text-lg leading-relaxed text-white/85">
              A glimpse of our work and the unforgettable experiences we create
              for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="bg-[#090b0b] pb-6">
        <div className="container-pages mx-auto w-fit max-w-full justify-center">
          <div className="flex flex-wrap items-center gap-3 rounded-md border border-[#2b2418] bg-[#0d0f0e] p-5">
            {categories.map((category, index) => (
              <button
                key={category.label}
                className={`flex items-center gap-3 rounded-md px-5 py-3 text-xs font-semibold transition ${
                  index === 0
                    ? "bg-[#c9973f] text-black"
                    : "border-l border-[#2b2418] text-white hover:text-[#c9973f]"
                }`}
              >
                {category.icon && (
                  <span className="text-lg text-[#c9973f]">
                    {category.icon}
                  </span>
                )}
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="bg-[#090b0b] py-8">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((src, index) => (
              <div
                key={src}
                className="group overflow-hidden rounded-md border border-[#2b2418] bg-[#111313]"
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#090b0b] py-8">
        <div className="container-page">
          <div className="grid items-center gap-8 border border-[#2b2418] bg-[#0d0f0e] px-8 py-7 md:grid-cols-[auto_1fr_auto]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#c9973f] text-3xl text-[#c9973f]">
              <FaRegCalendarAlt />
            </div>

            <div>
              <h3 className="font-heading text-3xl text-white">
                Ready to create your unforgettable moment?
              </h3>
              <p className="font-heading text-2xl italic text-[#c9973f]">
                Let’s bring your vision to life.
              </p>
            </div>

            <a
              href="/contact"
              className="btn-gold px-10 py-4 text-center text-sm font-semibold"
            >
              BOOK A CONSULTATION →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}