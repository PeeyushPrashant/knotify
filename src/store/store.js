import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/Authentication/authSlice";
import { postReducer } from "../features/Home/postSlice";
import { userReducer } from "../features/Profile/userSlice";
import { postModalReducer } from "../features/Home/Modal/postModalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    user: userReducer,
    postModal: postModalReducer,
  },
});
