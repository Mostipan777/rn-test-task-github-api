import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async function (props: Record<string, any>, {rejectWithValue}) {
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(
          props.text,
        )}`,
        {
          method: 'GET',
        },
      );
      if (!response.ok) {
        console.log(response);
        throw new Error('Server Error');
      }
      const data = await response.json();
      return data.items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const data = createSlice({
  name: 'data',
  initialState: {
    data: [],
    status: '',
    error: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.pending, state => {
      state.status = 'pending';
      state.error = '';
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload as string;
    });
  },
});

export default data.reducer;
