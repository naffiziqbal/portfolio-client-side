import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const  post  = useLoaderData();
  const { body, headline } =  post 
  // console.log(post);
  return (
    <div className="mx-auto container p-5">
      <p className="text-2xl font-bold mb-4" >{headline}</p>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;
