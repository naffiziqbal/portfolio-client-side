import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://portfolio-server-side-steel.vercel.app/posts`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.slice(0, 10));
        setPosts(data.slice(0, 10));
      });
  }, []);
  return (
    <div className="mx-auto container">
      <div>
        <p className="text-blue-500 underline">
          <Link to={"/newpost"}>Make a Post</Link>
        </p>
      </div>
      <div>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
