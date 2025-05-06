import axios from "axios";
import {getAuthConfig} from "../authService/FirebaseAuthService.ts";
import {CartItemDto} from "../data/cartItem.type.ts";

const baseUrl = "http://localhost:8080"

export async function getUserCart() {
  const response = await axios.get<CartItemDto[]>(
    `${baseUrl}/cart/items`,
    await getAuthConfig()
  )
  return response.data;
}

export async function putCartItem (pid:number, quantity:number){
  try {
    const response = await axios.put(`${baseUrl}/cart/items/${pid}/${quantity}`,
      undefined,
      await getAuthConfig())
    return response.data;
  } catch (err) {
    console.log(err)
    throw err;
  }
}

export async function patchCartItem (pid:number, quantity:number){
  try {
    await axios.patch(`${baseUrl}/cart/items/${pid}/${quantity}`,
      undefined,
      await getAuthConfig());
  } catch (err) {
    console.log(err)
    throw err;
  }
}

export async function deleteCartItem(pid:number) {
  try{
    await axios.delete(`${baseUrl}/cart/items/${pid}`,
      await getAuthConfig());
  }catch (err){
    console.log(err);
    throw (err);
  }
}