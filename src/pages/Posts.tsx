import React, {useState} from 'react';
import Col from "@/component/layouts/Col";
import ListItems from "@/component/dataDisplay/ListItems";
import {Alert} from "@mui/material";
import {postsType, postType, selectPosts} from "stores/postsSlice";
import {useAppSelector} from "@/hooks/hook";

type propsType = {
    posts : postType[] | []
    search: string
}

const Posts: React.FC<propsType>  = ({
                                         posts,
                                         search
                                     }) => {

    const [allPosts, setAllPosts] = useState<postsType>({posts: useAppSelector(selectPosts)});
    const [filteredPosts, setFilteredPosts] = useState<postsType>({posts: []});

 return (
     <Col col={{xs: 12}}>
         {filteredPosts.posts.length > 0 && <ListItems
             posts={filteredPosts.posts}
         />}
         {filteredPosts.posts.length === 0 && <Alert color='warning'>there is no any item ... </Alert>}
     </Col>
 );
};

export default Posts;
