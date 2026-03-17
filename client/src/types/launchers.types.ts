export type Launcher = {
  _id: string;
  city: string;
  name: string;
  rocketType: "Shahab3" | "Fetah110" | "Radwan" | "Kheibar";
  latitude: number;
  longitude: number;
};

export type LaunchersState = {
  error: string;
  launchers: [];
  fetchLaunchers: () => Promise<void>;
  addLauncher: (launcher: Launcher) => Promise<void>;
  getById: (id: string) => Launcher | undefined
};

export type ComponentProps = {
  launcher: Launcher
}
