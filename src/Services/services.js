import axios from "axios";

export const signupServices = async (username, password, name) =>
  await axios.post("/api/auth/signup", { username, password, name });

export const loginServices = async (username, password) => {
  console.log(username, password, "services");
  return await axios.post("/api/auth/login", { username, password });
};
