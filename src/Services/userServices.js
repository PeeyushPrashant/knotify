import axios from "axios";

export const getAllUsersServices = async () => await axios.get("/api/users");
