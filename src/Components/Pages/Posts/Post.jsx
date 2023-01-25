import React from "react";

const Post = ({ post }) => {
  const { title, body } = post;
  return (
    <div className="my-2 border p-2">
      <p className="font-bold">{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default Post;