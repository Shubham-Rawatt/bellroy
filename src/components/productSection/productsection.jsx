import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "swiper/css";
import { productCategories } from "../../data/productdata";
import ProductCard from "./productcard";


const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const currentCategory = productCategories[activeCategory];
  const handleCategoryChange = (index) => {
    setActiveCategory(index);

    // Category change hone par slider ko beginning par le jayega
    setTimeout(() => {
      swiper?.slideTo(0);
    }, 0);
  };

  return (
    <section className="w-full px-6 py-10 md:px-10 lg:px-14">
      {/* Category Navigation */}
      <div className="mb-5 overflow-x-auto">
        <div className="flex min-w-max items-center gap-7 border-b border-gray-200">
          {productCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(index)}
              className={`relative pb-4 text-[17px] font-medium transition-colors duration-300 ${
                activeCategory === index
                  ? "text-[#cd4c20]"
                  : "text-[#000000] hover:text-[#c44732]"
              }`}
            >
              {category.name}

              {/* Active Underline */}
              {activeCategory === index && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#c44732]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Products Slider */}
      <div className="relative">
        <Swiper
          key={currentCategory.id}
          onSwiper={setSwiper}
          spaceBetween={5}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 4,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 4,
            },

            1280: {
              slidesPerView: 3,
              spaceBetween: 4,
            },
          }}
        >
          {currentCategory.products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Arrow */}
        <button
          onClick={() => swiper?.slideNext()}
          className="absolute -right-12 top-1/2 z-20 hidden -translate-y-1/2 text-[#666] transition hover:text-black lg:block"
        >
          <FiChevronRight size={55} strokeWidth={1} />
        </button>

        {/* Left Arrow */}
        <button
          onClick={() => swiper?.slidePrev()}
          className="absolute -left-12 top-1/2 z-20 hidden -translate-y-1/2 text-[#666] transition hover:text-black lg:block"
        >
          <FiChevronLeft size={55} strokeWidth={1} />
        </button>
   
      <button className="border-2 border-[#000000] px-6 py-1.5 rounded-sm mt-5 text-sm font-bold">SHOP ALL BACKPACKS</button>
      </div>
    </section>
  );
};

export default ProductSection;