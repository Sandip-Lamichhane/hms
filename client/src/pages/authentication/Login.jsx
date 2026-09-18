
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="min-h-screen w-full bg-[#f7faf7] flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#2f3e34]">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Login to your Health Hub account
          </p>
        </div>

        <form className="space-y-5">

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#4ca568] focus:ring-2 focus:ring-[#dcefe0]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#4ca568] focus:ring-2 focus:ring-[#dcefe0]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#4ca568] py-3 font-medium text-white transition hover:bg-[#3f9158]"
          >
            Log In
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-[#4ca568] hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </section>
  );
}

