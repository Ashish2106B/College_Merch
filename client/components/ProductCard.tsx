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
    <div className="group flex flex-col gap-4 cursor-pointer">
      {/* Product Image Container */}
      <div
        className="relative w-full aspect-square bg-background rounded-2xl overflow-hidden card-shadow group-hover:card-shadow-lg transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-115" : "scale-100"
          }`}
        />

        {/* Overlay Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Add to Cart Button - appears on hover */}
        <div
          className={`absolute inset-0 flex items-end justify-center pb-6 transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-lg transition-all active:scale-95 duration-300">
            <ShoppingCart className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-2">
        {category && (
          <p className="text-xs font-bold text-primary uppercase tracking-widest">
            {category}
          </p>
        )}
        <h3 className="text-base font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex items-baseline gap-2">
          <p className="text-2xl font-bold text-primary">₹{price}</p>
          <p className="text-xs text-muted-foreground">Inc. GST</p>
        </div>
      </div>
    </div>
  );
}
