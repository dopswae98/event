"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaCalendarAlt,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-[#090b0b] text-white">
      <section className="contact-hero min-h-[680px] pt-32 md:min-h-[520px] md:pt-36">
        <div className="container-page flex min-h-[520px] items-center md:min-h-[390px]">
          <div className="max-w-[320px] md:max-w-[560px]">
            <p className="gold mb-4 text-xs font-semibold tracking-[0.22em] md:text-sm md:tracking-[0.28em]">
              CONTACT US
            </p>

            <h1 className="font-heading text-[42px] font-semibold leading-[0.95] md:text-[74px]">
              Let’s Create <br />
              Something <br />
              <em className="gold">Unforgettable.</em>
            </h1>

            <div className="gold-line my-6 md:my-7" />

            <p className="max-w-[300px] text-base leading-relaxed text-white/85 md:max-w-[480px] md:text-lg">
              We’d love to hear about your event and help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="contact-mobile-card border border-[#2b2418] bg-[#0d0f0e] p-5 sm:p-8">
            <h2 className="gold break-words text-2xl font-semibold sm:text-4xl">
              SEND US A MESSAGE
            </h2>

            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Fill out the form below and we will get back to you as soon as possible.
            </p>

            <form className="mt-8 space-y-5 sm:mt-10">
              <div className="grid gap-5 md:grid-cols-2">
                <input placeholder="Full Name *" className="contact-input" />
                <input placeholder="Phone Number *" className="contact-input" />
              </div>

              <input type="email" placeholder="Email Address *" className="contact-input" />
              <input type="date" className="contact-input" />

              <div className="grid gap-5 md:grid-cols-2">
                <select className="contact-input">
                  <option>Event Type *</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Corporate Event</option>
                  <option>Private Dinner</option>
                </select>

                <input placeholder="Guest Count (Approx.) *" className="contact-input" />
              </div>

              <input placeholder="Location / Venue" className="contact-input" />

              <select className="contact-input">
                <option>Budget Range</option>
                <option>$500 - $1,000</option>
                <option>$1,000 - $3,000</option>
                <option>$3,000+</option>
              </select>

              <textarea
                rows={6}
                placeholder="Tell us about your event / Special requests"
                className="contact-input resize-none"
              />

              <button className="btn-gold w-full px-4 py-4 text-sm font-semibold sm:w-auto sm:px-10">
                SEND MESSAGE →
              </button>

              <p className="text-sm text-white/50">* Required fields</p>
            </form>
          </div>

          <div className="contact-mobile-card border border-[#2b2418] bg-[#0d0f0e] p-5 sm:p-8">
            <h2 className="gold text-2xl font-semibold sm:text-4xl">
              GET IN TOUCH
            </h2>

            <div className="gold-line my-6 sm:my-7" />

            <div className="space-y-8">
              <ContactItem icon={<FaPhoneAlt />} title="(609) 582-3700" text="Call or Text" />
              <ContactItem icon={<FaEnvelope />} title="kaythepersonalizer@gmail.com" text="Email Us" />
              <ContactItem icon={<FaMapMarkerAlt />} title="Serving Pennsylvania, New Jersey & Delaware" text="Travel available upon request" />
              <ContactItem icon={<FaInstagram />} title="@kay_the_personalizer" text="Follow us on Instagram" />
            </div>

            <div className="mt-12 border-t border-[#2b2418] pt-10">
              <h2 className="gold text-2xl font-semibold sm:text-4xl">
                BUSINESS HOURS
              </h2>

              <div className="gold-line my-6 sm:my-7" />

              <div className="space-y-5 text-sm sm:text-lg">
                <div className="flex justify-between gap-4">
                  <p>Monday – Saturday</p>
                  <p>9:00 AM – 6:00 PM</p>
                </div>

                <div className="flex justify-between gap-4">
                  <p>Sunday</p>
                  <p>By Appointment Only</p>
                </div>
              </div>

              <p className="mt-8 text-sm leading-7 text-white/60 sm:text-base">
                We respond to all inquiries within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <FAQSection />

          <div className="flex items-center">
            <div className="relative w-full border border-[#c9973f] bg-[#0d0f0e] p-6 text-center sm:p-10">
              <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#c9973f] bg-[#090b0b] text-2xl text-[#c9973f]">
                <FaCalendarAlt />
              </div>

              <h2 className="font-heading mt-8 text-4xl sm:text-5xl">
                Ready to get started?
              </h2>

              <p className="font-heading mt-4 text-2xl italic text-[#c9973f] sm:text-3xl">
                Book your consultation today.
              </p>

              <Link
                href="/contact"
                className="btn-gold mt-8 inline-block px-8 py-4 text-sm font-semibold"
              >
                BOOK A CONSULTATION →
              </Link>

              <p className="mx-auto mt-8 max-w-[300px] text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Let us take care of the details so you can enjoy every moment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 sm:gap-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c9973f] text-lg text-[#c9973f] sm:h-14 sm:w-14 sm:text-xl">
        {icon}
      </div>

      <div className="min-w-0">
        <h3 className="contact-long-text text-base font-semibold sm:text-xl">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-white/60 sm:text-base">
          {text}
        </p>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 2–4 weeks in advance for smaller events and 4–8 weeks for larger celebrations.",
    },
    {
      question: "Do you travel outside of PA, NJ & DE?",
      answer:
        "Yes. Travel is available depending on location and event requirements.",
    },
    {
      question: "Can you create custom packages?",
      answer:
        "Absolutely. We customize every event based on your style, colors, guest count, and budget.",
    },
    {
      question: "What is your payment policy?",
      answer:
        "A deposit is required to secure your event date, with the remaining balance due before the event.",
    },
  ];

  return (
    <div>
      <h2 className="gold text-2xl font-semibold sm:text-4xl">
        FREQUENTLY ASKED QUESTIONS
      </h2>

      <div className="gold-line my-6 sm:my-7" />

      <div className="space-y-5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.question} className="border-b border-[#2b2418] pb-5">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 text-left"
              >
                <span className="text-base sm:text-lg">{faq.question}</span>

                <span className="text-3xl text-[#c9973f]">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <p className="mt-4 max-w-[700px] text-sm leading-7 text-white/70 sm:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}