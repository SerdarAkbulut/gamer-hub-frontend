import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./token/tokenSlice";
import gameSlice from "./game/gameSlice";
import pageSlice from "./page/pageSlice";

export const store = configureStore({
  reducer: {
    token: tokenSlice.reducer,
    game: gameSlice.reducer,
    page: pageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
