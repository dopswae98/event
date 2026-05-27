"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Cake,
  Bell,
  Gift,
  GlassWater,
  Heart,
  Menu, 
  X,
  // Instagram,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Trees,
  Gem,
  Crown,
} from "lucide-react";

import {
  FaInstagram,
} from "react-icons/fa6";

const gold = "#c9973f";

const services = [
  { title: "EVENT STYLING", text: "Elegant table settings, centerpieces & custom event designs.", icon: Cake },
  { title: "GRAZING TABLES", text: "Beautifully curated grazing tables for any occasion.", icon: Bell },
  { title: "BALLOON & BACKDROP DÉCOR", text: "Custom balloon installations and backdrops that wow.", icon: Sparkles },
  { title: "DESSERT & TREAT BOXES", text: "Delicious custom treats and gift boxes for every celebration.", icon: Gift },
  { title: "SEASONAL PACKAGES", text: "Holiday décor and seasonal packages designed with care.", icon: Trees },
  { title: "INTIMATE EVENTS", text: "Private dinners & intimate setups made memorable.", icon: GlassWater },
];

const gallery = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

export default function HomePage() {
  return (
    <main className="bg-[#090b0b] text-white">
      {/* <Header /> */}
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Why />
      <Testimonials />
      {/* <Footer /> */}
    </main>
  );
}

// function Header() {
//   return (
//     <header className="absolute top-0 left-0 py-7 z-50 w-full">
//       <div className="container-page flex items-center justify-between">
//         <div>
//           <div className="font-script text-6xl leading-none gold">Kay</div>
//           <p className="text-[10px] tracking-[0.4em]">THE PERSONALIZER</p>
//         </div>

//         <nav className="hidden gap-9 text-sm font-semibold md:flex">
//           {["HOME", "ABOUT", "SERVICES", "GALLERY", "PACKAGES", "CONTACT"].map((item, i) => (
//             <a key={item} className={i === 0 ? "gold border-b border-[#c9973f] pb-2" : ""}>
//               {item}
//             </a>
//           ))}
//         </nav>

//         <div className="hidden items-center gap-6 lg:flex">
//           <p className="gold font-bold flex items-center gap-2 text-sm">
//             <Phone size={15} /> (609) 582-3700
//           </p>
//           <button className="btn-outline px-5 py-3 text-xs font-semibold">
//             BOOK A CONSULTATION
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

function Header() {
  const [activeTab, setActiveTab] = useState("HOME");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ["HOME", "ABOUT", "SERVICES", "GALLERY", "PACKAGES", "CONTACT"];

  return (
    <header className="absolute left-0 top-0 z-50 w-full py-7">
      <div className="container-page flex items-center justify-between">
        <div>
          <div className="font-script text-6xl leading-none gold">Kay</div>
          <p className="text-[10px] tracking-[0.4em]">THE PERSONALIZER</p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden gap-9 text-sm font-semibold md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`bg-transparent pb-2 text-sm font-semibold transition ${
                activeTab === item
                  ? "border-b border-[#c9973f] text-[#c9973f]"
                  : "border-b border-transparent text-white hover:text-[#c9973f]"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <p className="gold flex items-center gap-2 text-sm font-bold">
            <Phone size={15} /> (609) 000-0000
          </p>
          <Link href="/contact" className="btn-outline px-5 py-3 text-xs font-semibold">
            BOOK A CONSULTATION
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center border border-[#c9973f] bg-[#c9973f] text-black md:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="container-page mt-5 md:hidden">
          <div className="rounded-sm border border-[#c9973f]/40 bg-[#090b0b]/95 p-4 shadow-2xl backdrop-blur">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveTab(item);
                    setMobileOpen(false);
                  }}
                  className={`text-left text-sm font-semibold tracking-[0.18em] transition ${
                    activeTab === item
                      ? "bg-[#c9973f] px-4 py-3 text-black"
                      : "px-4 py-3 text-white hover:bg-white/5 hover:text-[#c9973f]"
                  }`}
                >
                  {item}
                </button>
              ))}

              <a
                href="tel:6095823700"
                className="mt-3 flex items-center gap-2 border-t border-white/10 px-4 pt-4 text-sm font-bold text-[#c9973f]"
              >
                <Phone size={15} /> (609) 000-0000
              </a>

              <Link href="/contact" className="btn-outline mt-3 px-5 py-3 text-xs font-semibold">
                BOOK A CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-bg min-h-[620px] border-b border-[#2a2115]">
      <div className="container-page flex min-h-[620px] items-center">
        <div className="max-w-[560px] pt-20">
          <p className="font-script md:mt-0 mt-9 gold text-[58px] mb-4 text-sm font-medium ">
            Luxury Event Styling &
          </p>

          <h1 className="font-heading text-[52px] font-semibold leading-[0.9] md:text-[82px]">
            CUSTOM <br /> EXPERIENCES
          </h1>

          <div className="gold-line my-6" />

          <p className="text-xl leading-relaxed">
            Turning moments into <br />
            <em className="font-heading text-2xl">unforgettable memories.</em>
          </p>

          <div className="mt-8 flex flex-wrap gap-5 mb-5">
            <Link href="/contact" className="btn-gold px-7 py-4 text-xs font-bold">
              BOOK A CONSULTATION →
            </Link>
            <Link href="/gallery" className="btn-outline px-7 py-4 text-xs font-bold">
              VIEW OUR WORK
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section-dark py-14 text-center">
      <div className="container-page">
        <p className="gold text-xs font-semibold tracking-[0.28em]">WHAT WE DO</p>
        <h2 className="font-heading text-4xl font-semibold">OUR SERVICES</h2>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="px-4">
                <Icon className="mx-auto mb-4" color={gold} size={40} strokeWidth={1.5} />
                <h3 className="mb-3 text-sm font-bold">{s.title}</h3>
                <p className="text-xs leading-relaxed text-white/70">{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-dark py-12">
      <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.4fr]">
        <div>
          <p className="gold mb-3 text-xs tracking-[0.28em]">ABOUT US</p>
          <h2 className="font-heading text-5xl leading-tight">
            Passion. Creativity. <br />
            <em className="gold">Perfection.</em>
          </h2>
          <div className="gold-line my-5" />
          <p className="text-sm leading-relaxed text-white/80">
            Kay The Personalizer is a luxury event styling and custom experiences company serving Pennsylvania, New Jersey, and Delaware.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            From stunning décor to unforgettable food displays, we handle every detail so you can enjoy every moment.
          </p>
          <button className="btn-outline mt-6 px-6 py-3 text-xs font-bold">
            LEARN MORE ABOUT KAY →
          </button>
        </div>

        <div className="grid gap-3 md:grid-cols-[1.2fr_1fr]">
          <img src="/images/grazing.jpg" alt="" className="h-[340px] w-full object-cover" />
          <div className="grid gap-3">
            <img src="/images/place-setting.jpg" alt="" className="h-[165px] w-full object-cover" />
            <img src="/images/balloons.jpg" alt="" className="h-[165px] w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section-dark py-12 text-center">
      <div className="container-page">
        <p className="gold text-xs tracking-[0.28em]">FEATURED WORK</p>
        <h2 className="font-heading text-4xl">A GLIMPSE OF OUR WORK</h2>

        <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {gallery.map((src) => (
            <img key={src} src={src} alt="" className="h-32 w-full object-cover" />
          ))}
        </div>

        <button className="btn-outline mt-7 px-7 py-3 text-xs font-bold">
          VIEW FULL GALLERY →
        </button>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    { icon: Gem, title: "CUSTOM DESIGNS",
      text: "Every event is uniquely designed to reflect your vision and style.",
     },
    { icon: Star, title: "QUALITY & DETAILS",
      text: "We pay attention to every detail to ensure a flawless experience.",
     },
    { icon: Heart, title: "STRESS-FREE EXPERIENCE",
      text: "We handle the setup so you can relax and enjoy your special day.",
     },
    { icon: Crown, title: "MEMORABLE MOMENTS",
      text: "We create unforgettable memories that you and your guests will love.",
     },
  ];

  return (
    <section className="section-dark py-10">
      <div className="container-page grid gap-8 border border-[#4a3920] py-8 text-center md:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className={`px-6 ${
                index !== items.length - 1
                  ? "md:border-r md:border-[#5a421e]"
                  : ""
              }`}>
              <Icon className="mx-auto mb-4" color={gold} size={36} />
              <h3 className="mb-2 text-sm font-semibold">{item.title}</h3>
              <p className="mx-auto max-w-[180px] text-[11px] leading-relaxed text-white/70">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// function Testimonials() {
//   return (
//     <section className="section-dark py-12 text-center">
//       <div className="container-page">
//         <p className="gold text-xs tracking-[0.28em]">KIND WORDS</p>
//         <h2 className="font-heading text-4xl">CLIENT TESTIMONIALS</h2>
//         <p className="mx-auto mt-5 max-w-xl text-sm text-white/75">
//           “Amazing service and beautiful setup!”
//         </p>
//       </div>
//     </section>
//   );
// }

function Testimonials() {
  return (
    <section className="bg-[#0b0b0b] py-20 text-white">
      <div className="container-page">
        
        {/* HEADING */}
        <div className="mb-14 text-center">
          <p className="gold mb-3 text-xs font-semibold tracking-[0.35em] uppercase">
            Kind Words
          </p>

          <h2 className="font-heading text-5xl font-medium">
            Client Testimonials
          </h2>

          <div className="gold-line mx-auto mt-5" />
        </div>

        {/* TESTIMONIALS */}
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* CARD */}
          <div className="relative border border-white/5 bg-[#111111] p-8">
            <span className="absolute left-6 top-4 text-7xl text-white/10">
              “
            </span>

            <p className="relative z-10 leading-8 text-white/75">
              Thank you @kay_the_personalizer for a fabulous evening
              filled with excellent food, beautiful setup and amazing
              service.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <img
                src="/images/user1.jpg"
                alt=""
                className="h-12 w-12 rounded-full object-cover"
              />

              <p className="text-sm text-white/80">
                — Joanna C.
              </p>
            </div>
          </div>

          {/* CARD */}
          <div className="relative border border-white/5 bg-[#111111] p-8">
            <span className="absolute left-6 top-4 text-7xl text-white/10">
              “
            </span>

            <p className="relative z-10 leading-8 text-white/75">
              Kay is so creative and professional. She turned my event
              into something beyond what I imagined!
            </p>

            <div className="mt-7 flex items-center gap-4">
              <img
                src="/images/user2.jpg"
                alt=""
                className="h-12 w-12 rounded-full object-cover"
              />

              <p className="text-sm text-white/80">
                — Real_Kay_N
              </p>
            </div>
          </div>

          {/* CARD */}
          <div className="relative border border-white/5 bg-[#111111] p-8">
            <span className="absolute left-6 top-4 text-7xl text-white/10">
              “
            </span>

            <p className="relative z-10 leading-8 text-white/75">
              The decor, the food, the details — everything was perfect!
              Highly recommend her for any occasion.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <img
                src="/images/user3.jpg"
                alt=""
                className="h-12 w-12 rounded-full object-cover"
              />

              <p className="text-sm text-white/80">
                — Leemat18
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// function Footer() {
//   return (
//     <footer className="border-t border-[#2a2115] py-8 text-center">
//       <p className="text-xs text-white/45">
//         © 2026 Kay The Personalizer. All Rights Reserved.
//       </p>
//     </footer>
//   );
// }

function Footer() {
  return (
    <footer className="border-t border-[#1d1d1d] bg-[#080808] pt-16 pb-8 text-white">
      <div className="container-page grid gap-14 md:grid-cols-3">
        
        {/* LOGO */}
        <div>
          <h2 className="font-script text-6xl text-[#c9973f]">
            Kay
          </h2>

          <p className="mt-2 text-xs tracking-[0.45em] text-white/70 uppercase">
            THE PERSONALIZER
          </p>
        </div>

        {/* CONTACT */}
        <div className="space-y-5 text-white/75">
          
          <div className="flex items-center gap-4">
            <Phone size={18} color={gold} />
            <p>(609) 000-0000</p>
          </div>

          <div className="flex items-center gap-4">
            <Mail size={18} color={gold} />
            <p>kaythepersonalizer@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <MapPin size={18} color={gold} />
            <p>
              Serving Pennsylvania, <br />
              New Jersey & Delaware
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* <Instagram size={18} color={gold} /> */}
            <FaInstagram size={15} color={gold} />
            <p>@kay_the_personalizer</p>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="font-heading text-4xl leading-tight">
            Let’s Create Something Unforgettable Together
          </h3>

          <div className="mt-8 flex overflow-hidden rounded-full border border-white/10 bg-white/5">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent px-5 py-4 text-sm outline-none placeholder:text-white/40"
            />

            <button className="bg-[#c9973f] px-7 text-sm font-semibold text-black transition hover:bg-[#ddb35a]">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="container-page mt-14 border-t border-white/5 pt-6 text-center text-sm text-white/40">
        © 2026 Kay The Personalizer. All Rights Reserved.
      </div>
    </footer>
  );
}