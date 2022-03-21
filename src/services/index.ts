import axios from "axios";

// export const API = "https://cars-fake-api.herokuapp.com";

export const API = "https://cars-api-json.herokuapp.com/cars";

// const getCarsData = async () => {
//   return axios.get(`${API}/cars`).then((response) => response.data);
// };

const getCarsData = async () => {
  return axios.get(API).then((response) => {
    console.log(response.data);
    return response.data;
  });
};
export { getCarsData };
