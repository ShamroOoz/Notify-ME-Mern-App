import React, { useState } from "react";
import { axioscall } from "../utils/AxiosInstance";
import { BookOpenIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogin }) => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");
  let navigate = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axioscall.post("/users/register", {
        username: user.name,
        email: user.email,
        password: user.password,
      });
      setUser({ name: "", email: "", password: "" });
      setErr(res.data.msg);
      navigate("/", { replace: true });
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axioscall.post("users/login", {
        email: user.email,
        password: user.password,
      });
      setUser({ name: "", email: "", password: "" });
      localStorage.setItem("tokenStore", res.data.token);
      setIsLogin(true);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };

  const [onLogin, setOnLogin] = useState(false);

  return (
    <section className="grid place-items-center h-screen">
      <div className={`container px-4 mx-auto ${onLogin ? "hidden" : "block"}`}>
        <div className="max-w-sm mx-auto">
          <div className="mb-6 text-center">
            <a className="inline-block mb-6" href="/">
              <BookOpenIcon className="h-16 text-green-500" />
            </a>
            <h3 className="mb-4 text-2xl md:text-3xl font-bold">
              Sign in to your account
            </h3>
            <p className="text-lg text-pink-500 font-medium">{err}</p>
          </div>
          <form onSubmit={loginSubmit}>
            <div className="mb-6">
              <label
                className="block mb-2 text-gray-800 font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-gray-900 border border-gray-200 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="email"
                placeholder="jhon@gamail.com"
                id="email"
                required
                name="email"
                value={user.email}
                onChange={onChangeInput}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-ray-800 font-medium"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-gray-900 border border-gray-200 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="password"
                placeholder="************"
                id="password"
                required
                name="password"
                value={user.password}
                autoComplete="true"
                onChange={onChangeInput}
              />
            </div>

            <button
              className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
              type="submit"
            >
              Sign In
            </button>
            <p className="text-center">
              <span className="text-xs font-medium">
                Don&rsquo;t have an account?
              </span>
              <button
                className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                type="button"
                onClick={() => setOnLogin(true)}
              >
                Sign up
              </button>
            </p>
          </form>
        </div>
      </div>

      <div className={`container px-4 mx-auto ${onLogin ? "block" : "hidden"}`}>
        <div className="max-w-sm mx-auto">
          <div className="mb-6 text-center">
            <a className="inline-block mb-6" href="/">
              <BookOpenIcon className="h-16 text-green-500" />
            </a>
            <h3 className="mb-4 text-2xl md:text-3xl font-bold">
              Sign up to your account
            </h3>
            <p className="text-lg text-pink-500 font-medium">{err}</p>
          </div>
          <form onSubmit={registerSubmit}>
            <div className="mb-6">
              <label
                className="block mb-2 text-gray-800 font-medium"
                htmlFor="name"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-gray-900 border border-gray-200 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="name"
                placeholder="jhon doe"
                id="name"
                required
                name="name"
                value={user.name}
                onChange={onChangeInput}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-gray-800 font-medium"
                htmlFor="rgemail"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-gray-900 border border-gray-200 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="email"
                placeholder="jhon@gamail.com"
                id="rgemail"
                required
                name="email"
                value={user.email}
                onChange={onChangeInput}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-gray-800 font-medium"
                htmlFor="rgpassword"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-gray-900 border border-gray-200 rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="password"
                placeholder="************"
                id="rgpassword"
                required
                name="password"
                value={user.password}
                autoComplete="true"
                onChange={onChangeInput}
              />
            </div>

            <button
              className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
              type="submit"
            >
              Sign up
            </button>
            <p className="text-center">
              <span className="text-xs font-medium">
                Already have a account?
              </span>
              <button
                className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                type="button"
                onClick={() => setOnLogin(false)}
              >
                Sign in
              </button>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
