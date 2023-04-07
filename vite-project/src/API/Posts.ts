import axios from "axios"

export const getAllPosts = () => {
      return axios.get("http://localhost:8000/posts").then((res) => {
        return res.data;
      });
    }