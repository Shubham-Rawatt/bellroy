import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { categoryData } from "../../data/category";
import "swiper/css";
// import { PiBirdThin } from "react-icons/pi";
import { GiBirdMask } from "react-icons/gi";
// import sectionimg from "../../assets/images/bgimg.webp"

const CategoryCard = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="w-full bg- px-6 py-10 md:px-10 lg:px-14">
    
    {/* <section  className="w-full bg-cover bg-center bg-no-repeat px-6 py-10 md:px-10 lg:px-14" */}
   {/* style={{ backgroundImage: `url(${sectionimg})` }}> */}

 
      {/* Small Icon */}
      <div className="mb-4">
        <span className="text-3xl">
          <GiBirdMask size={40} className="text-[#666666] scale-x-[-1]" />
        </span>
      </div>

      {/* Heading */}
      <div className="mb-10 max-w-2xl">
        <pre className="text-2xl leading-tight tracking-tight md:text-4xl lg:text-[34px]">
          We’re committed to moving you through <br />
          the world with confidence.So wherever <br />
          you are, we’ll gear you up for...
        </pre>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          className="overflow-visible!"
        >
          {categoryData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group relative h-92.5 overflow-hidden rounded-xl">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/25" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                  <h3 className="max-w-57.5 text-3xl font-black uppercase leading-[1.05] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm font-medium">{item.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button */}
        <button
          onClick={() => swiper?.slideNext()}
          className="absolute -right-12 top-1/2 z-10 hidden -translate-y-1/2 text-[#666666] transition hover:text-black lg:block"
        >
          <FiChevronRight size={60} strokeWidth={0.9} />
        </button>

        {/* Previous Button */}
        <button
          onClick={() => swiper?.slidePrev()}
          className="absolute -left-12 top-1/2 z-10 hidden -translate-y-1/2 text-[#666666] transition hover:text-black lg:block"
        >
          <FiChevronLeft size={60} strokeWidth={0.9} />
        </button>
      </div>
    </section>
  );
};

export default CategoryCard;
