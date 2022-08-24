import axios from "axios";

export const signupServices = async (username, password, name) =>
  await axios.post("/api/auth/signup", { username, password, name });

export const loginServices = async (username, password) =>
  await axios.post("/api/auth/login", { username, password });

export const updateUserService = async (token, userData) =>
  await axios.post(
    "/api/users/edit",
    {
      userData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
