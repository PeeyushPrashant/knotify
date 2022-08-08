import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signupServices, loginServices } from "../../Services/services";

const initialState = {
  user: JSON.parse(localStorage.getItem("auth"))?.user,
  token: JSON.parse(localStorage.getItem("auth"))?.token,
  isLoading: false,
};

export const handleLogin = createAsyncThunk(
  "auth/handleLogin",
  async ({ username, password }, thunkAPI) => {
    try {
      console.log(username, password, "authSlice");
      const response = await loginServices(username, password);
      console.log(response.data);
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
  extraReducers: {
    [handleSignup.pending]: (state) => {
      state.isLoading = true;
    },
    [handleSignup.fulfilled]: (state, action) => {
      console.log(action.payload);
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
      console.log(action.payload);
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
    [handleLogin.fulfilled]: (state) => {
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
