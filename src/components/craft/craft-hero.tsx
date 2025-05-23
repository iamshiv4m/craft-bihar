import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-bihar-cream to-white craft-pattern">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-stone-800 leading-tight">
            <span className="text-orange-600">Bihar</span> ka{" "}
            <span className="text-teal-700">Craft</span> <br />
            <span className="text-yellow-500">Duniya</span> ke{" "}
            <span className="text-orange-600">Haath</span>
          </h1>

          <p className="text-lg text-stone-600 max-w-lg">
            Bihar ki rich cultural heritage aur traditional crafts ko duniya se
            connect karne ka platform. Madhubani, Tikuli, Glass art aur bahut
            saare authentic handicrafts ek hi jagah par.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700"
            >
              <Link href="/crafts">Explore All Crafts</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50"
            >
              <Link href="/artisans">Meet The Artisans</Link>
            </Button>
          </div>
        </div>

        <div className="hidden sm:block md:w-1/2 relative animate-scale-in">
          <div className="rounded-lg overflow-hidden shadow-xl border-8 border-white rotate-3 transform hover:rotate-0 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1595828204607-96a8a3432d2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Bihar Handicrafts"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-lg overflow-hidden shadow-xl border-8 border-white -rotate-6 transform hover:rotate-0 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Bihar Handicrafts"
              className="w-72 h-48 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
