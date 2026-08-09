import { useForm, type SubmitHandler } from "react-hook-form";
import { Eye } from "lucide-react";
import { registerUser } from "../../lib/api/auth";
import { useState } from "react";

type Inputs = {
  fullname: string;
  email: string;
  password: string;
  role: "CANDIDATE" | "RECRUITER";
};
type CreateProps = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateAccountForm({ setIsLogin }: CreateProps) {
  const [role, setRole] = useState<string>("Candidate");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await registerUser(data);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(watch("fullname")); // watch input value by passing its name
  function handleRole(role: string) {
    setRole(role);
  }
  return (
    <form
      className="my-10 flex flex-col h-70 w-full gap-7 items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* <div className="mb-5">
  <label className="mb-2 block text-sm font-medium text-gray-700">
    Role
  </label>

  <select
    {...register("role", { required: "Role is required" })}
    className="w-60 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm"
  >
    <option value="">Select Role</option>
    <option value="CANDIDATE">Candidate</option>
    <option value="RECRUITER">Recruiter</option>
  </select>
</div> */}
      <div className="w-1/3 bg-gray-200 flex flex-col items-center justify-center">
        <div
          {...register("role", { required: "Role is required" })}
          className="bg-blue-200 h-12 w-70 border-0 my-4 rounded-md flex flex-row items-center justify-center "
        >
          <button
            onClick={() => handleRole("Candidate")}
            className={`text-black h-9 w-33 ${role === "Candidate" ? "bg-white" : "bg-blue-200"} border-0 rounded-md shadow-2xl`}
          >
            Candidate
          </button>
          <button
            onClick={() => handleRole("Recruiter")}
            className={`text-black h-9 w-33 ${role === "Recruiter" ? "bg-white" : "bg-blue-200"} border-0 rounded-md shadow-2xl`}
          >
            Recruiter
          </button>
        </div>
      </div>
      <div className="">
        <label
          htmlFor="text"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          className="w-60 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          // className="h-8 bg-white w-60  border-0 border-gray-400 shadow-2xl rounded-md"
          {...register("fullname", { required: "Full name is required" })}
          placeholder="Full Name"
        />
      </div>
      <div className="">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Work Email
        </label>
        <input
          type="email"
          className="w-60 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          // className="h-8 bg-white w-60  border-0 border-gray-400 shadow-2xl rounded-md"
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
        />
      </div>

      {/* include validation with required or other standard HTML validation rules */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Security Password
        </label>

        <div className="relative">
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="••••••••"
            className="w-60 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <Eye
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
          />
        </div>
      </div>
      {/* errors will return when field validation fails  */}
      {errors.fullname && (
        <span className="text-sm text-red-600">{errors.fullname.message}</span>
      )}
      {errors.email && (
        <span className="text-sm text-red-600">{errors.email.message}</span>
      )}
      {errors.password && (
        <span className="text-sm text-red-600">{errors.password.message}</span>
      )}

      <input
        // className="h-8 bg-blue-300 hover:bg-blue-400 w-60 border-0 border-gray-400 shadow-2xl rounded-md"
        className="w-60 rounded-xl border border-gray-300 bg-blue-300 hover:bg-blue-400 px-4 py-3 text-sm  focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        type="submit"
        value="Create Account"
      />
      <div className="flex flex-row">
        <h1>Already have an account?</h1>
        <button
         type="button"
          onClick={() => setIsLogin(true)}
          className=" text-blue-500   hover:text-blue-700 hover:border-b-2 hover:border-blue-700"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
