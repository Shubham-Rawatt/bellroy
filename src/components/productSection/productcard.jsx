const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden bg-[#f6f6f6] shadow-lg">
      {/* Product Image */}
      <div className="h-70 overflow-hidden bg-[#f7f7f7] mt-10">
        <img
          src={product.image}
          alt={product.name}
          className="h-65 w-65 object-cover transition-transform duration-500 group-hover:scale-[1.03] mx-auto"
        />
      </div>

      {/* Product Information */}
      <div className="px-3 py-4">
        <h3 className="text-[16px] font-medium text-black">
          {product.name}
        </h3>

        <p className="mt-1 text-[15px] font-semibold">
          {product.price}
        </p>

        {/* Colors */}
        <div className="mt-3 flex items-center gap-2">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className="h-5 w-5 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Description */}
        <p className="mt-3 text-[13px] leading-5 text-[#555]">
          {product.description}
        </p>
      </div>
      
    </div>
  );
};

export default ProductCard;