import { Award, Zap, Headphones, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "100% premium materials with attention to every detail",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround with reliable shipping to your campus",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Friendly customer support ready to help anytime",
  },
  {
    icon: Sparkles,
    title: "Exclusive Designs",
    description: "Unique college-inspired designs not found elsewhere",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="why-us"
      className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-primary/5"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Students Love Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just selling merchandise—we're building a community.
            Quality, authenticity, and student-centric service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
