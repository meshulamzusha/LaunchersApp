import { useForm } from "react-hook-form";
import { LoginFormValues } from "../types/auth.types";
import { useAuthStore } from "../stores/auth.store";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate()
  const onSubmit = async (inputs: LoginFormValues) => {
    await login(inputs)
    const token = localStorage.getItem("token")
    if(token) {
        navigate("/launchers")
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="username"
        {...register("username", { required: "Name is required" })}
      />
      {errors.username && <span>{errors.username.message}</span>}
      <input
        placeholder="username"
        {...register("password", { required: "Name is required" })}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <input type="submit"/>
    </form>
  );
};

export default LoginForm;
