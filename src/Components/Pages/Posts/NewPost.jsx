import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

const NewPost = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState([]);
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const headline = form.headline.value;
    const body = form.body.value;
    const postData = { body, headline };

    fetch("https://portfolio-server-side-steel.vercel.app/post", {
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
        }
        console.log(data);
      });
    console.log(postData);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    setName(name);
    console.log(name);
  };
  useEffect(() => {
    fetch("https://portfolio-server-side-steel.vercel.app/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div className="mx-auto container">
      <div className="w-">
        <p className="text-blue-500">What Is Your Secret Code?</p>
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="You Can't Break The Code........."
            name="name"
            className=" mx-3 input input-bordered input-secondary w-full max-w-xs"
            onKeyUp={handleForm}
          />
          <input type="submit" className="btn btn-xs " />
        </form>
      </div>
      <p className="text-2xl font-bold">Make a New Post</p>
      {user.user === name ? (
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
            name="body"
          ></textarea>
          <input
            type="submit"
            value={"submit"}
            className="w-full btn btn-primary"
          />
        </form>
      ) : (
        <p className="text-4xl font-semibold text-center h-96 my-24">
          Don't Even Try Without Knowing Screat Code
        </p>
      )}
    </div>
  );
};

export default NewPost;
