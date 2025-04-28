import NavList from "../../components/common/NavList";
import ProductDetailContainer from "./component/ProductDetailContainer.tsx";
import BackToProductsNav from "./component/BackToProductsNav.tsx";


export default function ProductDetail() {

  return (
    <div className="bg-oyster h-screen">
      <NavList/>
      <BackToProductsNav/>
      <ProductDetailContainer/>
    </div>
  )
}