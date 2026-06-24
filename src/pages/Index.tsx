import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Promo from "@/components/Promo";
import Pricing from "@/components/Pricing";
import OrderForm from "@/components/OrderForm";
import FAQ from "@/components/FAQ";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Promo />
      <Pricing />
      <HowItWorks />
      <OrderForm />
      <FAQ />
      <Footer />
      <CookieBanner />
    </main>
  );
};

export default Index;