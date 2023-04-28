import React from 'react';
import {AppBar, Box, CssBaseline} from "@mui/material";
import Header from "../header/Header";
import {Outlet} from "react-router-dom";
import Container from "component/layouts/Container";
import Row from "component/layouts/Row";
import Col from "component/layouts/Col";

type propsType = {}

const MainLayout: React.FC<propsType> = () => {
    return (
        <div  className='bg-gray-100  flex flex-col justify-stretch min-h-screen' >
            <Container >
                <AppBar>
                    <Header/>
                </AppBar>
                <Row className='pt-24'>
                    <Col col={{xs:12}} className='bg-white' >
                        <Outlet/>
                    </Col>
                </Row>
            </Container>
        </div>


    );
};

export default MainLayout;