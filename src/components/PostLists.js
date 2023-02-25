import { Link } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getPosts } from "../services/posts";

export function PostList() {
  const { loading, error, value: posts } = useAsync(getPosts);
  console.log(posts)
  if (loading) return <h1>Loading</h1>;
  if (error) return <h1 className="error-msg">{error}</h1>;



    return (

       <div>

  <div class="items-center text-gray-600 body-font container px-5 py-24 mx-auto">
    <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Communicate and discuss with fellow job seekers!</h1>

          <div className="flex flex-col">
          {posts.map(
            ( post )=>{
              return (      
      
  <div key={post.id} >
    <div class="flex justify-center align-center justify-center  items-center border-solid border-2 my-4 border-blue-500">
  <ul class="w-96">
    <li class="w-96 p-4">{post.title}</li>
  </ul>
  <span>
  <Link to={`/posts/${post.id}`}>
    
    <button class="inline-flex align-center justify-center items-center text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">Learn more</button>
    </Link>
  </span>
  
</div> 
      
        </div>    
              )
              
             }
          )  }
          </div>
      </div>
    </div>
    );
}
