import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface HistoryState {
  history: any;
}

const initialState: HistoryState = {
  history: [],
};

const history = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<any>) => {
      if (state.history[0] !== action.payload) {
        state.history.unshift(action.payload);
      }
    },
  },
});

export const {addEvent} = history.actions;

export default history.reducer;
