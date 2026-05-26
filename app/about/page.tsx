import "../globals.css";
import Link from "next/link";
import {
  FaRegGem,
  FaRegHeart,
  FaRegStar,
  FaUsers,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { GiQueenCrown, GiPartyPopper } from "react-icons/gi";

// const gold = "#c9973f";

export default function AboutPage() {
  return (
    <main className="bg-[#090b0b] text-white">

      {/* HERO */}
      <section className="about-hero min-h-[720px] pb-5 md:pb-0">
        <div className="container-page flex min-h-[720px] items-center">
          <div className="max-w-[520px] pt-24">
            <p className="gold mb-4 text-sm font-semibold tracking-[0.22em] pt-5 md:pb-0">
              ABOUT KAY THE PERSONALIZER
            </p>

            <h1 className="font-heading text-[56px] font-semibold leading-[0.95] md:text-[76px]">
              Passion. Creativity. <br />
              Perfection.
            </h1>

            <div className="gold-line my-7" />

            <p className="text-lg leading-relaxed text-white/90">
              Kay The Personalizer is a luxury event styling and custom
              experiences company serving Pennsylvania, New Jersey, and
              Delaware.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-white/90 mb-5">
              From stunning décor to unforgettable food displays, we handle
              every detail so you can enjoy every moment.
            </p>

            <Link href="/services" className="btn-outline mt-9 px-8 py-4 text-sm font-semibold">
              OUR SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#f4eee7] py-20 text-[#111]">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="gold mb-4 text-sm font-semibold tracking-[0.22em]">
              MY STORY
            </p>

            <h2 className="font-heading text-5xl leading-tight">
              It all started with a love <br />
              for beautiful moments.
            </h2>

            <div className="my-7 h-[2px] w-16 bg-[#c9973f]" />

            <p className="max-w-[520px] leading-8 text-black/75">
              What began as a passion for decorating and creating memorable
              celebrations has grown into a luxury event styling business built
              on creativity, dedication, and attention to detail.
            </p>

            <p className="mt-6 max-w-[520px] leading-8 text-black/75">
              I believe every event — big or small — deserves to look and feel
              extraordinary. My goal is simple: to bring your vision to life and
              create experiences your guests will always remember.
            </p>

            <div className="font-script gold mt-7 text-5xl">Kay♡</div>
            <p className="mt-1 text-xs font-semibold tracking-widest">
              FOUNDER & CREATIVE DIRECTOR
            </p>
          </div>

          <div className="border border-[#c9973f] p-2">
            <img
              src="/images/user1.jpg"
              alt="Kay The Personalizer founder"
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-dark py-16">
        <div className="container-page text-center">
          <p className="gold mb-3 text-sm font-semibold tracking-[0.25em]">
            OUR VALUES
          </p>

          <div className="gold-line mx-auto mb-12" />

          <div className="grid gap-10 md:grid-cols-4">
            {[
              {
                icon: <FaRegGem />,
                title: "QUALITY",
                text: "We use only the best materials and provide flawless execution.",
              },
              {
                icon: <FaRegHeart />,
                title: "PASSION",
                text: "We love what we do and it shows in every detail of our work.",
              },
              {
                icon: <FaRegStar />,
                title: "CREATIVITY",
                text: "Every event is uniquely designed to reflect your vision and style.",
              },
              {
                icon: <GiQueenCrown />,
                title: "INTEGRITY",
                text: "We value honesty, clear communication, and earning your trust.",
              },
            ].map((item) => (
              <div key={item.title} className="px-6">
                <div className="mx-auto mb-5 flex justify-center text-5xl text-[#c9973f]">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>

                <p className="mx-auto max-w-[230px] leading-7 text-white/75">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section-dark border-t border-[#1d1d1d]">
        <div className="grid lg:grid-cols-[0.9fr_1.2fr]">
          <img
            src="/images/tb2.png"
            alt="Luxury grazing table"
            className="h-[430px] w-full object-cover"
          />

          <div className="flex items-center px-8 py-16 lg:px-20">
            <div className="w-full text-center">
              <p className="gold mb-3 text-sm font-semibold tracking-[0.25em]">
                EXPERIENCE THAT SPEAKS
              </p>

              <div className="gold-line mx-auto mb-12" />

              <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                {[
                  {
                    icon: <FaCalendarAlt />,
                    number: "6+",
                    label: "YEARS OF EXPERIENCE",
                  },
                  {
                    icon: <GiPartyPopper />,
                    number: "150+",
                    label: "EVENTS STYLED",
                  },
                  {
                    icon: <FaUsers />,
                    number: "100%",
                    label: "CLIENT SATISFACTION",
                  },
                  {
                    icon: <FaMapMarkerAlt />,
                    number: "3",
                    label: "STATES SERVED",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-4 flex justify-center text-4xl text-[#c9973f]">
                      {item.icon}
                    </div>

                    <h3 className="font-heading text-5xl text-[#c9973f]">
                      {item.number}
                    </h3>

                    <p className="mt-2 text-xs font-semibold tracking-wide text-white">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mx-auto mt-12 h-px max-w-3xl bg-[#c9973f]/40" />

              <p className="mt-6 text-lg text-white/90 mb-7">
                Let’s create something unforgettable together.
              </p>

              <Link href="/contact" className="btn-gold mt-7 px-10 py-4 text-sm font-semibold">
                BOOK A CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}