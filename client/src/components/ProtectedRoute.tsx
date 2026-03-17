import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/auth.store";
import { UserTypeProps } from "../types/auth.types";

export const ProtectedRoute = ({ allowedUserTypes }: UserTypeProps) => {
  const user = useAuthStore((state)=>state.user)

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (!allowedUserTypes.includes(user.userType)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};
