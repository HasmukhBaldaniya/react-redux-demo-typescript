export interface Product {
  readonly id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface Params {
  page: number;
  limit: number;
}
