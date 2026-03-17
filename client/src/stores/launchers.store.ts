import { create } from "zustand";
import type { LaunchersState, Launcher } from "../types/launchers.types";

export const useLaunchers = create<LaunchersState>((set, get) => ({
  error: "",
  launchers: [],
  fetchLaunchers: async () => {
    try {
      const token = localStorage.getItem("token")
      const res = await fetch("http://localhost:3000/api/launchers",{
        headers: {"authorization":`Bearer ${token}`}
      });
      const result = await res.json();

      if (result.ok) {
        set({ launchers: result.launchers });
      }
      set({ error: result.message });
    } catch (error) {
      set({ error: "something gets wrang" });
    }
  },
  addLauncher: async () => {},
  getById: (id: string) => {
    return get().launchers.find((l: Launcher) => l._id == id);
  },
}));
