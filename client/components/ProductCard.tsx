import { useState } from "react";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
}

export default function ProductCard({
  name,
  price,
  image,
  category,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group flex flex-col gap-3">
      {/* Product Image Container */}
      <div
        className="relative w-full aspect-square bg-background rounded-2xl overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Add to Cart Button - appears on hover */}
        <div
          className={`absolute inset-0 flex items-end justify-center pb-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          } bg-gradient-to-t from-black/20 to-transparent`}
        >
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-opacity-90 transition-all active:scale-95">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1">
        {category && (
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            {category}
          </p>
        )}
        <h3 className="text-sm font-semibold text-foreground line-clamp-2">
          {name}
        </h3>
        <p className="text-base font-bold text-primary">₹{price}</p>
      </div>
    </div>
  );
}
