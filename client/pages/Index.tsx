import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Premium Hoodie",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=400&h=400&fit=crop",
    category: "Apparel",
  },
  {
    id: 2,
    name: "Classic T-Shirt",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "Apparel",
  },
  {
    id: 3,
    name: "College Cap",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1595777707802-c2265fbe1e0d?w=400&h=400&fit=crop",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Notebook Set",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop",
    category: "Stationery",
  },
  {
    id: 5,
    name: "Bottle",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e9?w=400&h=400&fit=crop",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Varsity Jacket",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=400&h=400&fit=crop",
    category: "Apparel",
  },
];

const deals = [
  {
    id: 1,
    title: "Student Combo",
    items: "Hoodie + T-Shirt + Cap",
    price: 2199,
    originalPrice: 2497,
    badge: "POPULAR",
  },
  {
    id: 2,
    title: "Starter Pack",
    items: "2 T-Shirts + Notebook",
    price: 1299,
    originalPrice: 1448,
    badge: null,
  },
  {
    id: 3,
    title: "Premium Bundle",
    items: "Hoodie + Jacket + Cap",
    price: 4099,
    originalPrice: 4397,
    badge: "BEST VALUE",
  },
];

export default function Index() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems] = useState([
    { id: 1, name: "Premium Hoodie", quantity: 1, price: 1499 },
  ]);

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-background via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center gap-6 md:gap-8">
            <div className="inline-block px-4 py-2 rounded-full bg-secondary/20 border border-secondary/50">
              <p className="text-sm font-medium text-foreground">
                Exclusive College Merchandise
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight max-w-3xl">
              Wear Your College Pride
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Premium quality hoodies, T-shirts, caps, and accessories designed
              for college students. Express your personality with exclusive merch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#products"
                className="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-opacity-90 transition-all active:scale-95 inline-block text-center"
              >
                Shop Now
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 bg-secondary text-foreground rounded-xl font-semibold hover:bg-opacity-80 transition-all active:scale-95 inline-block text-center"
              >
                Explore Deals
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our Collection
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Carefully curated selection of premium college merchandise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Deals Section */}
      <section id="pricing" className="py-16 md:py-24 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Best Value Deals
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Save more with our exclusive combo packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <div
                key={deal.id}
                className={`relative p-6 md:p-8 rounded-2xl border transition-all ${
                  deal.badge === "BEST VALUE"
                    ? "border-accent bg-white shadow-lg scale-105"
                    : "border-border bg-white hover:shadow-md"
                }`}
              >
                {deal.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-foreground text-xs font-bold rounded-full">
                    {deal.badge}
                  </div>
                )}

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {deal.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {deal.items}
                </p>

                <div className="mb-6">
                  <p className="text-3xl font-bold text-primary">
                    ₹{deal.price}
                  </p>
                  {deal.originalPrice && (
                    <p className="text-sm text-muted-foreground line-through mt-1">
                      ₹{deal.originalPrice}
                    </p>
                  )}
                </div>

                <button className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all active:scale-95">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions? Reach out to us via WhatsApp or fill out the form below.
              </p>

              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <button
                  type="submit"
                  className="py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <div className="p-6 bg-background rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-semibold text-foreground">+91 9876543210</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-background rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-4">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Premium quality merchandise</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Fast & reliable delivery</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Exclusive college designs</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Friendly customer support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 md:py-12 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-foreground mb-3">COLLEG</p>
              <p className="text-sm text-muted-foreground">
                Premium college merchandise for students.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm mb-3">Shop</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#products" className="hover:text-foreground transition">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-foreground transition">
                    Deals
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm mb-3">Support</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#contact" className="hover:text-foreground transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm mb-3">Follow</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-secondary hover:bg-opacity-80 transition flex items-center justify-center text-foreground"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-secondary hover:bg-opacity-80 transition flex items-center justify-center text-foreground"
                >
                  @
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-secondary hover:bg-opacity-80 transition flex items-center justify-center text-foreground"
                >
                  in
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 COLLEG. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Cart Slide-in Panel */}
      {showCart && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setShowCart(false)} />
      )}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl transition-transform duration-300 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Shopping Cart</h2>
            <button
              onClick={() => setShowCart(false)}
              className="p-2 hover:bg-secondary rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 mb-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 bg-background rounded-lg"
              >
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-sm">
                    {item.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Qty: {item.quantity}
                  </p>
                </div>
                <p className="font-bold text-primary">₹{item.price}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 border-t border-border pt-4">
            <div className="flex items-center justify-between">
              <p className="text-foreground font-semibold">Total:</p>
              <p className="text-xl font-bold text-primary">₹{cartTotal}</p>
            </div>
            <button className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all active:scale-95">
              Proceed to Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
