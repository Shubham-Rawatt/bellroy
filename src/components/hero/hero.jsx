import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img1 from "../../assets/images/hero1.avif";
import img2 from "../../assets/images/hero2.avif";
import img3 from "../../assets/images/hero3.avif";

const slides = [
  {
    id: 1,
    image: img1,
    title: (
      <>
        CARRY SMART.
        <br />
        MOVE FREE.
        <br />
        GO FAR.
      </>
    ),
    button: "BESTSELLERS",
  },
  {
    id: 2,
    image: img2,
    title: (
      <>
        OUTLET
        <br />
        RESTOCKED
      </>
    ),
    button: "SHOP UP TO 35% OFF",
  },
  {
    id: 3,
    image: img3,
    title: (
      <>
        WE'VE GOT
        <br />
        YOUR BACK
      </>
    ),
    button: "SHOP BACKPACKS",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative h-[70vh] min-h-125 w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={slide.image}
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 sm:px-10 md:px-14 lg:px-16">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.title}
          </h1>

          <button className="mt-8 bg-[#cd4c20] px-7 py-3 text-sm rounded-md font-bold tracking-wider text-white transition hover:bg-orange-700">
            {slide.button}
          </button>
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white transition hover:bg-black/20 sm:left-6"
      >
        <FiChevronLeft size={32} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white transition hover:bg-black/20 sm:right-6"
      >
        <FiChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((item, index) => (
          <button
            key={item.id}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
