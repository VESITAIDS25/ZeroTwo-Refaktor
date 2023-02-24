import React from "react";
import { PostList } from "./PostLists";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();
  function makeNewPost() {
    navigate("/newpost");
  }
  return (
    <>
      <button onClick={makeNewPost} className="btnnavnewpost">
        Make New Post
      </button>
      <PostList />
    </>
  );
};

export default Posts;
