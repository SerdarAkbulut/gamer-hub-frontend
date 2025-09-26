import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  gameId: number | null;
  gameName: string | null;
}

const initialState: GameState = {
  gameId: null,
  gameName: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGame: (
      state,
      action: PayloadAction<{ gameId: number; gameName: string }>
    ) => {
      state.gameId = action.payload.gameId;
      state.gameName = action.payload.gameName;
    },
    removeGame: (state) => {
      state.gameId = null;
      state.gameName = null;
    },
  },
});

export const { setGame, removeGame } = gameSlice.actions;
export default gameSlice;
