import {configureStore} from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import historyReducer from './historySlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
