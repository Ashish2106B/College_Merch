import { useState } from "react";
import { X, MessageCircle, Check } from "lucide-react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import BenefitsSection from "@/components/BenefitsSection";

const products = [
  {
    id: 1,
    name: "Premium Hoodie",
    price: 1499,
    image: "https://picsum.photos/500/500?random=1",
    category: "Apparel",
  },
  {
    id: 2,
    name: "Classic T-Shirt",
    price: 599,
    image: "https://picsum.photos/500/500?random=2",
    category: "Apparel",
  },
  {
    id: 3,
    name: "College Cap",
    price: 399,
    image: "https://picsum.photos/500/500?random=3",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Notebook Set",
    price: 449,
    image: "https://picsum.photos/500/500?random=4",
    category: "Stationery",
  },
  {
    id: 5,
    name: "Bottle",
    price: 699,
    image: "https://picsum.photos/500/500?random=5",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Varsity Jacket",
    price: 2499,
    image: "https://picsum.photos/500/500?random=6",
    category: "Apparel",
  },
];

const deals = [
  {
    id: 1,
    title: "Student Combo",
    items: ["Hoodie", "T-Shirt", "Cap"],
    price: 2199,
    originalPrice: 2497,
    badge: "🔥 Most Popular",
    highlight: false,
  },
  {
    id: 2,
    title: "Starter Pack",
    items: ["2 T-Shirts", "Notebook"],
    price: 1299,
    originalPrice: 1448,
    badge: null,
    highlight: false,
  },
  {
    id: 3,
    title: "Premium Bundle",
    items: ["Hoodie", "Jacket", "Cap"],
    price: 4099,
    originalPrice: 4397,
    badge: "💎 Best Value",
    highlight: true,
  },
];

export default function Index() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems] = useState([
    { id: 1, name: "Premium Hoodie", quantity: 1, price: 1499 },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const categories = ["All", "Apparel", "Accessories", "Stationery"];
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <p className="text-xs font-bold text-primary uppercase tracking-widest">
                  Exclusive College Merch
                </p>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Rep Your Campus.{" "}
                <span className="bg-gradient-to-r from-primary to-secondary/80 bg-clip-text text-transparent">
                  Own Your Style.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Premium college merchandise designed for students who want to express their personality. From hoodies to accessories, wear your pride with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#products"
                  className="btn-primary inline-block text-center"
                >
                  Shop Collection
                </a>
                <a
                  href="#deals"
                  className="btn-outline inline-block text-center"
                >
                  View Deals
                </a>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4 pt-4">
                <div>
                  <p className="text-sm font-bold text-foreground">
                    1,200+ Happy Students
                  </p>
                  <p className="text-xs text-muted-foreground">
                    on campus already
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative hidden md:block">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden card-shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=600&h=600&fit=crop"
                  alt="College students wearing merchandise"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 card-shadow-lg">
                <p className="text-sm font-bold text-foreground">Free Shipping</p>
                <p className="text-xs text-muted-foreground">on orders above ₹999</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Collection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Carefully curated selection of premium college merchandise designed for students who want to make a statement.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground border border-border hover:border-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Deals Section */}
      <section id="deals" className="py-16 md:py-24 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Best Value Bundles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get more, pay less. Our student-favorite combo deals let you save big.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <div
                key={deal.id}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  deal.highlight
                    ? "bg-white border-2 border-primary card-shadow-lg scale-105 md:scale-110"
                    : "bg-white border border-border card-shadow hover:card-shadow-lg"
                }`}
              >
                {deal.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-white text-sm font-bold rounded-full">
                    {deal.badge}
                  </div>
                )}

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {deal.title}
                </h3>

                {/* Items list */}
                <ul className="mb-6 space-y-2">
                  {deal.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="mb-6 pb-6 border-b border-border">
                  <p className="text-4xl font-bold text-primary">₹{deal.price}</p>
                  {deal.originalPrice && (
                    <p className="text-sm text-muted-foreground line-through mt-2">
                      ₹{deal.originalPrice}
                    </p>
                  )}
                  <p className="text-xs text-primary font-semibold mt-2">
                    Save ₹{deal.originalPrice - deal.price}
                  </p>
                </div>

                <button
                  className={
                    deal.highlight ? "btn-primary w-full" : "btn-secondary w-full"
                  }
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions or ready to order? Reach out and we'll get back to you ASAP.
              </p>

              <form className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us what's on your mind..."
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              {/* WhatsApp Card */}
              <div className="p-8 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl border border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-green-700 font-semibold">
                      WhatsApp
                    </p>
                    <p className="text-xl font-bold text-foreground">
                      +91 9876543210
                    </p>
                  </div>
                </div>
                <p className="text-sm text-green-700">
                  💬 Instant response • Mon-Fri 9AM-9PM
                </p>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-2xl border border-border bg-background">
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  Email
                </p>
                <p className="text-lg font-bold text-foreground">
                  hello@colleg.in
                </p>
              </div>

              {/* Info Card */}
              <div className="p-6 rounded-2xl border border-border bg-background">
                <h3 className="font-bold text-foreground mb-4">
                  Shipping & Returns
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Free shipping on orders above ₹999</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>7-day return policy, no questions asked</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Express delivery available to your campus</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-foreground font-bold text-sm">
                  C
                </div>
                <p className="font-bold text-lg">COLLEG</p>
              </div>
              <p className="text-sm text-white/70">
                Premium college merchandise for students who want to make a statement.
              </p>
            </div>

            {/* Shop */}
            <div>
              <p className="font-semibold text-white mb-4">Shop</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#products" className="hover:text-white transition">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#deals" className="hover:text-white transition">
                    Bundle Deals
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <p className="font-semibold text-white mb-4">Support</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <p className="font-semibold text-white mb-4">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 transition flex items-center justify-center text-white"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 transition flex items-center justify-center text-white"
                >
                  @
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 transition flex items-center justify-center text-white"
                >
                  in
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-center text-sm text-white/70">
              © 2024 COLLEG. All rights reserved. Made for students, by students.
            </p>
          </div>
        </div>
      </footer>

      {/* Cart Slide-in Panel */}
      {showCart && (
        <div
          className="fixed inset-0 z-40 bg-black/50 animate-fade-in"
          onClick={() => setShowCart(false)}
        />
      )}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white z-50 card-shadow-lg transition-transform duration-300 flex flex-col ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">Shopping Cart</h2>
          <button
            onClick={() => setShowCart(false)}
            className="p-2 hover:bg-background rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-background rounded-xl"
            >
              <div>
                <p className="font-semibold text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  Qty: {item.quantity}
                </p>
              </div>
              <p className="font-bold text-primary">₹{item.price}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border p-6 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-foreground font-semibold">Total:</p>
            <p className="text-2xl font-bold text-primary">₹{cartTotal}</p>
          </div>
          <button className="btn-primary w-full">Proceed to Checkout</button>
          <button
            onClick={() => setShowCart(false)}
            className="w-full py-3 border-2 border-border text-foreground rounded-xl font-semibold hover:bg-background transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
