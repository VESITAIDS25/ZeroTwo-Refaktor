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
      <form class="text-gray-600 body-font" onSubmit={createNewPost}>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Posting regarding jobs</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Keep the title crisp and simple, ellobarate further in description also help each other in the comment section.</p>
    </div>
    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div class="relative flex-grow w-full">

        <label for="full-name" class="leading-7 text-sm text-gray-600">Title</label>

        <input type="text" name="full-name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div class="relative flex-grow w-full">
        <label for="text" class="leading-7 text-sm text-gray-600">Description</label>
        <input type="text" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        id="body"
        onChange={(e) => setBody(e.target.value)}/>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit" >Submit</button>
    </div>
  </div>
</form>
<div className="error-msg">{makePostFn.error}</div>
      
    </div>
  );
};

export default NewPost;
