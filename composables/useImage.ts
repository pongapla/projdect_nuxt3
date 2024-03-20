import { imageUrl } from "./../utils/constants";
export const getFullImagePath = (image: string) => {
  console.log("TEST");
  return `${imageUrl}/${image}`;
};
