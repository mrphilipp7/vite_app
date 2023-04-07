import axios from "axios"

export const getAllPosts = () => {
      return axios.get("http://localhost:8000/posts").then((res) => {
        return res.data;
      });
    }

type CreatePostProps={
  title: string,
  author: string,
}

export const createPost = ({title, author}:CreatePostProps) => {
  return axios.post("http://localhost:8000/posts", {title, author,}).then(res=>res.data);
}