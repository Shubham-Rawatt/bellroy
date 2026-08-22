
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const collections = [
  {
    name: "Tokyo",
    tagline: "Functional, minimal, modern",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
  },
  {
    name: "VENTURE",
    tagline: "Rugged, durable, adventure-ready",
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80",
  },
  {
    name: "Classic",
    tagline: "Timeless, reliable, just right",
    img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80",
  },
  {
    name: "Cinched",
    tagline: "Colorful, fun, everyday",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
  },
  {
    name: "Laneway",
    tagline: "Low-key, adaptable, city-coded",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
  },
];

export default function Collections() {
  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Heading */}
        <h2 className="mb-5 text-[20px] font-bold tracking-tight text-[#111] md:text-[21px]">
          Gear to suit your style
        </h2>

        {/* Slider */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            className="collections-prev absolute -left-12 top-1/2 z-10 hidden -translate-y-1/2 text-[#555] transition hover:text-black lg:block"
            aria-label="Previous"
          >
            {/* <ChevronLeft size={34} strokeWidth={1.5} /> */} 
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".collections-prev",
              nextEl: ".collections-next",
            }}
            spaceBetween={16}
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 12,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 14,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 16,
              },
            }}
            className="overflow-visible!"
          >
            {collections.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="group relative h-[440px] overflow-hidden rounded-[8px]">

                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-7 left-5 right-4 text-white">

                    <h3
                      className={`mb-1 font-bold ${
                        item.name === "VENTURE"
                          ? "text-[25px] tracking-[8px]"
                          : "text-[48px] tracking-[-2px]"
                      }`}
                    >
                      {item.name}
                    </h3>

                    <p className="max-w-[190px] text-[13px] font-semibold leading-[18px]">
                      {item.tagline}
                    </p>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Arrow */}
          <button
            className="collections-next absolute -right-12 top-1/2 z-10 hidden -translate-y-1/2 text-[#555] transition hover:text-black lg:block"
            aria-label="Next"
          >
            {/* <ChevronRight size={34} strokeWidth={1.5} /> */}
          </button>
        </div>

        {/* Button */}
        <button className="mt-4 border-2 border-[#333] bg-white px-4 py-2 text-[12px] font-bold tracking-[1.5px] text-[#222] transition hover:bg-[#222] hover:text-white">
          SHOP ALL COLLECTIONS
        </button>

      </div>
    </section>
  );
}