// Import Component
import Header from "../Components/Header/Header";
import Brands from "../Components/Brands/Brands";
import FeaturesBooks from "../Components/FeaturesBooks/FeaturesBooks";
import BestSellingBook from "../Components/BestSellingBook/BestSellingBook";
import PopularBooks from "../Components/PopularBooks/PopularBooks";


export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <FeaturesBooks/>
      <BestSellingBook/>
      <PopularBooks/>
    </>
  );
}
