import {configureStore} from '@reduxjs/toolkit';
import episodeSlice from './episodeSlice/episodeSlice';

export const store = configureStore({
  reducer: {
    episode: episodeSlice,
  },
});
