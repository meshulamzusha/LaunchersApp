import { create } from "zustand";
import { AuthStore, LoginFormValues } from "../types/auth.types";

export const useAuthStore = create<AuthStore>((set) => ({
  error: "",
  token: "",
  user: null,
  login: async (loginInputs: LoginFormValues) => {
    try {                
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginInputs),
      });

      const result = await res.json();

      if (result.ok) {
        set({ token: result.token, user: result.user });
        localStorage.setItem("token", result.token)
      } else {
        set({ error: result.message });
      }
    } catch (error) {
      console.log(error);
      set({ error: "something get wrong" });
    }
  },
}));
