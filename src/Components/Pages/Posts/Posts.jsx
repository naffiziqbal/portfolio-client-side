import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.slice(0, 10));
        setPosts(data.slice(0, 10));
      });
  }, []);
  return (
    <div className="mx-auto container">
      <p className="text-3xl "> This Is All Post Page </p>
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
