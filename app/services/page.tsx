import {
  FaRegHeart,
  FaRegGem,
  FaUsers,
  FaGift,
  FaCalendarAlt,
} from "react-icons/fa";
import "../globals.css"
import { GiPartyPopper, GiBalloons, GiMeal } from "react-icons/gi";

const services = [
  {
    title: "EVENT STYLING",
    image: "/images/gallery-4.jpg",
    icon: <GiPartyPopper />,
    text: "Elegant table settings, centerpieces, and custom designs tailored to your theme and vision.",
  },
  {
    title: "GRAZING TABLES",
    image: "/images/gallery-5.jpg",
    icon: <GiMeal />,
    text: "Beautifully curated grazing tables with a perfect blend of flavors and stunning presentation.",
  },
  {
    title: "BALLOON & BACKDROP DÉCOR",
    image: "/images/gallery-6.jpg",
    icon: <GiBalloons />,
    text: "Custom balloon installations and backdrops that create the perfect statement.",
  },
  {
    title: "DESSERT & TREAT BOXES",
    image: "/images/gallery-1.jpg",
    icon: <FaGift />,
    text: "Delicious custom treats and gift boxes beautifully packaged for any occasion.",
  },
  {
    title: "SEASONAL PACKAGES",
    image: "/images/gallery-2.jpg",
    icon: <FaCalendarAlt />,
    text: "Holiday décor and seasonal packages designed with care for every celebration.",
  },
  {
    title: "INTIMATE EVENTS",
    image: "/images/gallery-3.jpg",
    icon: <FaRegHeart />,
    text: "Private dinners and intimate setups made memorable with elegant details.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#090b0b] text-white">
      <section className="services-hero min-h-[560px] pt-36">
        <div className="container-page flex min-h-[430px] items-center">
          <div className="max-w-[650px]">
            <p className="gold mb-5 text-sm font-semibold tracking-[0.28em]">
              OUR SERVICES
            </p>

            <h1 className="font-heading text-[46px] font-semibold leading-[1] md:text-[72px]">
              Crafted with Passion. <br />
              Designed for <em className="gold">You.</em>
            </h1>

            <div className="gold-line my-7" />

            <p className="max-w-[480px] text-lg leading-relaxed text-white/85">
              From stunning décor to delicious creations, we offer a range of
              services to make your event truly unforgettable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#101111] py-20">
        <div className="container-page">
          <div className="mb-14 text-center">
            <p className="gold mb-2 text-sm font-semibold tracking-[0.25em]">
              WHAT WE OFFER
            </p>

            <h2 className="font-heading text-5xl text-white">Our Services</h2>

            <div className="mx-auto mt-5 h-[2px] w-14 bg-[#c9973f]" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-[#2b2418] bg-[#111313] text-center shadow-xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[250px] w-full object-cover"
                />

                <div className="relative px-8 pb-8 pt-12">
                  <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#c9973f] bg-[#111313] text-3xl text-[#c9973f]">
                    {service.icon}
                  </div>

                  <h3 className="mb-4 text-lg font-semibold text-white">
                    {service.title}
                  </h3>

                  <div className="mx-auto mb-5 h-[2px] w-10 bg-[#c9973f]" />

                  <p className="mx-auto min-h-[90px] max-w-[300px] leading-7 text-white/70">
                    {service.text}
                  </p>

                  <button className="mt-7 text-sm font-semibold text-[#c9973f]">
                    LEARN MORE →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#2b2418] bg-[#080909] py-10">
        <div className="container-page grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#c9973f] text-3xl text-[#c9973f]">
            <FaCalendarAlt />
          </div>

          <div>
            <h3 className="font-heading text-3xl text-white">
              Have something unique in mind?
            </h3>
            <p className="font-heading text-2xl italic text-[#c9973f]">
              Let’s bring your vision to life.
            </p>
          </div>

          <a
            href="/contact"
            className="btn-outline px-10 py-4 text-center text-sm font-semibold"
          >
            BOOK A CONSULTATION
          </a>
        </div>
      </section>

      <section className="bg-[#101111] py-16">
        <div className="container-page grid gap-10 text-center md:grid-cols-4">
          {[
            {
              icon: <FaRegHeart />,
              title: "CUSTOM DESIGNS",
              text: "Every event is uniquely designed to reflect your style and personality.",
            },
            {
              icon: <FaRegGem />,
              title: "ATTENTION TO DETAIL",
              text: "We focus on every detail to ensure a flawless and seamless experience.",
            },
            {
              icon: <GiPartyPopper />,
              title: "PREMIUM QUALITY",
              text: "We use only the best materials and ingredients for stunning results.",
            },
            {
              icon: <FaUsers />,
              title: "CLIENT SATISFACTION",
              text: "Your happiness is our top priority. We don’t rest until it’s perfect.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`px-6 ${
                index !== 3 ? "md:border-r md:border-[#2b2418]" : ""
              }`}
            >
              <div className="mb-5 flex justify-center text-4xl text-[#c9973f]">
                {item.icon}
              </div>

              <h3 className="mb-3 text-sm font-semibold tracking-[0.18em] text-white">
                {item.title}
              </h3>

              <div className="mx-auto mb-5 h-[2px] w-10 bg-[#c9973f]" />

              <p className="mx-auto max-w-[230px] text-sm leading-7 text-white/70">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}