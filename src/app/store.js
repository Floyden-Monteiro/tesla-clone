import { configureStore } from '@reduxjs/toolkit';
import CarReducer from "../features/car/carSlice"

export const store = configureStore({
  reducer: {
    car: CarReducer,
  },
});
