export const useFormRule = () => {
  return {
    rules: {
      name: [
        {
          required: true,
          message: "Please input name",
        },
      ],
      price: [
        {
          required: true,
          message: "Please input price",
        },
      ],
      stock: [
        {
          required: true,
          message: "Please input amount of stock",
        },
      ],
    },
  };
};
