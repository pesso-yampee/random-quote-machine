import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { animeQuotesApi } from "./animeQuotesApi";

export const store = configureStore({
  reducer: {
    [animeQuotesApi.reducerPath]: animeQuotesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeQuotesApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
