import React from "react";

// Customizable Area Start
import {

    Box,
    Button,
    Grid,
    Typography,
    IconButton,
    TextField,
    Link,

} from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import ForgotPasswordController, { Props } from "./ForgotPasswordController.web";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Logo, RightImg } from './assets';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

// Customizable Area End





const theme = createTheme({
    palette: {
        primary: {
            main: "#0000ff",
            contrastText: "#fff",
        },
    },
});

export default class ForgotPasswordWeb extends ForgotPasswordController {
    constructor(props: Props) {
        super(props);
        // Customizable Area Start
        // Customizable Area End
    }
    // Customizable Area Start
    // Customizable Area End
    render() {
        return (
            // Customizable Area Start
            // Required for all blocks
            <ThemeProvider theme={theme}>
                <Box sx={{ display: "flex", flexDirection: "row" }}>

                    <Box sx={{ width: "100%", paddingTop: "20px" }}>

                        <Box width="60%" margin="auto">
                            <Box>
                                <img
                                    style={{ width: "100px", height: "100px" }}
                                    src={Logo} alt="logo" />
                            </Box>
                            {
                                this.state.forgotPassword === false ? (
                                    <Box>
                                        <Box>
                                            <Typography variant="h4" style={{ marginTop: "20px", lineHeight: "2", fontFamily: 'Montserrat,sans-serif',fontSize: "20px", fontWeight: 700 }}>ForgotPassword</Typography>
                                            <Typography variant="body1" style={{fontFamily: 'Montserrat,sans-serif'}}>
                                                If you've forgotten your account password , enter your email below and we will send you an email with instructions to reset your account
                                            </Typography>
                                        </Box>
                                        <Box mt={5}>
                                            <Formik
                                            key="forgotPassword"
                                                data-test-id="FormikID"
                                                initialValues={{
                                                    email: "",
                                                }}
                                                

                                                validationSchema={Yup.object().shape(
                                                    {

                                                        email: Yup.string().required('Enter your Email Address '),

                                                    }
                                                )}
                                                onSubmit={(values) => {
                                                    this.handleForgot(values)
                                                }}
                                            >
                                                <Form translate={undefined}>
                                                    <Grid container spacing={3} >

                                                        <Grid item xs={12}>
                                                            <label style={webStyle.label} htmlFor="email">
                                                                Email
                                                            </label>

                                                            <Field
                                                                data-test-id="signupInputEmail"
                                                                id="email"
                                                                name="email"
                                                                placeholder="abc@gmail.com"
                                                                variant="outlined"
                                                                as={TextField}
                                                                fullWidth
                                                                // onChange={(e:any)=>this.emailChange(e.target.value)}

                                                                helperText={
                                                                    <Typography style={webStyle.required}>
                                                                        <ErrorMessage name="email" />
                                                                    </Typography>
                                                                }
                                                                InputProps={{
                                                                    disableUnderline: true,
                                                                }}
                                                            />

                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <Box display={"flex"} flexDirection={"column"} style={{ gap: "10px" }}>
                                                                <Button data-test-id='forgotBtn'
                                                                    type="submit" style={webStyle.signbtn} size="large"
                                                                >
                                                                    Send a recovery link
                                                                </Button>

                                                            </Box>

                                                        </Grid>
                                                    </Grid>

                                                </Form>


                                            </Formik>
                                        </Box>

                                        <Box>
                                            <Link href="/LogIn">
                                                <Typography style={{fontFamily: 'Montserrat,sans-serif'}}><KeyboardBackspaceIcon style={{ fontSize: "15px" }} /> Back to Login</Typography>
                                            </Link>
                                        </Box>
                                    </Box>
                                ) : (
                                    <Box>
                                        <Box>
                                            <Typography variant="h4" style={{ marginTop: "20px", lineHeight: "2", fontSize: "20px",fontFamily: 'Montserrat,sans-serif', fontWeight: 700 }}>Reset Password</Typography>
                                            <Typography variant="body1" style={{fontFamily: 'Montserrat,sans-serif',}}>
                                                Set new Password for new account so you can login and access all the features
                                            </Typography>
                                        </Box>
                                        <Box mt={5}>
                                            <Formik
                                            key="resetPassword"
                                                data-test-id="FormikID"
                                                initialValues={{
                                                    password: '',
                                                    ConfirmPassword: ''
                                                }}

                                                validationSchema={Yup.object().shape(
                                                    {
                                                        password: Yup
                                                            .string()
                                                            .min(8, 'Password must be at least 8 characters')
                                                            .matches(
                                                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
                                                                'Password must contain at least one uppercase letter, one lowercase letter, and one number'
                                                            )
                                                            .required('Password is required'),
                                                        ConfirmPassword: Yup.string()
                                                            .oneOf([Yup.ref("password"), null], "Passwords must match")
                                                            .required("Confirm Password is required"),

                                                    }
                                                )}
                                                onSubmit={(values) => {
                                                    this.handleResetPassword(values)
                                                }}
                                            >

{({ values }) => (
    <Form
                                                 translate={undefined}
                                                 autoComplete="false"
                                                >

                                                    <Grid 
                                                        container spacing={3}
                                                     >

                                                        <Grid item xs={12}>

                                                            <label 
                                                            style={webStyle.label} 
                                                            htmlFor="password">
                                                                Password
                                                            </label>

                                                            <Field
                                                                data-test-id="signupInputPassword"
                                                                type={
                                                                    this.state.showPassword ?
                                                                     "text" : "password"
                                                                    }
                                                                id="password"
                                                                value={values.password}
                                                                name="password"
                                                                variant="outlined"
                                                                as={TextField}
                                                                fullWidth
                                                                autoComplete="off"
                                                                placeholder="Fill in your password here"
                                                                helperText={
                                                                    <Typography style={webStyle.required}>
                                                                        <ErrorMessage name="password" />
                                                                    </Typography>
                                                                }
                                                                InputProps={{
                                                                    disableUnderline: true,
                                                                    endAdornment: (
                                                                        <IconButton
                                                                            aria-label="toggle password visibility"
                                                                            onClick={this.handleClickShowPassword}
                                                                        >
                                                                            {this.state.showPassword ? ( <Visibility /> ) : ( <VisibilityOff />)}
                                                                        </IconButton>
                                                                    ),
                                                                }}
                                                            />

                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <label style={webStyle.label} htmlFor="ConfirmPassword">
                                                                Confirm Password
                                                            </label>
                                                            <Field
                                                                data-test-id="signupInputCPassword"
                                                                type={this.state.confirmPassword ? "text" : "password"}
                                                                id="ConfirmPassword"
                                                                name="ConfirmPassword"
                                                                placeholder="Fill in your password here"
                                                                variant="outlined"
                                                                as={TextField}
                                                                fullWidth

                                                                helperText={
                                                                    <Typography style={webStyle.required}>
                                                                        <ErrorMessage name="ConfirmPassword" />
                                                                    </Typography>
                                                                }
                                                                InputProps={{
                                                                    disableUnderline: true,
                                                                    endAdornment: (
                                                                        <IconButton
                                                                            aria-label="password visibility"
                                                                            onClick={this.handleShowConfirmPassword}
                                                                        >
                                                                            {this.state.confirmPassword ? 
                                                                            (<Visibility />) : (<VisibilityOff />)}
                                                                        </IconButton>
                                                                    ),
                                                                }}
                                                            />

                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <Box>
                                                                <Button data-test-id='resetBtn' type="submit" style={webStyle.signbtn} size="large">
                                                                    Submit
                                                                </Button>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>

                                                </Form>
)}

                                                
                                            </Formik>
                                        </Box>


                                    </Box>
                                )
                            }

                        </Box>

                    </Box>


                    <Box style={webStyle.rightCard}>
                        <img style={webStyle.rightCardImg} src={RightImg} alt="RightImg" />
                    </Box>
                </Box>
                <Dialog
                    open={this.state.open}
                  
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                
                    <DialogContent style={{width: "400px"}}>
                        <DialogContentText id="alert-dialog-slide-description" style={webStyle.modaltitle}>
                            Password  is Update 
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      
                        <Button onClick={this.handleClose} style={webStyle.modalbtn} color="primary">
                           Back To Login
                        </Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>
            // Customizable Area End
        );
    }
}

// Customizable Area Start
const webStyle = {
    rightCard: {
        height: "100%",
        width: "100%"
    },
    rightCardImg: {

        width: "100%",
        transform: "rotate(0deg)"
    },

    modalbtn: {
        border: "1px solid grey",
        background: "#3E01B9",
        borderRadius: "10px",
        color: "#E8E8E8",
        fontFamily: 'Montserrat,sans-serif',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "14px",
        textTransform: "none"
    }as React.CSSProperties,

    modaltitle:{
        fontFamily: 'Montserrat,sans-serif',
    },


    signbtn: {
        background: "#3E01B9",
        borderRadius: "10px",
        width: "100%",
        height: "64px",
        color: "#E8E8E8",
        fontFamily: 'Montserrat,sans-serif',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "18px",
        textTransform: "none"
    } as React.CSSProperties,
    label: {
        fontStyle: "normal",
        fontWeight:700,
        fontSize: "16px",
        marginBottom: "10px",
        fontFamily: "Montserrate, sans-serif",
        color:"#334155"
    } as React.CSSProperties,

    required: {
        color: "red",
        marginTop: "10px"
    } as React.CSSProperties,



}
 // Customizable Area End