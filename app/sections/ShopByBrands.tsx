import Image from "next/image";
import Link from "next/link";

const ShopByBrand = () => {
  const brands = [
    { name: "Dior", image: "/pef1.jpg", link: "/brands/dior" },
    { name: "Chanel", image: "/pef2.jpg", link: "/brands/chanel" },
    { name: "Gucci", image: "/pef1.jpg", link: "/brands/gucci" },
    { name: "Tom Ford", image: "/pef2.jpg", link: "/brands/tomford" },
    { name: "Armani", image: "/pef1.jpg", link: "/brands/armani" },
    // Add more brands as needed
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Discover Fragrances by Iconic Brands
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Explore timeless scents from world-renowned perfumeries. Select your
          favorite brand to dive into their signature collections.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
          {brands.map((brand, index) => (
            <Link key={index} href={brand.link} className="group">
              <div className="w-28 h-28 relative flex items-center justify-center border border-gray-300 rounded-full bg-white shadow-sm hover:shadow-lg hover:scale-105 transition">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 100px"
                  className="object-contain p-4"
                />
              </div>
              <p className="mt-2 text-gray-700 group-hover:text-blue-600 font-medium">
                {brand.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByBrand;
