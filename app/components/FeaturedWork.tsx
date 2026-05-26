const gallery = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-[#101211] py-2 text-center">
      <div className="container-page">
        <p className="gold text-[10px] font-semibold tracking-[0.28em]">
          FEATURED WORK
        </p>

        <h2 className="font-heading text-[34px] leading-none">
          A GLIMPSE OF OUR WORK
        </h2>

        <div className="mx-auto mt-2 h-px w-20 bg-[#c8953a]" />

        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {gallery.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="h-[95px] w-full object-cover"
            />
          ))}
        </div>

        <button className="btn-outline mt-5 px-7 py-3 text-[11px] font-semibold">
          VIEW FULL GALLERY →
        </button>
      </div>
    </section>
  );
}