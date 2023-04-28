import React, {useEffect, useState} from 'react';
import {Alert, Button} from "@mui/material";
import Row from "component/layouts/Row";
import Col from "component/layouts/Col";
import {Refresh} from 'tabler-icons-react';
import {getPosts} from "services/api";
import {useAppDispatch, useAppSelector} from "hooks/hook";
import {changeSearchCount, postsType, savePosts, selectDate, selectPosts, selectSearch} from "stores/postsSlice";
import {searchData} from "utils/searchData";
import ListItems from "component/dataDisplay/ListItems";

type propsType = {}

const Home: React.FC<propsType> = () => {
    const dispatch = useAppDispatch();

    const [allPosts, setAllPosts] = useState<postsType>({posts: useAppSelector(selectPosts)});
    const [filteredPosts, setFilteredPosts] = useState<postsType>({posts: []});
    const selectorPost = useAppSelector(selectPosts);

    const searchString = useAppSelector(selectSearch);
    const dateUpdate = useAppSelector(selectDate);

       useEffect(()=>{
           setAllPosts({posts:selectorPost})
        },[dateUpdate]);

    useEffect(() => {
        if (searchString.length > 0) {
            setFilteredPosts(searchData(allPosts, searchString))
        } else {
            setFilteredPosts(allPosts)
        }
    }, [searchString, allPosts]);

    useEffect(() => {
        dispatch(changeSearchCount({searchCount: filteredPosts.posts.length}))
    }, [filteredPosts]);

    const refreshHandler = async () => {
        const result = await getPosts();
        setAllPosts(result)
        dispatch(savePosts(result))
    }

    return (
        <div>
            <Row>
                <Col col={{xs: 12}}>
                    <Button
                        type='button'
                        variant='outlined'
                        color='primary'
                        onClick={refreshHandler}
                    >
                        refresh posts
                        <Refresh
                            size={24}
                            strokeWidth={2}
                        />
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col col={{xs: 12}}>
                    {filteredPosts.posts.length > 0 &&
                        <ListItems
                            posts={filteredPosts.posts}
                        />}
                    {filteredPosts.posts.length === 0 && <Alert color='warning'>there is no any item ... </Alert>}
                </Col>
            </Row>
        </div>
    );
};

export default Home;