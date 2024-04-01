import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../../createAppSlice";

export interface DrinksSliceState {
  drinksOrdered: string[];
}

const initialState: DrinksSliceState = {
  drinksOrdered: [],
};

export const drinksSlice = createAppSlice({
  name: "drinks",
  initialState,
  reducers: (create) => ({
    orderDrinks: create.reducer((state, action: PayloadAction<string[]>) => {
      state.drinksOrdered = action.payload;
    }),
  }),

  selectors: {
    selectDrinksOrdered: (counter) => counter.drinksOrdered,
  },
});

export const { orderDrinks } = drinksSlice.actions;

export const { selectDrinksOrdered } = drinksSlice.selectors;
