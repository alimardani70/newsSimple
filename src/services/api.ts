import axios from 'axios';
import type {postType ,postsType } from "stores/postsSlice";
import {log} from "util";

export const  getPosts = async ()  => {
    try{
        const { data, status } = await axios.get<postType[]>(
            'https://jsonplaceholder.typicode.com/posts',
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        if(status === 200  )
            return {posts: data};
        else
            return {posts : []}
    }catch (e) {
        throw e;
    }

}