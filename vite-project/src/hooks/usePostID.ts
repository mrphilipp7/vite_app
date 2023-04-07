import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPostID = (PostID:string|undefined) =>{
    return axios.get(`http://localhost:8000/posts/${PostID}`)
}

export const usePostID = (PostId:string|undefined)=>{
    return useQuery(['superID', PostId], ()=> fetchPostID(PostId))
}