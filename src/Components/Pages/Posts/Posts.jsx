import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.slice(0,10));
        setPosts(data.slice(0,10));
      });
  }, []);
  return (
    <div className="mx-auto container">
      <p className="text-3xl "> This Is All Post Page </p>
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
