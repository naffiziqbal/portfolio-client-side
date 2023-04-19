import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, loading } = useContext(AuthContext);

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pasword = form.password.value;

    createUser(email, pasword)
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            icon: "success",
            title: "Congrats",
            text: "User Logged in",
          })
        }
        navigate("/");
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          text: err.message,
        })
      );
  };
  let activeStyle = {
    textDecoration: "underline",
    color: "#d550ed",
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <header className="p-3">
              <div className="flex w-full">
                <div className="grid h-8 flex-grow card rounded-box place-items-center">
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/signup"
                  >
                    Sign Up
                  </NavLink>
                </div>
                <div className="divider divider-horizontal text-primary">
                  ||
                </div>
                <div className="grid h-8 flex-grow rounded-box place-items-center">
                  <NavLink
                    to="/login"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Log In
                  </NavLink>
                </div>
              </div>
              <hr className="border-primary" />
            </header>
            <form className="card-body" onSubmit={handleCreateUser}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="yourname@gmail.com"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="eg: #sni38s"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary text-white"
                  type={"submit"}
                  value={"Sign Up"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
