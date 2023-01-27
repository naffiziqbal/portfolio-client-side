import React from "react";

const Modal = () => {
    const handleForm =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name  = form.name.value;
        // console.log(name)
    }
  return (
    <div className="w-">
      What Is Your Name?
      <input
        type="text"
        placeholder="Type here"
        name="name"
        className="input input-bordered input-secondary w-full max-w-xs"
      />
    </div>
  );
};

export default Modal;
