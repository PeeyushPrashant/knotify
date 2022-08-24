import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllUsersServices,
  unFollowUserService,
  followUserService,
} from "../../Services/userServices";
import { updateUser } from "../Authentication/authSlice";

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

export const followUnFollowUser = createAsyncThunk(
  "post/followUnFollowUser",
  async ({ userId, dispatch, isFollow }, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("auth"))?.token;
      const response = !isFollow
        ? await unFollowUserService(token, userId)
        : await followUserService(token, userId);
      dispatch(updateUser(response.data.user));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
    [followUnFollowUser.pending]: (state) => {
      state.userStatus = "pending";
    },
    [followUnFollowUser.fulfilled]: (state, action) => {
      state.userStatus = "fulfilled";
      state.allUsers = [...state.allUsers].map((user) => {
        if (action.payload.followUser.username === user.username) {
          return action.payload.followUser;
        }
        return user;
      });
    },
    [followUnFollowUser.rejected]: (state, action) => {
      state.userStatus = "rejected";
      state.allUsers = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
