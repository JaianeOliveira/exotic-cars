import axios from "axios";

export const API = "https://fake-cars-api.herokuapp.com/cars";

const getCarsData = async () => {
  return axios
    .get(API)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export default getCarsData;
