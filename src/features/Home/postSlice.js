import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllPostServices,
  getUserPostServices,
  addUserPostServices,
  addBookMarkServices,
  removeBookMarkServices,
  addCommentServices,
  editCommentServices,
  deleteCommentServices,
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

export const addComment = createAsyncThunk(
  "post/addComment",
  async ({ postId, commentData }, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("auth"))?.token;
      const response = await addCommentServices(postId, commentData, token);
      console.log(response);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const editComment = createAsyncThunk(
  "post/editComment",
  async ({ postId, commentId, commentData }, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("auth"))?.token;
      const response = await editCommentServices(
        postId,
        commentId,
        commentData,
        token
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "post/deleteComment",
  async ({ postId, commentId }, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("auth"))?.token;
      const response = await deleteCommentServices(postId, commentId, token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
    [addComment.pending]: (state) => {
      state.postStatus = "pending";
    },
    [addComment.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts;
    },
    [addComment.rejected]: (state) => {
      state.postStatus = "rejected";
    },
    [editComment.pending]: (state) => {
      state.postStatus = "pending";
    },
    [editComment.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts;
    },
    [editComment.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
    [deleteComment.pending]: (state) => {
      state.postStatus = "pending";
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts;
    },
    [deleteComment.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload.posts;
    },
  },
});

export const postReducer = postSlice.reducer;
