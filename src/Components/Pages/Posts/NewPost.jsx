import React from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

const NewPost = () => {
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const headline = form.headline.value;
    const body = form.body.value;
    const postData = { body, headline };

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
        }
        console.log(data);
      });
    console.log(postData);
  };
  return (
    <div className="mx-auto container">
      <p className="text-2xl font-bold">Make a New Post</p>
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
    </div>
  );
};

export default NewPost;
