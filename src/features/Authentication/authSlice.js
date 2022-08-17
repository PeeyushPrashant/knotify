import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signupServices, loginServices } from "../../Services/services";

const initialState = {
  user: JSON.parse(localStorage.getItem("auth"))?.user,
  token: JSON.parse(localStorage.getItem("auth"))?.token,
  isLoading: false,
};

export const handleLogin = createAsyncThunk(
  "auth/handleLogin",
  async ({ username, password }, setLogin, thunkAPI) => {
    try {
      const response = await loginServices(username, password);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Email/Username or Password is incorrect"
      );
    }
  }
);

export const handleSignup = createAsyncThunk(
  "auth/handleSignup",
  async ({ username, password, name }, thunkAPI) => {
    try {
      const response = await signupServices(username, password, name);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "User Already exist with entered credentials"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOutHandler: (state) => {
      localStorage.removeItem("auth");
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: {
    [handleSignup.pending]: (state) => {
      state.isLoading = true;
    },
    [handleSignup.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.createdUser;
      state.token = action.payload.encodedToken;
      localStorage.setItem(
        "auth",
        JSON.stringify({
          token: action.payload.encodedToken,
          user: action.payload.createdUser,
        })
      );
    },
    [handleSignup.rejected]: (state) => {
      state.isLoading = false;
    },
    [handleLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [handleLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.foundUser;
      state.token = action.payload.encodedToken;
      localStorage.setItem(
        "auth",
        JSON.stringify({
          token: action.payload.encodedToken,
          user: action.payload.foundUser,
        })
      );
    },
    [handleLogin.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { logOutHandler } = authSlice.actions;
