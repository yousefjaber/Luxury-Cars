import axios from "axios";
const BASE_URL = "https://6526d9f0917d673fd76d18b2.mockapi.io/LuxuryCars";
const request = async (method, endpoint, data = null) => {
  const res = await axios({
    method,
    url: `${BASE_URL}${endpoint}`,
    data,
  });
  return res.data;
};
export const getAllCars = async () => {
  return await request("get", "/");
};
export const getCar = async (carId) => {
  return await request("get", `/${carId}`);
};
export const updateCar = async (car, carId) => {
  return await request("put", `/${carId}`, car);
};
export const addCar = async (car) => {
  return await request("post", "/", car);
};
export const deleteCar = async (carId) => {
  return await request("delete", `/${carId}`);
};