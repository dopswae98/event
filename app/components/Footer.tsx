import { FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[#2b2418] bg-[#080909] text-white">
      <div className="container-page grid gap-12 py-14 md:grid-cols-3">
        
        {/* LEFT */}
        <div>
          <div className="font-script gold text-6xl leading-none">
            Kay
          </div>

          <p className="mt-2 text-[10px] tracking-[0.4em]">
            THE PERSONALIZER
          </p>

          <p className="mt-6 max-w-[280px] text-sm leading-7 text-white/70">
            Luxury event styling and unforgettable custom experiences for elegant celebrations.
          </p>
        </div>

        {/* CENTER */}
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#c9973f]" />
            <p>(609) 000-0000</p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#c9973f]" />
            <p>kaythepersonalizer@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#c9973f]" />
            <p>Pennsylvania, New Jersey & Delaware</p>
          </div>

          <div className="flex items-center gap-4">
            <FaInstagram className="text-[#c9973f]" />
            <p>@kay_the_personalizer</p>
          </div>
        </div>

        {/* RIGHT */}
        <div>
        <h3 className="font-heading text-4xl leading-tight text-white">
            Let’s Create Something Unforgettable Together
        </h3>

        <div className="mt-8 flex overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <input
            type="email"
            placeholder="Your email address"
            className="w-full bg-transparent px-6 py-4 text-sm text-white outline-none placeholder:text-white/40"
            />

            <button className="bg-[#c9973f] px-8 text-sm font-semibold text-black transition duration-300 hover:bg-[#ddb35a]">
            SUBSCRIBE
            </button>
        </div>
        </div>
      </div>

      <div className="border-t border-[#2b2418] py-5 text-center text-sm text-white/50">
        © 2025 Kay The Personalizer. All Rights Reserved.
      </div>
    </footer>
  );
}