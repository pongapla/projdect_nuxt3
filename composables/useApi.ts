import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByKeyword,
} from "./../services/api/product-api.service";
import { login, register } from "../services/api/auth-api.service";

export const useApi = () => {
  return {
    login,
    register,
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductByKeyword,
  };
};
