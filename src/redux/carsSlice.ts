import { createSlice } from "@reduxjs/toolkit";

type car = {
  id: number;
  brand: string;
  model: string;
  price: number;
  image: string;
  details: { id: number; color: string; image: string }[];
};

const initialState: car[] | any[] = [];

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setData: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setData } = carsSlice.actions;
export default carsSlice.reducer;
