import React from 'react';
import {useFormik} from "formik";
import {Box, Button, Container, CssBaseline, TextField, Typography} from "@mui/material";
import * as yup from 'yup';
import {authLogin,authLogout} from "stores/authSlice";
import {useAppDispatch} from "hooks/hook";
import {useNavigate} from "react-router-dom";

type propsType = {}


const validationSchema = yup.object({
    email: yup.string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup.string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const Login: React.FC<propsType> = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleSubmit = (values: { email: string, password: string }): void => {
        dispatch(authLogin({
            username: values.email ,
            password: values.password
        }));
        navigate('/');
    }


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleSubmit(values)
        },
    });

    return (
        <div>
            <CssBaseline/>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5" className='px-4 pb-2 border-b-4 border-b-blue-500'>
                        Sign in
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <Box sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                sx={{backgroundColor: "white"}}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                sx={{backgroundColor: "white"}}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                                // color='secondary'
                            >
                                Sign In
                            </Button>
                        </Box>
                    </form>

                </Box>
            </Container>
        </div>
    );
};

export default Login;