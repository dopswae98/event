import { FaCheck, FaCalendarAlt, FaRegHeart, FaRegStar, FaClock } from "react-icons/fa";
import { GiQueenCrown, GiHand } from "react-icons/gi";

const packages = [
  {
    title: "ESSENTIAL PACKAGE",
    tagline: "Simple. Elegant. Memorable.",
    price: "$1,250",
    image: "/images/product1.png",
    features: [
      "Event consultation",
      "Basic event styling & decor",
      "Standard balloon arrangement",
      "Vendor recommendations",
      "Setup & breakdown",
    ],
  },
  {
    title: "SIGNATURE PACKAGE",
    tagline: "Stylish. Personalized. Unforgettable.",
    price: "$2,800",
    image: "/images/product2.png",
    popular: true,
    features: [
      "Everything in Essential Package",
      "Custom event styling & design",
      "Premium balloon decor",
      "Grazing table up to 50 guests",
      "Personalized details & signage",
      "Dedicated event support",
    ],
  },
  {
    title: "PREMIER PACKAGE",
    tagline: "Luxury. Elevated. Extraordinary.",
    price: "$4,800",
    image: "/images/product3.png",
    features: [
      "Everything in Signature Package",
      "Luxury event design & styling",
      "Premium balloon installations",
      "Grazing table up to 100 guests",
      "Custom signage & branding",
      "Day-of coordination",
    ],
  },
];

export default function PackagesPage() {
  return (
    <main className="bg-[#090b0b] text-white">
      <section className="packages-hero min-h-[560px] pt-36">
        <div className="container-page flex min-h-[420px] items-center">
          <div className="max-w-[620px]">
            <p className="gold mb-5 text-sm font-semibold tracking-[0.28em]">
              OUR PACKAGES
            </p>

            <h1 className="font-heading text-[52px] font-semibold leading-[1] md:text-[74px]">
              Designed for <br />
              <em className="gold">Every Occasion</em>
            </h1>

            <div className="gold-line my-7" />

            <p className="max-w-[520px] text-lg leading-relaxed text-white/85">
              Thoughtfully curated packages to bring your vision to life. Each
              experience is customized with elegance and attention to detail.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#090b0b] py-20">
        <div className="container-page">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-4xl text-[#c9973f] md:text-5xl">
              Choose the Experience That’s Right for You
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className={`relative border bg-[#111313] ${
                  pkg.popular
                    ? "border-[#c9973f] shadow-[0_0_40px_rgba(201,151,63,0.15)]"
                    : "border-[#2b2418]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 bg-[#c9973f] px-8 py-2 text-xs font-bold text-black">
                    MOST POPULAR
                  </div>
                )}

                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-[280px] w-full object-cover"
                />

                <div className="relative px-8 pb-8 pt-14 text-center">
                  <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#c9973f] bg-[#090b0b] text-3xl text-[#c9973f]">
                    <GiQueenCrown />
                  </div>

                  <h3 className="font-heading text-3xl">{pkg.title}</h3>

                  <p className="font-heading mt-2 text-xl italic text-[#c9973f]">
                    {pkg.tagline}
                  </p>

                  <div className="mx-auto my-7 h-[1px] w-32 bg-[#c9973f]/60" />

                  <p className="font-heading text-5xl">{pkg.price}</p>
                  <p className="mt-1 text-sm tracking-wide text-white/70">
                    STARTING AT
                  </p>

                  <ul className="mt-8 space-y-4 text-left">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-white/75">
                        <FaCheck className="mt-1 shrink-0 text-[#c9973f]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`mt-9 block border px-8 py-4 text-center text-sm font-semibold transition ${
                      pkg.popular
                        ? "border-[#c9973f] bg-[#c9973f] text-black hover:bg-[#ddb35a]"
                        : "border-[#c9973f] text-[#c9973f] hover:bg-[#c9973f] hover:text-black"
                    }`}
                  >
                    BOOK THIS PACKAGE
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-white/60">
            * Prices vary based on guest count, location, and custom requests.
          </p>
        </div>
      </section>

      <section className="bg-[#090b0b] pb-14">
        <div className="container-page">
          <div className="grid items-center gap-8 border border-[#c9973f]/60 bg-[#0d0f0e] px-8 py-8 md:grid-cols-[auto_1fr_auto]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#c9973f] text-3xl text-[#c9973f]">
              <FaCalendarAlt />
            </div>

            <div>
              <h3 className="font-heading text-4xl">
                Have something unique in mind?
              </h3>
              <p className="font-heading text-2xl italic text-[#c9973f]">
                Let’s create a custom package just for you.
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

      <section className="bg-[#090b0b] pb-20">
        <div className="container-page grid gap-10 text-center md:grid-cols-4">
          {[
            {
              icon: <FaRegHeart />,
              title: "TAILORED EXPERIENCES",
              text: "Every detail customized for your vision.",
            },
            {
              icon: <FaRegStar />,
              title: "QUALITY & ELEGANCE",
              text: "Premium décor, fresh ingredients, and more.",
            },
            {
              icon: <FaClock />,
              title: "ON-TIME DELIVERY",
              text: "Punctual setup and seamless execution.",
            },
            {
              icon: <GiHand />,
              title: "DEDICATED SUPPORT",
              text: "We’re with you every step of the way.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`px-6 ${
                index !== 3 ? "md:border-r md:border-[#2b2418]" : ""
              }`}
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#c9973f] text-3xl text-[#c9973f]">
                {item.icon}
              </div>

              <h3 className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#c9973f]">
                {item.title}
              </h3>

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