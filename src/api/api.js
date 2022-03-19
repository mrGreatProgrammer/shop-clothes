import axios from "axios";

const baseUrl = "http://localhost:4000";

const instance = axios.create({
  withCredentials: true,
  headers: { Authorization: `${localStorage.getItem("token")}` },
});

export const authAPI = {
  signup(name, second_name, email, password, gender) {
    return axios.post(`${baseUrl}/signup`, {
      name,
      second_name,
      email,
      password,
      gender,
    });
  },
  login(email, password) {
    return axios.post(`${baseUrl}/login`, {
      email,
      password,
    });
  },
};
