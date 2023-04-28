import React from 'react';
import {postType} from "stores/postsSlice";
import Card from "component/dataDisplay/Card";
import {Box} from "@mui/material";

type propsType = {
    items: postType[]
}

const CardsList: React.FC<propsType> = ({items}) => {
    const cards = items.map((item: postType) => <Card
        key={item.id}
        title={item.title}
        content={item.body}
        id={item.id}
    />)
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                p: 1,
                m: 1,
            }}
        >
            {cards}
        </Box>
    );
};

export default CardsList;