import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import { trendingData } from "../../data/trendingproduct";

const TrendingProducts = () => {
  return (
    <section className="w-full px-14 py-8 mb-10">
      {/* Heading */}
      <h2 className="mb-4 text-xl font-bold text-[#333333]">Trending now</h2>

      <div className="relative">
        {/* Left Arrow */}
        <button className="trending-prev absolute -left-10 top-1/2 z-10 -translate-y-1/2 text-[#666666]">
          <FiChevronLeft size={60} strokeWidth={0.9} />
        </button>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".trending-prev",
            nextEl: ".trending-next",
          }}
          slidesPerView={3}
          spaceBetween={4}
          className="w-full"
        >
          {trendingData.map((product) => (
            <SwiperSlide key={product.id}>
              {/* Card */}
              <div className="h-125 bg-[#f7f7f7] shadow-lg">
                {/* Image */}
                <div className="flex h-102.5 items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-80 w-60 object-contain"
                  />
                </div>

                {/* Details */}
                <div className="px-3">
                  <p className="text-sm font-medium">{product.name}</p>

                  <p className="mt-1 text-sm font-bold">{product.price}</p>

                  {/* Colors */}
                  <div className="mt-3 flex gap-2">
                    {product.colors?.map((color, index) => (
                      <span
                        key={index}
                        className="h-5 w-5 rounded-full border border-gray-300"
                        style={{
                          backgroundColor: color,
                        }}
                      />
                    ))}
                  </div>

                  <p className="mt-3 text-xs text-gray-600">
                    {product.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Arrow */}
        <button className="trending-next absolute -right-10 top-1/2 z-10 -translate-y-1/2 text-[#666666]">
          <FiChevronRight size={60} strokeWidth={0.9} />
        </button>
      </div>
    </section>
  );
};

export default TrendingProducts;
