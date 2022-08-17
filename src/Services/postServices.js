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

export const addBookMarkServices = async (postId, token) =>
  await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const removeBookMarkServices = async (postId, token) =>
  await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const addCommentServices = async (postId, commentData, token) =>
  await axios.post(
    `/api/comments/add/${postId}`,
    {
      commentData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const editCommentServices = async (
  postId,
  commentId,
  commentData,
  token
) =>
  await axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    {
      commentData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteCommentServices = async (postId, commentId, token) =>
  await axios.delete(`/api/comments/delete/${postId}/${commentId}`, {
    headers: {
      authorization: token,
    },
  });
