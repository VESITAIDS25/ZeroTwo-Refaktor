import React from "react";
import { PostList } from "./PostLists";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();
  function makeNewPost() {
    navigate("/newpost");
  }
  return (
    <div class='grid h-screen place-items-center mt-2xl'>
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={makeNewPost} >
      Make New Post
      </button>
      <PostList />
    </div>
  );
};

export default Posts;
