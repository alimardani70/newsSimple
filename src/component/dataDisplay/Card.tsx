import React from 'react';
import {Button, Card as MuiCard, CardActionArea, CardActions, CardContent, Typography} from '@mui/material';
import {grey} from "@mui/material/colors";
import Modal from "component/layouts/Modal";
import PostEdit from "pages/PostEdit";
import {Edit} from "tabler-icons-react";
type propsType = {
    title: string;
    content: string;
    id: number;
}
const Card: React.FC<propsType> = ({
                                       title,
                                       content,
                                       id,
                                   }) => {
    return (
        <MuiCard sx={{width: 260, border: 1, borderColor: grey[300], margin: 2}} className='flex flex-col justify-between'>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActionArea>
                <CardActions >
                    <Modal
                        // modalButtonTitle={`Edit ${editIcon}`}
                        modalButtonTitle={<Edit size={24} strokeWidth={2}/>}
                    >
                        <PostEdit
                            title={title}
                            content={content}
                            id={id}
                        />
                    </Modal>

                </CardActions>
            </CardActionArea>

        </MuiCard>
    );
};

export default Card;