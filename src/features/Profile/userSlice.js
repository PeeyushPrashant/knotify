import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsersServices } from "../../Services/userServices";
const initialState = {
  allUsers: [],
  userStatus: "",
};

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await getAllUsersServices();
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.userStatus = "pending";
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.userStatus = "fulfilled";
      state.allUsers = action.payload.users;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.userStatus = "rejected";
      state.allUsers = action.payload.users;
    },
  },
});

export const userReducer = userSlice.reducer;
