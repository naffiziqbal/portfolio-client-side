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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="container mx-auto" id="contact">
      <p className="text-4xl text-primary text-center font-semibold">
        Contact Now
      </p>
      <div className="shadow-2xl my-5 p-5 rounded-lg">
        <form
          ref={form}
          action="#"
          className=" max-w-lg mx-auto"
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
                placeholder="Nafiz Iqbal"
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
                placeholder="Nafiz Iqbal"
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
                placeholder="I wanna Hire You"
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
