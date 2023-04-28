import React, {useState} from 'react';
import {Button, Stack, TextField,Hidden } from "@mui/material";
import {dispatch} from "jest-circus/build/state";
import {useAppDispatch} from "hooks/hook";
import {editPost} from "stores/postsSlice";

type propsType = {
    title: string,
    content: string,
    id: number
}

const PostEdit: React.FC<propsType>  = ({
                                            title,
                                            content,
                                            id,
                                        }) => {
    const dispatch = useAppDispatch();
    const [titleValue, setTitleValue] = useState<string>(title)
    const [contentValue, setContentValue] = useState<string>(content)
    const [idValue, setIdValue] = useState<string>(title)
const submitHandler = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    dispatch(editPost({id:id , title: titleValue , body: contentValue}))
}
 return (
  <div>
   <form onSubmit={submitHandler}>
       <Stack  direction='column' spacing={2}>
           <TextField
               multiline
               name='title'
               rows={2}
               value={titleValue}
               onChange={(e) => setTitleValue(e.target.value)}
           />
           <TextField
               multiline
               name='content'
               rows={4}
               value={contentValue}
               onChange={(e) => setContentValue(e.target.value)}
           />
           <input type='hidden'  name='id' value={id} />
           <Button
               variant='contained'
               type='submit'
           >save</Button>
       </Stack>
   </form>
  </div>
 );
};

export default PostEdit;