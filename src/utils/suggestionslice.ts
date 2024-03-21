import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  suggested: any;
}

const initialState: UserState = {
  suggested: null,
};

export const suggestionslice = createSlice({
  name: 'suggested',
  initialState:{
    suggesteduser:null
  },
  reducers: {
    addsuggestedUser: (state, action: PayloadAction<any>) => {
      state.suggesteduser = action.payload;
    },
    
  }
});

export const { addsuggestedUser } = suggestionslice.actions;
export default suggestionslice.reducer;

