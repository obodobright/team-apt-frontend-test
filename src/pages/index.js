import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Product } from "@/components/product";
import { Analytics } from "@/components/Analytics";
import { Services } from "@/components/Services";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <nav className="m-2">
        <Navbar />
      </nav>
      <Hero />
      <Services />
      <Analytics />
      <Product />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
