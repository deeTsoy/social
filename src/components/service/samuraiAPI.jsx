import axios from "axios";

const API_BASE_URL = "https://social-network.samuraijs.com/api/1.0/";
const API_KEY = "608debec-2fbd-45b2-8e35-669afc3799b2";

const instance = axios.create({
  withCredentials: true,
  baseURL: API_BASE_URL,
  headers: {
    "API-KEY": API_KEY,
  },
});

const samuraiAPI = {
  async request(endpoint, method = "get", data = null) {
    try {
        return await instance[method](endpoint, data);
    } catch (error) {
      alert(`Failed to ${method} ${endpoint}: ${error.message}`);
      throw error;
    }
  },

  async getUsers(currentPage = 1, pageSize = 10) {
    return await this.request(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
        return response.data;
      });
  },

  async unFollow(id) {
    return await this.request(`follow/${id}`, "delete");
  },

  async follow(id) {
    return await this.request(`follow/${id}`, "post");
  },

  async auth() {
    return await this.request(`/auth/me`);
  },

  async getProfile(userId) {
    return await this.request(`/profile/${userId}`);
  },

  async getStatus(userId) {
    return await this.request(`profile/status/${userId}`);
  },

  async updateStatus(status) {
    return await this.request(`profile/status/`, "put", { status });
  },

  async logIn(email, password, rememberMe = false) {
    return await this.request("/auth/login", "post", { email, password, rememberMe });
  },

  async logOut() {
    return await this.request("/auth/login", "delete");
  },
  async updatePhoto(photo) {
    const formData = new FormData();
    formData.append('image', photo);
    return await this.request(`profile/photo/`, "put", { photo });
  },
};

export default samuraiAPI;
