import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(1);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b border-border card-shadow">
      <nav className="container mx-auto px-4 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
            C
          </div>
          <span className="text-lg font-bold text-foreground tracking-tight">COLLEG</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#products"
            className="underline-accent text-sm font-medium text-foreground"
          >
            Shop
          </a>
          <a
            href="#deals"
            className="underline-accent text-sm font-medium text-foreground"
          >
            Deals
          </a>
          <a
            href="#why-us"
            className="underline-accent text-sm font-medium text-foreground"
          >
            Why Us
          </a>
          <a
            href="#contact"
            className="underline-accent text-sm font-medium text-foreground"
          >
            Contact
          </a>
        </div>

        {/* Cart & Mobile Menu Button */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            className="hidden md:flex items-center justify-center relative w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300"
            aria-label="Shopping cart"
          >
            <ShoppingBag className="w-5 h-5 text-primary" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a
              href="#products"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
            <a
              href="#deals"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Deals
            </a>
            <a
              href="#why-us"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl hover:shadow-lg font-semibold transition-all text-sm active:scale-95">
              View Cart ({cartCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
