import {useEffect, useState} from "react";
import {GetAllProductDto} from "../../../../data/product.type.ts";
import LoadingContainer from "../../../components/common/LoadingContainer";
import * as ProductApi from "../../../../api/productApi.ts"
import Index from "../../../components/common/ProductCard";
import {useNavigate} from "@tanstack/react-router";

type CardContainerProps = {
  selectedCategory: string | null;
};


export default function CardContainer({ selectedCategory }: CardContainerProps) {
  const [getAllProductDtoList, setGetAllProductDtoList] = useState<GetAllProductDto[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate({from:"/"})


  const getAllProduct = async () => {
    try {
      const responseData = await ProductApi.getAllProduct();
      setGetAllProductDtoList(responseData);
      setIsLoading(false);
    } catch {
      navigate({to:"/error"})
    }
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
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-6 p-6 w-full max-w-7xl justify-start">
            {filteredProducts.map((dto) => (
              <div key={dto.pid} className="flex-grow-0 flex-shrink-0 basis-[250px]">
                <Index getAllProductDto={dto} />
              </div>
            ))}
          </div>
        </div>

      );
    }
  };

  return <div className="flex justify-center">
    {renderProductGrid()}
  </div>;
}
