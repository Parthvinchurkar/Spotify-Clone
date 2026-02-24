import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "../features/songs/songsSlice";
import playerReducer from "../features/player/playerSlice";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    songs: songsReducer,
    player: playerReducer,
    theme: themeReducer,
  },
});