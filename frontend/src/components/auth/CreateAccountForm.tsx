import { useForm, type SubmitHandler } from "react-hook-form";
import {  Eye } from "lucide-react";


type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function CreateAccountForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing its name

  return (
    <form
      className="my-10 flex flex-col h-70 w-full gap-7 items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* register your input into the hook by invoking the "register" function */}
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
          placeholder="Full Name"
          {...register("example")}
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
          placeholder="@Email"
          {...register("example")}
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
      {errors.exampleRequired && <span>This field is required</span>}

      <input
        // className="h-8 bg-blue-300 hover:bg-blue-400 w-60 border-0 border-gray-400 shadow-2xl rounded-md"
        className="w-60 rounded-xl border border-gray-300 bg-blue-300 hover:bg-blue-400 px-4 py-3 text-sm  focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        type="submit"
      />
      <div className="flex flex-row">
        <h1>Already have an account?</h1>
        <button className="text-blue-500   hover:text-blue-700 hover:border-b-2 hover:border-blue-700">
          Sign In
        </button>
      </div>
    </form>
  );
}
