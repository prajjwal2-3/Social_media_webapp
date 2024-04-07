import { createSlice, isAction, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  suggested: any;
}

const initialState: UserState = {
  suggested: null,
};

export const suggestionslice = createSlice({
  name: 'suggested',
  initialState:{
    suggesteduser:null,
    friends:null
  },
  reducers: {
    addsuggestedUser: (state, action: PayloadAction<any>) => {
      state.suggesteduser = action.payload;
    },
    addfriends: (state, action: PayloadAction<any>) => {
      state.friends = action.payload;
    },
    
  }
});

export const { addsuggestedUser,addfriends } = suggestionslice.actions;
export default suggestionslice.reducer;

