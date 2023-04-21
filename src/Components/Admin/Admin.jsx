import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Admin = () => {
  let content;
  const [allworks, setAllworks] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-server-side-naffiziqbal.vercel.app/works")
      .then((res) => res.json())
      .then((data) => {
        setAllworks(data);
      });
  }, [allworks]);

  const handleDelete = (id) => {
    fetch(`https://portfolio-server-side-naffiziqbal.vercel.app/delete/${id}`, {
      method: "delete",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            icon: "success",
            title: "SUCCESS",
          });
        }
      });
  };

  //
  if (allworks?.length) {
    content = allworks.map((allwork) => (
      <div className="my-2">
        <ul>
          <li key={allwork._id} className="flex justify-between">
            {allwork.name}
            <button
              className="text-red-400"
              onClick={() => handleDelete(allwork._id)}
            >
              Del
            </button>
          </li>
        </ul>
      </div>
    ));
  }
  return <div className="container mx-auto">{content}</div>;
};

export default Admin;
