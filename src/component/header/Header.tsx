import React from 'react';
import {AppBar, Badge, Box, Button, Toolbar} from "@mui/material";
import Search from "./Search";
import {ReportSearch, UserCircle} from 'tabler-icons-react';
import Popover from "../common/Popover";
import {useAppDispatch, useAppSelector} from "hooks/hook";
import {authLogout, selectDate, selectIsLogin, selectToken, selectUsername} from "stores/authSlice";
import {selectSearchCount} from "stores/postsSlice";
import {useNavigate} from "react-router-dom";

type propsType = {}

const Header: React.FC<propsType> = () => {
    const dispatch = useAppDispatch()
    const username = useAppSelector(selectUsername)
    const token = useAppSelector(selectToken)
    const date = useAppSelector(selectDate)
    const isLogin = useAppSelector(selectIsLogin)
    const searchCount = useAppSelector(selectSearchCount)
    const navigate = useNavigate();

    const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(authLogout());
        navigate('/auth/login');
    }


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Search/>
                    <Box sx={{flexGrow: 1}}/>
                    <Box className='px-3'>
                        <Badge badgeContent={searchCount} color="error">
                            <ReportSearch
                                size={24}
                                strokeWidth={2}
                                color={'white'}
                            />
                        </Badge>
                    </Box>
                    <Box className='px-3'>
                        <Popover content={
                            <>
                                <span>{username}</span>
                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 3, mb: 2}}
                                    color='warning'
                                    onClick={handleLogout}
                                >logout</Button>
                            </>
                        }>
                            <UserCircle
                                size={25}
                                strokeWidth={2}
                                color={'white'}
                            />
                        </Popover>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;