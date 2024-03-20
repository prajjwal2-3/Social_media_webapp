import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: any;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null
  },
  reducers: {
    addUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    }
  }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

