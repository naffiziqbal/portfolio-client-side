import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const Post = ({ post }) => {
  const { user } = useContext(AuthContext);
  const { _id, headline, body, value } = post;
  const handleDelete = () => {
    fetch(`https://portfolio-server-side-steel.vercel.app/delete/${_id}`, {
      method: "Delete",
    });
  };
  return (
    <div className="my-2 p-2 border rounded-lg">
      <button className="float-right text-red-500" onClick={handleDelete}>
        Delete
      </button>
      <Link to={`/post/${_id}`}>
        <p className="font-bold text-2xl">{headline}</p>
      </Link>
      <br />
      <p>{body.slice(0, 100)}</p>
    </div>
  );
};

export default Post;
