import { Op } from "sequelize";
import { kResultOk } from "~/server/constants";
import product from "~/server/models/product.model";

export default defineEventHandler(async (event) => {
  const keyword = getRouterParam(event, "keyword") || "";
  const keyWordDecoded = decodeURIComponent(keyword);
  const result = await product.findAll({
    where: {
      name: {
        [Op.like]: `%${keyWordDecoded}%`,
      },
    },
  });
  return {
    result: kResultOk,
    data: result,
  };
});
