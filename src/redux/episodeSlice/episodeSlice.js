import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const api = 'https://rickandmortyapi.com/api/episode?page=';

export const fetchEpisodes = createAsyncThunk(
  'episode/fetchEpisodes',
  async page => {
    const response1 = await axios.get(`${api}${page}`);
    return [...response1.data.results];
  },
);

export const episodeSlice = createSlice({
  name: 'episode',
  initialState: {
    episodes: [],
    loading: false,
    error: null,
    page: 1,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: {
    [fetchEpisodes.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchEpisodes.fulfilled]: (state, action) => {
      state.episodes = [...state.episodes, ...action.payload];
      state.loading = false;
      state.page += 1;
      if (action.payload.length < 12) {
        state.hasNextPage = false;
      }
    },
    [fetchEpisodes.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default episodeSlice.reducer;
