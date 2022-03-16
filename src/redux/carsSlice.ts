import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type car = {
  id: number;
  brand: string;
  model: string;
  price: number;
  image: string;
  details: { id: number; color: string; image: string }[];
};

type Reducers = {
  setData: (state: car[], action: PayloadAction<car[]>) => void;
};

export const carsSlice = createSlice<car[], Reducers>({
  name: "cars",
  initialState: [],
  reducers: {
    setData: (state, action) => {
      state.splice(0, state.length);
      state.push(...action.payload);
    },
  },
});

export const { setData } = carsSlice.actions;
export default carsSlice.reducer;
