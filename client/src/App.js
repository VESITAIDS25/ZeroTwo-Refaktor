import { Routes, Route } from "react-router-dom";
import { Post } from "./components/Post";
import Posts from "./components/Posts";
import { PostProvider } from "./contexts/PostContext";
import NewPost from "./components/NewPost";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route
          path="/posts/:id"
          element={
            <PostProvider>
              <Post />
            </PostProvider>
          }
        />
        <Route path="/newpost" element={<NewPost />} />
      </Routes>
    </div>
  );
}

export default App;
