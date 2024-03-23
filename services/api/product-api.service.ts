import { CreateProductDto } from "~/types/dtos/create-product.dto";
import { TProduct } from "./../../types/product.type";
import { server } from "./../../utils/constants";
import { useFetcher } from "./../../composables/useFetcher";

const { fetch } = useFetcher();

export const getProducts = async (): Promise<TProduct[]> => {
  try {
    const result = await fetch(server.PRODUCT_URL);
    return result;
  } catch (error) {
    product.value = [];
  }
};

export const getProductById = async (id: string) => {
  const result = await fetch(`${server.PRODUCT_URL}/${id}`);
  return result;
};

export const createProduct = async (product: CreateProductDto) => {
  const result = await fetch(server.PRODUCT_URL, {
    method: POST,
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return result;
};

export const updateProduct = async (id: string, product: updateProductDto) => {
  const result = await fetch(`${server.PRODUCT_UROL}/${id}`, {
    method: PUT,
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(stock),
  });
  return result;
};

export const deleteProduct = async (id: string) => {
  const result = await fetch(`${server.PRODUCT_URL}/${id}`, {
    method: "DELETE",
  });
  return result;
};

export const getProductByKeyword = async (keyword: string) => {
  const result = await fetch(`${server.PRODUCT_URL}/name/${keyword}`);
  return result;
};
