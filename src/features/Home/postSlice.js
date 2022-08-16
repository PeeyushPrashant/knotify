import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllPostServices,
  getUserPostServices,
  addUserPostServices,
  addBookMarkServices,
  removeBookMarkServices,
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
      const response = await addUserPostServices(postData, token);
      return response.data.posts;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const addAndRemoveBookmark = createAsyncThunk(
  "post/addAndRemoveBookmark",
  async ({ postId, isBookMark }, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("auth"))?.token;
      const response = isBookMark
        ? await addBookMarkServices(postId, token)
        : await removeBookMarkServices(postId, token);
      return response.data;
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
    [addAndRemoveBookmark.pending]: (state) => {
      state.postStatus = "pending";
    },
    [addAndRemoveBookmark.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts;
    },
    [addAndRemoveBookmark.rejected]: (state) => {
      state.postStatus = "rejected";
    },
  },
});

export const postReducer = postSlice.reducer;
