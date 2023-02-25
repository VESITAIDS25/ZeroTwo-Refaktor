import { makeRequest } from "./makeRequest";

export function getPosts() {
  return makeRequest("/posts");
}

export function getPost(id) {
  return makeRequest(`/posts/${id}`);
}

export function makePost(title, body) {
  return makeRequest("/posts/new-post", {
    method: "POST",
    data: { title, body },
  });
}
