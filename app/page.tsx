import ProductDisplay from "./sections/ProductDisplay";
import HeroSection from "./sections/HeroSection";
import Navbar from "./component/Navbar";
import ShopByBrand from "./sections/ShopByBrands";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ShopByBrand />
      <ProductDisplay />
    </>
  );
}
