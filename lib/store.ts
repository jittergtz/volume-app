
import { configureStore } from '@reduxjs/toolkit';
import { deezerApi } from './services/apiFetch';
import playerReducer from './features/playerSlice';
import trackReducer from './features/trackSlice';



const store = configureStore({
  reducer: {
    [deezerApi.reducerPath]: deezerApi.reducer,
    player: playerReducer,
    track: trackReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(deezerApi.middleware),
});

export default store;

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
