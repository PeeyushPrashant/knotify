import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllPostServices,
  getUserPostServices,
  addUserPostServices,
} from "../../Services/postServices";

const initialState = {
  allPosts: [],
  userPosts: [],
  postStatus: "",
};

export const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (_, thunkAPI) => {
    try {
      const response = await getAllPostServices();
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserPost = createAsyncThunk(
  "post/getUserPost",
  async (username, thunkAPI) => {
    try {
      const response = await getUserPostServices(username);
      return response.data.posts;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const addUserPost = createAsyncThunk(
  "post/addUserPost",
  async (postData, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("auth"))?.token;
      console.log(postData);
      const response = await addUserPostServices(postData, token);
      console.log(response);
      return response.data.posts;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.postStatus = "pending";
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload;
    },
    [getAllPosts.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
    [getUserPost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [getUserPost.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.userPosts = action.payload;
    },
    [getUserPost.rejected]: (state) => {
      state.postStatus = "rejected";
    },
    [addUserPost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [addUserPost.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload;
    },
    [addUserPost.rejected]: (state) => {
      state.postStatus = "rejected";
    },
  },
});

export const postReducer = postSlice.reducer;
