export interface GetAllProductDto {
  pid:      number;
  name:     string;
  imageUrl: string;
  price:    number;
  hasStock: boolean;
  category: string;
}

export interface ProductDetailsDto {
  pid:         number;
  name:        string;
  description: string;
  imageUrl:    string;
  price:       number;
  stock:       number;
  category:    string;
}
