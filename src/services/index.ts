import axios from "axios";

export const API = "https://cars-fake-api.herokuapp.com/cars";

const getCarsData = async () => {
  return axios.get(API).then((response) => response.data);
};

export default getCarsData;
