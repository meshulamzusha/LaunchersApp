export type LoginFormValues = {
  username: string;
  password: string;
};

export type User = {
  _id: string;
  username: string;
  password: string;
  email: string;
  userType: UserType;
  lastLogin: string;
};

export type AuthStore = {
  error: string;
  token: string;
  user: User | null;
  login: (loginInputs: LoginFormValues) => Promise<void>;
};

export type UserType = "admin" | "air" | "intelligence";
export type UserTypeProps = {
  allowedUserTypes: UserType[];
};
