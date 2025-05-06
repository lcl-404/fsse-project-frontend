import NavList from "../../components/common/NavList";
import ProductDetailContainer from "./component/ProductDetailContainer.tsx";
import BackToProductsNav from "./component/BackToProductsNav.tsx";
import Footer from "../../components/common/Footer";


export default function ProductDetail() {

  return (
    <div className="bg-oyster dark:bg-darkcyan min-h-screen flex flex-col">
      <NavList/>
      <div className="flex-grow">
      <BackToProductsNav/>
      <ProductDetailContainer/>
      </div>
      <Footer/>
    </div>
  )
}