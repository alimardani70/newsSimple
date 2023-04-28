import {postsType, postType} from "stores/postsSlice";

export const searchData = (items: postsType  , search:string):postsType =>{
    return {
        posts : items.posts.filter( (post: postType,index:number)=>post.title.includes(search) )
    }
}