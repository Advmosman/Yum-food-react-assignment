import { sleep } from "@/utils";
import { calculatedPrice } from "./product";
import {
  categoriesData,
  dishesData,
  orderHistoryData,
} from "@/assets/data";

export const getFilteredProducts = (filter) => {
  const products = dishesData;
  filter = filter ?? {};
  return products.filter((dish) => {
    return !(
      (filter.categories &&
        !!filter.categories.length &&
        !filter.categories.includes(dish.category_id)) ||
      (filter.restaurants &&
        !!filter.restaurants.length &&
        !filter.restaurants.includes(dish.restaurant_id)) ||
      (filter.minPrice && !(calculatedPrice(dish) >= filter.minPrice)) ||
      (filter.maxPrice && !(calculatedPrice(dish) <= filter.maxPrice)) ||
      (filter.search &&
        !dish.name.toLowerCase().includes(filter.search.toLowerCase())) ||
      (filter.rating && !(dish.review.stars >= filter.rating))
    );
  });
};

export const getAllDishes = async () => {
  // You can fetch your products from your server here
  await sleep(200);
  return dishesData;
};

export const getAllCategories = async () => {
  // You can fetch data from your server here
  await sleep(200);
  return categoriesData;
};




export const getDishById = async (id) => {
  // You can fetch data from your server here
  await sleep(200);
  const dish = dishesData.find((dish) => dish.id == id);
  return dish;
};

export const getCategoryById = async (id) => {
  // You can fetch data from your server here
  await sleep(200);
  return categoriesData.find((category) => category.id == id);
};





export const getOrderById = async (id) => {
  // You can fetch data from your server here
  await sleep(200);
  return orderHistoryData.find((order) => order.id == id);
};

// export const getOrderHistoryById = async (id) => {
  // You can fetch data from your server here
//   await sleep(200);
//   return orderHistoryData.find((order) => order.id == id);
// };
