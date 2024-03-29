import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const handleForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2wtfgr3",
        "template_beachpg",
        form.current,
        "7Q7CiW8yGgyOP2wjo"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "top-middle",
            icon: "success",
            title: "Your Mail has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          // console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="container mx-auto" id="contact">
      <div className="my-12 uppercase line-through">
        <h1 className="lg:text-8xl md:text-7xl text-5xl font-bold opacity-20  text-center">Contact Now</h1>
        <hr className="mt-5 border-gray-700" />
      </div>
      <div className="my-5 p-5 rounded-lg">
        <form
          ref={form}
          action="#"
          className=" mx-auto"
          onSubmit={handleForm}
        >
          <div className="form-control ">
            <label>
              {" "}
              Name
              <br />
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="input input-bordered  w-full "
              />
            </label>
          </div>
          <div className="form-control ">
            <label>
              {" "}
              Subject
              <br />
              <input
                type="text"
                name="from_subject"
                placeholder="Subject"
                required
                className="input input-bordered  w-full "
              />
            </label>
          </div>
          <div className="form-control">
            <label>
              {" "}
              E-mail
              <br />
              <input
                type="email"
                name="from_email"
                placeholder="example@gmail.com"
                required
                className="input input-bordered  w-full "
              />
            </label>
          </div>
          <div className="form-control">
            <label>
              {" "}
              Message
              <br />
              <textarea
                rows={10}
                name="message"
                className="textarea textarea-bordered w-full"
                placeholder="Some Text"
              ></textarea>
            </label>
          </div>
          <input
            type="submit"
            value={"submit"}
            className="btn btn-primary w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
