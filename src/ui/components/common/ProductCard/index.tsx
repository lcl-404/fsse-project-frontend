import {Link} from "@tanstack/react-router";
import {GetAllProductDto} from "../../../../data/product.type.ts";

type Props = {
  getAllProductDto: GetAllProductDto
}


export default function ProductCard({ getAllProductDto }: Props) {
  return (
    <div className="card bg-base-100 w-72 shadow-sm h-full flex flex-col"> {/* Added flex container */}
      <figure className="h-64 overflow-hidden"> {/* Fixed image container height */}
        <img
          src={getAllProductDto.imageUrl}
          alt="Product"
          className="w-full h-full object-cover" /* Ensures image fills container */
        />
      </figure>
      <div className="card-body flex-grow flex flex-col"> {/* Flex column layout */}
        <h2 className="card-title line-clamp-2 h-16"> {/* Fixed title height with line clamping */}
          {getAllProductDto.name}
        </h2>
        <p className="text-lg my-2">${getAllProductDto.price.toLocaleString()}</p>
        <div className="card-actions justify-end mt-auto"> {/* Pushes button to bottom */}
          <Link to="/products/$pid" params={{pid: getAllProductDto.pid.toString()}}>
          <button className="btn bg-lightyellow text-newblue dark:bg-cyanblue w-full"> {/* Full width button */}
              Shop
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}