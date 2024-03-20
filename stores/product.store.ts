import { getProducts } from "./../services/api/product-api.service";
import { FetchingStatus } from "./../types/enums/FetchingStatus";
import { TProduct } from "./../types/product.type";

export const useProductStore = defineStore("product", () => {
  const products = ref<TProduct[]>([]);
  const fetchingStatus = ref<FetchingStatus>(FetchingStatus.init);
  const api = useApi();
  const setLoading = (status: FetchingStatus) => {
    fetchingStatus.value = status;
  };
  const isLoading = () => {
    return FetchingStatus.value === FetchingStatus.fetching;
  };
  const loadProducts = async () => {
    setLoading(FetchingStatus.fetching);
    try {
      const res = await api.getProducts();
      products.value = res;
    } catch (error) {
      products.value = [];
    } finally {
      setLoading(FetchingStatus.success);
    }
  };
  return {
    products,
    loadProducts,
    isLoading,
  };
});
