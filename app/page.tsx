import ProductDisplay from "./sections/ProductDisplay";
import HeroSection from "./sections/HeroSection";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductDisplay />
    </>
  );
}
