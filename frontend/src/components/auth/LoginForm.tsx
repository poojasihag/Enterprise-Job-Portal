import { useForm, type SubmitHandler } from "react-hook-form";
import { Eye } from "lucide-react";
import { loginApi } from "../../lib/api/auth";

type Inputs = {
  email: string;
  password: string;
};

type LoginProps = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginForm({ setIsLogin }: LoginProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
  try {
    const response = await loginApi(data);

    console.log("LOGIN SUCCESS:", response.data);

    const token = response.data.token;

    localStorage.setItem("token", token);
  } catch (error: any) {
    console.log("LOGIN ERROR:", error.response?.data);
  }
};

  console.log(watch("email"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Work Email
        </label>

        <input
          id="email"
          type="email"
          className="w-60 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="@Email"
          {...register("email", {
            required: "Email is required",
          })}
        />

        {errors.email && (
          <span className="text-sm text-red-600">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Security Password
        </label>

        <div className="relative">
          <input
            type="password"
            placeholder="••••••••"
            className="w-60 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            {...register("password", {
              required: "Password is required",
            })}
          />

          <Eye
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
          />
        </div>

        {errors.password && (
          <span className="text-sm text-red-600">
            {errors.password.message}
          </span>
        )}
      </div>

      <input
        className="w-60 rounded-xl border border-gray-300 bg-blue-300 px-4 py-3 text-sm hover:bg-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        type="submit"
        value="Login"
      />

      <div className="flex flex-row">
        <h1>New to the platform?</h1>

        <button
          type="button"
          onClick={() => setIsLogin(false)}
          className="text-blue-500 hover:border-b-2 hover:border-blue-700 hover:text-blue-700"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}