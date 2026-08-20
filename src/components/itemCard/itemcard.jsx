// import { inspirationData } from "../../data/inspirationData";
import { itemsData } from "../../data/itemsdata";

const ItemsCard = () => {
  return (
    <section className="w-full bg-white px-6 py-15 mx-auto">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {itemsData.map((item) => (
          <div
            key={item.id}
            className="group min-w-32.5 max-w-36.25 cursor-pointer text-center"
          >
            {/* Image */}
            <div className="h-23.25 w-full overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <p className="mt-1 text-sm font-semibold text-gray-900">
              {item.title}
            </p>

            {/* Badge */}
            {item.badge && (
              <span className="mt-2 inline-block text-[11px] font-bold text-orange-600">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemsCard;
