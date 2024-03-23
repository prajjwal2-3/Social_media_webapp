import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  post: any;
}

const initialState: UserState = {
  post: null,
};

export const postslice = createSlice({
  name: 'Post',
  initialState:{
    postlist:null
  },
  reducers: {
    addpostlist: (state, action: PayloadAction<any>) => {
      state.postlist = action.payload;
    },
    
  }
});

export const { addpostlist } = postslice.actions;
export default postslice.reducer;

