import { configureStore } from "@reduxjs/toolkit";
import { setColorSlice } from "./setColorSlice";
import { setQuoteSlice } from "./setQuoteSlice";

export const store = configureStore({
	reducer: {
		setColor: setColorSlice.reducer,
		setQuote: setQuoteSlice.reducer
	}
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
