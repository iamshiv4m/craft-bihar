export type ProductCategory =
  | "madhubani"
  | "tikuli"
  | "wood"
  | "glass"
  | "bamboo"
  | "sujani"
  | "sikki"
  | "lac";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  images: string[];
  artisanId: string;
  inStock: boolean;
  dimensions?: {
    length: number;
    width: number;
    height: number;
    unit: "cm" | "inch";
  };
  weight?: {
    value: number;
    unit: "g" | "kg";
  };
  materials?: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductCategoryInfo {
  id: ProductCategory;
  name: string;
  description: string;
  image: string;
}

export interface ProductFilters {
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  sortBy?: "newest" | "price-low" | "price-high";
  search?: string;
}

export interface ProductPagination {
  page: number;
  limit: number;
  total: number;
}

export interface ProductResponse {
  products: Product[];
  pagination: ProductPagination;
}
