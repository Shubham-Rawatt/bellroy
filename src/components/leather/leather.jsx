import bottle from "../../assets/images/bottle.avif";
import kapda from "../../assets/images/kapda.avif";

const LeatherSection = () => {
  return (
    <section className="relative min-h-125 overflow-hidden bg-[#fafafa]">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-70"
        style={{ backgroundImage: `
            linear-gradient(to right, #dfe3e5 1px, transparent 1px),
            linear-gradient(to bottom, #dfe3e5 1px, transparent 1px) `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Top Content */}
      <div className="relative z-10 px-6 pt-24 md:px-12">
        <div className="max-w-162.5">
          <p className="text-[22px] leading-[1.45] text-[#333] md:text-[25px]">
            As a certified B Corporation, we use business as a force
            <br className="hidden md:block" />
            for good. Learn more about us and our purpose.
          </p>

          <a
            href="#"
            className="mt-5 inline-block text-[14px] font-medium text-[#e84922] transition-opacity hover:opacity-70"
          >
            Read about us
          </a>
        </div>
      </div>

      {/* Bottle Image - Replace src */}
      <img
        src={bottle}
        alt="Bottle"
        className="absolute right-[3%] top-0 z-10 w-10 object-contain md:w-85 lg:w-97.5"
      />

      {/* Leather Content */}
      <div className="relative z-10 px-6 pb-16 pt-16 md:px-12 md:pt-14">
        <h2 className="text-[42px] font-black uppercase leading-none tracking-[-2px] text-[#303030] md:text-[50px] lg:text-[52px]">
          Leather, Crafted
        </h2>

        <p className="mt-4 text-[19px] font-bold text-[#363636] md:text-[21px]">
          We use leather from gold-rated LWG tanneries.
        </p>
      </div>

      {/* Pause Button */}
      <button
        className="absolute bottom-25 left-12 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#888] shadow-sm"
        aria-label="Pause"
      >
        <span className="text-[12px]">Ⅱ</span>
      </button>

      {/* Bottom Leather Image - Replace src */}
      <img
        src={kapda}
        alt="Leather"
        className="absolute bottom-0 right-[2%] z-10 w-10 object-contain md:w-95 lg:w-107.5"
      />
    </section>
  );
};

export default LeatherSection;