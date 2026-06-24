import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Promo from "@/components/Promo";
import Pricing from "@/components/Pricing";
import OrderForm from "@/components/OrderForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Promo />
      <Pricing />
      <OrderForm />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;