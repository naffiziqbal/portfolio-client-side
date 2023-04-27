import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/UserContext";

const NewPost = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [description, setDescription] = useState("");

  const handleInputChange = (e) => {
    setDescription(e.target.value);
    // if (e.target.value === "\n") {
    //   newDes = description.replace(/\n/g, "\\n");
    //   setDescription(newDes);
    // }
  };
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const headline = form.headline.value;
    const postData = { body: description, headline };

    fetch("http://localhost:5000/post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate("/posts");
        }
      });
  };

  return (
    <div className="mx-auto container">
      <p className="text-2xl font-bold">Make a New Post </p>
      {user ? (
        <form onSubmit={handlePost}>
          <label>
            <input
              type="text"
              placeholder="Post Headline"
              className="input input-bordered w-full input-primary my-5"
              name="headline"
            />
          </label>
          <textarea
            className="textarea textarea-primary w-full h-96"
            placeholder="Enter Your Text"
            name="description"
            value={description}
            onChange={handleInputChange}
          ></textarea>
          <input
            type="submit"
            value={"submit"}
            className="w-full btn btn-primary"
          />
        </form>
      ) : (
        <p className="text-4xl font-semibold text-center h-96 my-24">
          Don't Even Try Without{" "}
          <Link to={"/login"} className="text-blue-500">
            Login In
          </Link>
        </p>
      )}
    </div>
  );
};

export default NewPost;
