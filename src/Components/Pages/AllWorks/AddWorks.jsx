import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import Swal from "sweetalert2";

const AddWorks = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      const value = event.target.body.value;
      setValue(value + "\n");
    }
  }

  // const imageHostKey = c4fb97e7290fa8d31a86af5335890d26;
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;

    const image = form.image.files[0];
    const formData = new FormData();
    console.log(image);
    formData.append("image", image);
    const name = form.name.value;
    const description = form.body.value;
    const link = form.link.value;

    const url = `https://api.imgbb.com/1/upload?key=c4fb97e7290fa8d31a86af5335890d26`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const postData = {
            name,
            description,
            Img: imgData.data.url,
            link,
          };
          fetch(`http://localhost:5000/add-portfolio`, {
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
        }
      });
  };

  return (
    <div className="mx-auto container">
      <p className="text-2xl font-bold">Add Portfolio</p>
      {user ? (
        <form onSubmit={handlePost}>
          <label>
            <input
              type="text"
              placeholder="Portfolio Name"
              className="input input-bordered w-full input-primary my-5"
              name="name"
            />
          </label>
          <label>
            <input
              type="link"
              placeholder="Portfolio Link"
              className="input input-bordered w-full input-primary my-5"
              name="link"
            />
          </label>
          <label>
            <span className="label-text">Image</span>
            <div className="form-control w-full max-w-xs mb-5">
              <label className="label">
                <span className="label-text">Pick a file</span>
              </label>
              <input
                type="file"
                name="image"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
          </label>
          <textarea
            className="textarea textarea-primary w-full h-96"
            placeholder="Describe Your Project...."
            name="body"
            // value={value}
            onKeyDown={handleKeyDown}
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

export default AddWorks;
