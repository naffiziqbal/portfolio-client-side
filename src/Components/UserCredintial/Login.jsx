import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          icon: "success",
          title: "Congrats",
          text: "User Logged in",
        });
        navigate("/");
      })
      .catch((err) => Swal.fire({
        icon : "error",
        text: err.message
      }));
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
                    to={"/signup"}
                  >
                    Sign Up
                  </NavLink>
                </div>
                <div className="divider divider-horizontal text-primary">
                  ||
                </div>
                <div className="grid h-8 flex-grow rounded-box place-items-center">
                  <NavLink
                    to={"/login"}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Log in
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
                  placeholder="yourname@mail.com"
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
                  placeholder="#4iudss3"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type={"submit"}
                  value={"Log In"}
                  className="btn text-white btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
