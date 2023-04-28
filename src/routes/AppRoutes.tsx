import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes , useNavigate   } from "react-router-dom";
import MainLayout from "../component/layouts/MainLayout";
import Home from "../pages/Home";
import AuthLayout from "../component/layouts/AuthLayout";
import Login from "../pages/Login";
import {useAppSelector} from "hooks/hook";
import {selectIsLogin} from "stores/authSlice";
type propsType = {}

const AppRoutes: React.FC<propsType> = () => {
    const isLogin = useAppSelector(selectIsLogin);
    const navigate = useNavigate();
    const firstPathname = window.location.pathname.split('/')[1];

    useEffect(() => {
        if(!isLogin && firstPathname!='auth'){
            navigate('/auth/login');
        }else{
            navigate('/')
        }
    },[])


    return (
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                </Route>
                <Route path='/auth' element={<AuthLayout/>}>
                    <Route path='login' element={<Login />}/>
                </Route>
            </Routes>
    );
};

export default AppRoutes;