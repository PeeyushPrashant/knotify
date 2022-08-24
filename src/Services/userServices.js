import axios from "axios";

export const getAllUsersServices = async () => await axios.get("/api/users");

export const unFollowUserService = async (token, userId) =>
  await axios.post(
    `/api/users/unfollow/${userId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const followUserService = async (token, userId) =>
  await axios.post(
    `/api/users/follow/${userId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
