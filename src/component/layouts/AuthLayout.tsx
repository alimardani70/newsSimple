import React from 'react';
import {Box, CssBaseline, Grid} from "@mui/material";
import {Outlet} from "react-router-dom";

type propsType = {}

const xx: React.FC<propsType> = () => {
    return (
        <Grid container direction="column" justifyContent="flex-end" sx={{minHeight: '100vh'}}>
            <CssBaseline/>
            <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center" sx={{minHeight: 'calc(100vh - 68px)'}}>
                    <Grid container spacing={2} alignItems="stretch" justifyContent="center">
                        <Box
                            className='w-full bg-gray-100 rounded-xl p-3'
                            sx={{maxWidth: {xs: 400, lg: 475}}}
                        >
                            <Outlet/>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default xx;