import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "./store";

export type postType = {
    userId: number,
    id: number,
    title: string,
    body: string
}
export type postsType = {
    posts: postType[] | []
}
export type searchType = {
    search: string;
}
type searchCountType = {
    searchCount: number
}
type updatePost = {
    date: Date
}
const initialState: postsType & searchType & searchCountType & updatePost= {
    search: '',
    searchCount: 0,
    posts: [],
    date: new Date()
}
export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        savePosts: (state, action: PayloadAction<postsType>) => {
            state.posts = action.payload.posts;
            state.search = '';
            state.searchCount= action.payload.posts.length
        },
        changeSearch: (state, action: PayloadAction<searchType>) => {
            state.search = action.payload.search
        },
        changeSearchCount: (state, action: PayloadAction<searchCountType>) => {
            state.searchCount = action.payload.searchCount
        },
        editPost: (state, action: PayloadAction<{ id: number, title: string, body: string }>) => {
            let {id , title , body} = action.payload
            let postIndex = state.posts.findIndex( (item: postType) => item.id === id);
            state.posts[postIndex].title = title
            state.posts[postIndex].body = body
            state.date = new Date()
        }
    }
});

export const {savePosts, changeSearch,changeSearchCount,editPost} = postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts.posts;
export const selectSearch = (state: RootState) => state.posts.search;
export const selectSearchCount = (state: RootState) => state.posts.searchCount;
export const selectDate = (state: RootState) => state.posts.date;
export default postsSlice.reducer;
