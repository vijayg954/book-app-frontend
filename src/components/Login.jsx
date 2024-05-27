import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Urlbase } from "./Urlbase";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post(`${Urlbase}/user/login`, userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("login successfully");
          setTimeout(() => {
            document.getElementById("my_modal_3").close();
            window.location.reload();
          }, 2000);
        }
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          alert("err-" + err.response.data.message);
        }
      });
  };
  return (
    <div className="text-white">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4  space-y-2">
              <span>Email</span>
              <br></br>
              <input
                type="email"
                placeholder="Enter  Your Email"
                className="w-80 px-3  rounded-md outline-none py-1"
                {...register("email", { required: true })}
              />{" "}
              <br></br>
              {errors.email && (
                <span className="text-sm text-red-500 ">
                  This field is required
                </span>
              )}
              <br></br> <span>password</span>
              <br></br>
              <input
                type="password"
                placeholder="Enter Your password"
                {...register("password", { required: true })}
                className="w-80 px-3  rounded-md outline-none py-1"
              />{" "}
              <br></br>
              {errors.password && (
                <span className="text-sm text-red-500 ">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex mt-4 justify-between">
              <button className="bg-pink-500 text-white rounded-md py-1 px-3 hover:bg-pink-700">
                Login
              </button>
              <p>
                Not registerd{" "}
                <Link
                  to="/signup"
                  className="underline cursor-pointer text-blue-500"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
