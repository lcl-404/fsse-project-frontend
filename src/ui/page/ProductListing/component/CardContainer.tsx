import {useEffect, useState} from "react";
import {GetAllProductDto} from "../../../../data/product.type.ts";
import LoadingContainer from "../../../components/common/LoadingContainer";
import * as ProductApi from "../../../../api/productApi.ts"
import ProductCard from "../../../components/common/product/ProductCard.tsx";

type CardContainerProps = {
  selectedCategory: string | null;
};

export default function CardContainer({ selectedCategory }: CardContainerProps) {
  const [getAllProductDtoList, setGetAllProductDtoList] = useState<GetAllProductDto[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getAllProduct = async () => {
    const responseData = await ProductApi.getAllProduct();
    setGetAllProductDtoList(responseData);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const renderProductGrid = () => {
    if (isLoading || !getAllProductDtoList) {
      return <LoadingContainer />;
    } else {
      const filteredProducts =
        !selectedCategory
          ? getAllProductDtoList
          : getAllProductDtoList.filter((dto) => dto.category === selectedCategory);

      return (
        <div className="flex flex-wrap gap-6 p-6 w-full max-w-7xl">
          {filteredProducts.map((dto) => (
            <div key={dto.pid} className="flex-grow-0 flex-shrink-0 basis-[250px]">
              <ProductCard getAllProductDto={dto} />
            </div>
          ))}
        </div>
      );
    }
  };

  return <div className="flex justify-center">{renderProductGrid()}</div>;
}
