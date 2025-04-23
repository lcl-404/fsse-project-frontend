import axios from "axios";
import {GetAllProductDto} from "../data/product.type.ts";

const baseUrl = "http://localhost:8080"

export async function getAllProduct(){
  try {
    const response = await axios.get<GetAllProductDto[]>(`${baseUrl}/public/products`)
    return response.data
  }catch (err) {
    console.log(err);
    throw err;
  }
}