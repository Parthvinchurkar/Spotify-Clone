import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSong: null,
  isPlaying: false,
  likedSongs: [],
  playlists: [],
  notification: null,
  isShuffle: false,
  isRepeat: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload;
      state.isPlaying = true;
    },

    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },

    toggleLike: (state, action) => {
      const exists = state.likedSongs.find(
        (s) => s.id === action.payload.id
      );

      if (exists) {
        state.likedSongs = state.likedSongs.filter(
          (s) => s.id !== action.payload.id
        );
        state.notification = "Song removed from Liked";
      } else {
        state.likedSongs.push(action.payload);
        state.notification = "Song added to Liked";
      }
    },

    toggleShuffle: (state) => {
      state.isShuffle = !state.isShuffle;
    },

    toggleRepeat: (state) => {
      state.isRepeat = !state.isRepeat;
    },

    addPlaylist: (state, action) => {
      state.playlists.push({
        name: action.payload,
        songs: [],
      });
      state.notification = "Playlist Created";
    },

    addToPlaylist: (state, action) => {
      const { playlistName, song } = action.payload;

      const playlist = state.playlists.find(
        (p) => p.name === playlistName
      );

      if (!playlist) return;

      const exists = playlist.songs.find(
        (s) => s.id === song.id
      );

      if (!exists) {
        playlist.songs.push(song);
        state.notification = "Song added to Playlist";
      }
    },

    clearNotification: (state) => {
      state.notification = null;
    },
  },
});

export const {
  setActiveSong,
  togglePlay,
  toggleLike,
  toggleShuffle,
  toggleRepeat,
  addPlaylist,
  addToPlaylist,
  clearNotification,
} = playerSlice.actions;

export default playerSlice.reducer;