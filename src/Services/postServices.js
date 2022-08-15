import axios from "axios";

export const getAllPostServices = async () => await axios.get("/api/posts");

export const getUserPostServices = async (username) =>
  await axios.get(`/api/posts/user/${username}`);

export const addUserPostServices = async (postData, token) =>
  await axios.post(
    "/api/posts",
    {
      postData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
