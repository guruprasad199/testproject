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
  Snackbar,
  createStyles,
  Theme,
  withStyles,
} from "@material-ui/core";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import SignInController, { Props } from "./LogInController.web";
import { Formik, Field, Form, ErrorMessage, getIn } from "formik";
import * as Yup from "yup";
import { Logo, RightImg, google, warning } from "./assets";
import { LoginSocialGoogle } from "reactjs-social-login";
import MuiAlert from "@material-ui/lab/Alert";

// Customizable Area End

export default class SignIn extends SignInController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }
  // Customizable Area Start

  successPopUp = () => {
    return (
      <Snackbar
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        <MuiAlert
          onClose={this.handleClose}
          severity="success"
          variant="filled"
        >
          Login Successful!
        </MuiAlert>
      </Snackbar>
    );
  };

  renderFlatlist = () => {
    return (
      <Snackbar
        open={this.state.isModalOpen}
        autoHideDuration={6000}
        onClose={this.handleModalClose}
      >
        <MuiAlert
          onClose={this.handleModalClose}
          severity="error"
          variant="filled"
        >
          Login Failed!
        </MuiAlert>
      </Snackbar>
    );
  };

  //istanbul ignore next/
  customInput = ({ field, form: { errors } }: any) => {
    return (
      <div>
        <TextField
          {...field}
          style={this.getStyles(errors, field.name, getIn)}
          placeholder="abc@gmail.com"
          InputProps={{
            disableUnderline: true,
          }}
        />

        <ErrorMessage name="email">
          {(errorMessage) => (
            <div
              style={{
                color: "red",
                marginTop: "10px",
                fontFamily: "Montserrat",
                marginLeft: "-3px",
                marginBottom: "10px",
                fontSize: "11px",
              }}
            >
              <img
                src={warning}
                alt="warning"
                style={{ marginRight: "5px", marginBottom: "4px" }}
              />
              Please enter a valid email address
            </div>
          )}
        </ErrorMessage>
      </div>
    );
  };

  // Customizable Area End
  render() {
    return (
      // Customizable Area Start
      // Required for all blocks

      <div className={this.props.classes?.mainWrapper}>
        <Box className={this.props.classes?.rightCard}>
          <img className={this.props.classes?.rightCardImg} src={RightImg} alt="RightImg" />
          <div />
        </Box>
        <Box className={this.props.classes?.wrapWithBackground}>
          <Box className={this.props.classes?.mainContainer}>
            <Box className={this.props.classes?.logoContainer}>
              <img src={Logo} alt="logo" className={this.props.classes?.imgLogo} />
              <Typography
                variant="h4" className={this.props.classes?.descriptionText}>
                Sign in Adventure Park
              </Typography>
            </Box>

            <Box mt={"24px"}>
              <LoginSocialGoogle
                client_id="412576249528-k7g422igil5cb4i9v7f4hrkm87j7dmpp.apps.googleusercontent.com"
                scope="https://www.googleapis.com/auth/userinfo.profile"
                discoveryDocs="claims_supported"
                access_type="online"
                onResolve={({ provider, data }) => {
                  this.getProfileData(data);
                }}
                onReject={(error) => {
                  this.getProfileData(error);
                }}
                isOnlyGetToken={false}
              >
                <Box className={this.props.classes?.googleAcc}>
                  <img src={google} alt="google" className={this.props.classes?.googleIcon} />
                  <Typography className={this.props.classes?.googleText}>
                    Continue with Google
                  </Typography>
                </Box>
              </LoginSocialGoogle>
              <Box mt={"34px"} style={{ position: "relative" }} pt={"10px"}>
                <Box style={{ borderTop: "1px solid #E2E8F0" }} />
                <Box className={this.props.classes.orTextContent}>
                  <Typography className={this.props.classes?.orstyle}>OR</Typography>
                </Box>
              </Box>
            </Box>
            <Box mt={5}>
              <Formik
                data-test-id="FormikID"
                initialValues={{
                  email: "",
                  password: "",
                  remember: false,
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string().required(
                    "Please enter a valid email address"
                  ),
                  Logo: Yup.string().required(""),
                  remember: Yup.boolean()
                    .oneOf([true], "You must accept the terms and conditions")
                    .required("You must accept the terms and conditions"),
                  password: Yup.string()
                    .min(8, "Password must be at least 8 characters")
                    .matches(
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
                      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
                    )
                    .required("Password is required"),
                })}
                onSubmit={(values) => {
                  this.handleLoginSubmit(values);
                }}
              >
                <Form translate={undefined}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <label className={this.props.classes?.Emaillabel} htmlFor="email">
                        Email
                      </label>

                      <Field
                        className={this.props.classes?.customEmail}
                        data-test-id="signupInputEmail"
                        component={this.customInput}
                        id="email"
                        name="email"
                        placeholder="abc@gmail.com"
                        variant="outlined"
                        as={TextField}
                        fullWidth
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <label className={this.props.classes?.label} htmlFor="password">
                        Password
                      </label>

                      <Field
                        data-test-id="signupInputPassword"
                        type={this.state.showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        variant="outlined"
                        as={TextField}
                        fullWidth
                        placeholder="**********"
                        helperText={
                          <Typography className={this.props.classes?.required}>
                            <ErrorMessage name="password" />
                          </Typography>
                        }
                        InputProps={{
                          disableUnderline: true,
                          endAdornment: (
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={this.handleShowPassword}
                            >
                              {this.state.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          ),
                        }}
                      />
                      <span className={this.props.classes?.description}>
                        The password must be minimum 8 characters, include at
                        least one capital, one lowercase, one number and one
                        special character.
                      </span>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography
                        data-test-id="btnForgotPassword"
                        style={{ textAlign: "end" }}
                      >
                        {" "}
                        <Link
                          href="/ForgotPassword" className={this.props.classes?.forgotPass}>
                          Forgot Password?
                        </Link>{" "}
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Box
                        style={{
                          gap: "10px",
                          display: "flex",
                          alignItems: "start",
                        }}
                      >
                        <Field
                          type="checkbox"
                          data-test-id="btnRememberMe"
                          id="remember"
                          name="remember"
                          className={this.props.classes?.remember}
                        />
                        <label htmlFor="remember" className={this.props.classes?.agreeText}>
                          I agree with{" "}
                          <Link
                            href=""
                            style={{
                              fontWeight: 600,
                              color: "#0F172A",
                              textDecorationLine: "underline",
                            }}
                          >
                            Privacy Policy
                          </Link>{" "}
                          and{" "}
                          <Link
                            href=""
                            style={{
                              fontWeight: 600,
                              color: "#0F172A",
                              textDecorationLine: "underline",
                            }}
                          >
                            Terms{" "}
                          </Link>{" "}
                          and Conditions.
                        </label>
                      </Box>
                      <Typography className={this.props.classes?.rememberRequired}>
                        <ErrorMessage name="remember" />
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        style={{ gap: "34px" }}
                      >
                        <Button
                          data-test-id="btnEmailLogIn"
                          type="submit"
                          className={this.props.classes?.signbtn}
                          size="large"
                        >
                          Sign in
                        </Button>
                        <Typography className={this.props.classes?.accountLink}>
                          {" "}
                          Don't have an account?{" "}
                          <Link
                            href="/Signup"
                            style={{ fontWeight: 600, color: "#2B65EC" }}
                          >
                            Sign up
                          </Link>
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </Box>
          </Box>
        </Box>
        {this.renderFlatlist()}
        {this.successPopUp()}
      </div>

      // Customizable Area End
    );
  }
}

// Customizable Area Start

const styles = (theme: Theme) =>
  createStyles({
    mainWrapper: {
      display: "flex",
      height: "auto !important",
      flexDirection: "row-reverse",
    },
    rightCard: {
      height: "100%",
      width: "100%",
    },
    rightCardImg: {
      width: "100%",
      height: "80rem",
    },
    remember: {
      background: "#3618B1",
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      width: "20px",
      height: "20px",
    },
    rememberRequired: {
      color: "red",
      marginTop: "10px",
      fontFamily: "Montserrat",
      marginBottom: "10px",
      fontSize: "11px",
    },
    googleStyle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      elevation: 6,
      borderWidth: 0,
      borderRadius: 5,
      marginTop: 32,
    },
    imgBlock: {
      border: "1px solid grey",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
      padding: "20px",
      borderRadius: "5px",
    },
    googleAcc: {
      border: "1px solid #CBD5E1",
      padding: "10px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      height: "56px",
      cursor: "pointer",
    },
    forgotPass: {
      color: "#FF3131",
      textAlign: "right",
      fontFamily: "Montserrat",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
      letterSpacing: "-0.12px",
    },
    googleText: {
      fontFamily: "Montserrat,sans-serif",
      fontSize: "16px",
      color: "#0F172A",
      fontWeight: 600,
    },
    customEmail: {
      width: "100%",
      height: "50.4px",
      borderRadius: "4px",
      background: "red",
    },
    orstyle: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#64748B",
      textAlign: "center",
      fontFamily: "Montserrat,sans-serif",
      width: "23px",
      margin: "0 20px",
    },
    accountLink: {
      textAlign: "center",
      fontFamily: "Montserrat, sans-serif",
      fontSize: "16px",
      lineHeight: "30px",
      fontWeight: 400,
      color: "#0F172A",
    },
    signbtn: {
      background: "#2B65EC",
      borderRadius: "10px",
      width: "100%",
      height: "56px",
      color: "#FFF",
      fontFamily: "Montserrat, sans-serif",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "18px",
      textTransform: "none",
    },
    label: {
      fontStyle: "normal",
      fontWeight: 700,
      marginBottom: "10px",
      fontFamily: "Montserrat, sans-serif",
      color: "#0F172A",
      fontSize: "16px",
      letterSpacing: "0.2px",
    },
    descriptionText: {
      marginTop: "20px",
      lineHeight: "2",
      fontSize: "20px",
      fontWeight: 700,
      fontFamily: "Montserrat, sans-serif",
      letterSpacing: "-0.12px",
      width: "241px",
    },
    orTextContent: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "40%",
      background: "#fff",
      width: "60px",
    },
    Emaillabel: {
      fontStyle: "normal",
      fontWeight: 700,
      marginBottom: "10px",
      fontFamily: "Montserrat, sans-serif",
      color: "#0F172A",
      fontSize: "16px",
      width: "48px",
    },
    required: {
      color: "red",
      marginTop: "10px",
      fontFamily: "Montserrat",
      marginLeft: "-14px",
      marginBottom: "10px",
      fontSize: "11px",
    },
    passwordError: {
      color: "red",
      marginTop: "10px",
      fontFamily: "Montserrat",
      marginBottom: "10px",
      fontSize: "11px",
    },
    description: {
      color: "#64748B",
      fontWeight: 400,
      fontSize: "11px",
      fontFamily: "Montserrat",
    },
    mainContainer: {
      width: "360px",
      margin: "147px auto 0px auto",
    },
    wrapWithBackground: {
      width: "100%"
    },
    agreeText: {
      fontSize: "14px",
      color: "#0F172A",
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "22px",
    },
    modalContainer: {
      background: "#FFFAFA",
      width: "400px",
      border: "1px solid black",
      height: "250px",
      position: "absolute",
      top: "30%",
      left: "30%",
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    "@media (max-width: 750px)": {
      mainWrapper: {
        display: "grid",
        flexDirection: "column",
      },
      wrapWithBackground: {
       background: "#FFFFFF",
      },
      rightCard: {
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgb(255 255 255 / 99%) 75%)",
      },
      rightCardImg: {
        position: "relative",
        zIndex: -1,
        display: "block",
        height: "40rem"
      },
      logoContainer: {
        display: "flex",
        flexDirection: "column",
        margin: "0 auto"
      },
      imgLogo: {
        margin: "0 auto",
        width: "120px",
        height: "94px",
      },
      descriptionText: {
        width: "100%",
        textAlign: "center",
        fontSize: "18px",
      }, 
      mainContainer: {
        margin: "-430px auto 0px auto",
      },
      googleAcc: {
        background: "#FFFFFF",
      },
      orTextContent: {
        background: "initial"
      },
    },
    "@media (max-width: 400px)": {
      mainContainer: {
        width: "324px",
      },
      googleAcc: {
        height: "50.4px"
      },
      googleText: {
        fontSize: "14.4px",
      },
      googleIcon: {
        width: "21.6px",
        height: "21.6px",
      },
      orstyle: {
        fontSize: "12.6px",
      },
      Emaillabel: {
        fontSize: "14.4px",
      },
      label: {
        fontSize: "14.4px",
      },
      agreeText: {
        fontSize: "12.6px",
      },
      forgotPass: {
        fontSize: "10.8px",
      },
      remember: {
        width: "18px",
        height: "18px",
      },
      signbtn: {
        height: "50.4px",
        fontSize: "14.4px",
      },
      accountLink: {
        fontSize: "14.4px",
      },
    },
    "@media (max-width: 340px)": {
      mainContainer: {
        width: "280px",
      },
    },
  });
const LoginWebWithStyle = withStyles(styles)(SignIn);
export { LoginWebWithStyle };

// Customizable Area End
