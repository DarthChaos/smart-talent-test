import { AuthenticationResult } from "@azure/msal-common";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthSliceState {
  accountDetails: AuthenticationResult | null;
}

const initialState: AuthSliceState = {
  accountDetails: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<AuthenticationResult>) => {
      state.accountDetails = action.payload;
    },
    signOut: (state) => {
      state.accountDetails = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
