
const inspirationImages = [
  {
    src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    className: "col-span-2 row-span-4",
  },
  {
    src: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&q=80",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=800&q=80",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
    className: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&q=80",
    className: "col-span-2 row-span-2",
  },
  // {
  //   src: "https://images.unsplash.com/photo-1556229010-aa3e6ff4cd55?w=800&q=80",
  //   className: "col-span-2 row-span-2",
  // },
  {
    src: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=500&q=80",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&q=80",
    className: "col-span-3 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&q=80",
    className: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=500&q=80",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80",
    className: "col-span-2 row-span-2",
  },
   {
    src: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80",
    className: "col-span-2 row-span-2",
  },
];

const ImageSection = ()=> {
  return (
    <section className="bg-[#e8e8e8] px-5 py-8 md:px-8 lg:px-11">
      {/* Heading */}
      <h2 className="mb-4 text-2xl font-semibold text-[#000000]">
        Like. Comment. Aspire.
      </h2>

      {/* Image Grid */}
      <div
        className="
          grid
          grid-cols-4
          auto-rows-28
          gap-3
          md:grid-cols-8
          lg:grid-cols-12
          lg:auto-rows-27.75
        "
      >
        {inspirationImages.map((image, index) => (
          <div
            key={index}
            className={`
              ${image.className}
              group
              overflow-hidden
              rounded-lg
            `}
          >
            <img
              src={image.src}
              alt={`Inspiration ${index + 1}`}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="mt-7 text-center">
        <p className="mb-2 text-[14px] text-gray-500">
          Join us:
        </p>

        <div className="flex justify-center gap-6 text-[13px]">
          <a
            href="#"
            className="text-[#ef4b23] transition-opacity hover:opacity-60"
          >
            Instagram
          </a>

          <a
            href="#"
            className="text-[#ef4b23] transition-opacity hover:opacity-60"
          >
            TikTok
          </a>

          <a
            href="#"
            className="text-[#ef4b23] transition-opacity hover:opacity-60"
          >
            Facebook
          </a>

          <a
            href="#"
            className="text-[#ef4b23] transition-opacity hover:opacity-60"
          >
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImageSection;