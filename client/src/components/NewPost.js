import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makePost } from "../services/posts";
import { useAsyncFn } from "../hooks/useAsync";

const NewPost = () => {
  const makePostFn = useAsyncFn(makePost);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const createNewPost = (e) => {
    e.preventDefault();
    makePostFn.execute(title, body).then((data) => {
      console.log(data);
      navigate(`/posts/${data.id}`);
    });
  };
  return (
    <div>
      <form onSubmit={createNewPost}>
        <div className="newpost-form-row">
          <label htmlFor="title" className="">
            Title
          </label>
          <input
            id="title"
            className="message-input"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label htmlFor="body">Post</label>
          <textarea
            id="body"
            className="newpost-body"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <button className="btnnewpost" type="submit">
            Make a post
          </button>
        </div>
      </form>
      <div className="error-msg">{makePostFn.error}</div>
    </div>
  );
};

export default NewPost;
