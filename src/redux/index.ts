import { configureStore } from "@reduxjs/toolkit";

import carsSlice from "./carsSlice";

const store = configureStore({
  reducer: {
    cars: carsSlice,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
export default store;
