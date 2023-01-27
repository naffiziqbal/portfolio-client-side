import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { _id, headline, body } = post;
  return (
    <div className="my-2 p-2">
      <Link to={`/post/${_id}`}>
        <p className="font-bold text-2xl">{headline}</p>{" "}
      </Link>
      <br />
      <p>{body.slice(0, 100)} ....</p>
    </div>
  );
};

export default Post;
