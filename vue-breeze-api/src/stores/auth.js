import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => {
    authUser: null;
    authErrors: [];
    authStatus: null;
  },
  getters: {
    user: (state) => state.authUser,
    errors: (state) => state.authErrors,
    status: (state) => state.authStatus,
  },
  actions: {
    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
    },

    async getUser() {
      // get token first
      await this.getToken();

      //get user
      const res = await axios.get("api/user");
      this.authUser = res.data;
      console.log(res);
    },
    async handleLogin(data) {
      await this.getToken();

      this.authErrors = [];

      try {
        await axios.post("/login", {
          email: data.email,
          password: data.password,
        });
        this.router.push("/");
        this.authStatus = null;
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },

    async handleRegister(data) {
      await this.getToken();
      this.authErrors = [];
      try {
        await axios.post("/register", {
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        });
        this.router.push("/");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },

    async handleLogout() {
      await axios.post("/logout");
      this.authUser = null;
      this.router.push("/login");
    },
    async handleForgotPassword(email) {
      await this.getToken();
      this.authErrors = [];

      try {
        const response = await axios.post("/forgot-password", { email: email });
        this.authStatus = response.data.status;
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleResetPassword(resetData) {
      this.authErrors = [];
      try {
        const response = await axios.post("/reset-password", resetData);
        this.authStatus = response.data.status;
        this.router.push("/login");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
  },
});
