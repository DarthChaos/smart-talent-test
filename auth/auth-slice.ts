import { AuthenticationResult } from "@azure/msal-common";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  surname: string;
  genre: "M" | "F" | "NB";
  docType: string;
  docNum: string;
  email: string;
  phone: string;
  role: "ADMIN" | "USER";
  password: string;
}

const initialUsers = [
  {
    name: "Admin",
    surname: "",
    genre: "M",
    docType: "CC",
    docNum: "123456789",
    email: "admin@admin.com",
    phone: "987654321",
    role: "ADMIN",
    password: "admin",
  },
  {
    name: "Jane",
    surname: "Doe",
    genre: "F",
    docType: "CC",
    docNum: "234567891",
    email: "jane.doe@example.com",
    phone: "876543219",
    role: "user",
    password: "j4n3",
  },
];

interface AuthSliceState {
  accountDetails: AuthenticationResult | null;
  activeUser: User | null;
}

interface SignInDTO {
  email: string;
  password: string;
}

const initialState: AuthSliceState = {
  accountDetails: null,
  activeUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // PayloadAction<AuthenticationResult>
    signIn: (state, action: PayloadAction<SignInDTO>) => {
      // state.accountDetails = action.payload;
      const user = initialUsers.find(
        ({ email }) => email === action.payload.email,
      );

      if (user && user?.password === action.payload.password)
        state.activeUser = user as User;
    },
    signOut: (state) => {
      state.accountDetails = null;
    },
    signUp: (_state, action: PayloadAction<User>) => {
      initialUsers.push(action.payload);
    },
  },
});

export const { signIn, signOut, signUp } = authSlice.actions;

export default authSlice.reducer;
