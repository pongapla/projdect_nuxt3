import { getProducts } from "./../services/api/product-api.service";
import { FetchingStatus } from "./../types/enums/FetchingStatus";
import { TProduct } from "./../types/product.type";

export const useProductStore = defineStore("product", () => {
  const products = ref<TProduct[]>([]);
  const autoCompleteOptions = ref([]);
  const fetchingStatus = ref<FetchingStatus>(FetchingStatus.init);
  const api = useApi();
  const setLoading = (status: FetchingStatus) => {
    fetchingStatus.value = status;
  };
  const isLoading = () => {
    return FetchingStatus.value === FetchingStatus.fetching;
  };
  const debouncedSearch = async (search: string) => {
    setLoading(FetchingStatus.fetching);

    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      if (search) {
        const result = await api.getProductByKeyword(search);
        products.value = result.data;
        autoCompleteOptions.value = result.data.map((product: any) => ({
          value: product.name,
        }));
      } else {
        await loadProducts();
      }
    } catch (error) {
    } finally {
      setTimeout(() => {
        setLoading(FetchingStatus.success);
      }, 500);
    }
  };
  const onSelect = async (value: any) => {
    setLoading(FetchingStatus.fetching);
    try {
      if (value) {
        const result = await api.getProductByKeyword(value);
        products.value = result.data;
      } else {
        await loadProducts();
      }
    } finally {
      setTimeout(() => {
        setLoading(FetchingStatus.success);
      }, 500);
    }
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
    autoCompleteOptions,
    products,
    loadProducts,
    isLoading,
    debouncedSearch,
  };
});
