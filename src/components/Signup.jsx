import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://bookapp-11m1.onrender.com/user/signup", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("signup successfully");

          document.getElementById("my_modal_3").close();
          window.location.reload();
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          alert("err-" + err.response.data.message);
        }
      });
  };
  return (
    <>
                    <Login></Login>

      <div className="flex justify-center items-center h-screen text-white bg-white">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4  space-y-2">
              <span>Full Name</span>
              <br></br>
              <input
                type="text"
                placeholder="Enter  Your Name"
                className="w-80 px-3  rounded-md outline-none py-1"
                {...register("fullname", { required: true })}
              />
              <br></br>{" "}
              {errors.fullname && (
                <span className="text-sm text-red-500 ">
                  This field is required
                </span>
              )}
              <br></br>
              <span>Email</span>
              <br></br>
              <input
                type="email"
                placeholder="Enter  Your Email"
                className="w-80 px-3  rounded-md outline-none py-1"
                {...register("email", { required: true })}
              />{" "}
              <br></br>{" "}
              {errors.email && (
                <span className="text-sm text-red-500 ">
                  This field is required
                </span>
              )}
              <br></br>
              <span>password</span>
              <br></br>
              <input
                type="password"
                placeholder="Enter Your password"
                className="w-80 px-3  rounded-md outline-none py-1"
                {...register("password", { required: true })}
              />{" "}
              <br></br>{" "}
              {errors.password && (
                <span className="text-sm text-red-500 ">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex mt-4 justify-between">
              <button className="bg-pink-500 text-white rounded-md py-1 px-3 hover:bg-pink-700">
                Signup
              </button>
              <p>
                Have Account{" "}
                {/* <Link
                  className="underline cursor-pointer text-blue-500"
                      to="/"              
                >
                  Login
                </Link>{" "} */}

                { <button
                  className="underline cursor-pointer text-blue-500"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>}

                {/* <Login></Login> */}
              </p>
            </div>{" "}
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;


//vijay123