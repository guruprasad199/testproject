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
  Modal,
} from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import SignInController, { Props } from "./LogInController.web";
import { Formik, Field, Form, ErrorMessage, getIn } from "formik";
import * as Yup from "yup";
import { Logo, RightImg, crossImg, google, warning } from "./assets";
import { LoginSocialGoogle } from "reactjs-social-login";

// Customizable Area End

export default class SignIn extends SignInController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }
  // Customizable Area Start
  renderFlatlist = () => {
    return (
      <Modal
        open={this.state.isModalOpen}
        onClose={this.handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        data-testid="new_spend_modal"
      >
        <Box style={webStyle.modalContainer}>
          <img src={crossImg} alt="crossIcon" style={{ width: "50px" }} />
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{
              color: "#000000",
              fontFamily: "Montserrat",
              fontWeight: 500,
              marginTop: "15px",
            }}
          >
            Login Failed
          </Typography>
        </Box>
      </Modal>
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
            <div style={webStyle.emailLoginError}>
              <img src={warning} alt="warning" style={webStyle.customError} />
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

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ width: "100%" }}>
          <Box style={webStyle.mainContainer}>
            <Box>
              <img src={Logo} alt="logo" />
              <Typography
                variant="h4"
                style={{
                  marginTop: "20px",
                  lineHeight: "2",
                  fontSize: "20px",
                  fontWeight: 700,
                  fontFamily: "Montserrat, sans-serif",
                  letterSpacing: "-0.12px",
                  width: "241px",
                }}
              >
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
                  this.getProfileData(data)
                }}
                onReject={(error) => {
                  this.getProfileData(error)
                }}
                isOnlyGetToken={false}
              >
                <Box style={webStyle.googleAcc}>
                  <img src={google} alt="google" />
                  <Typography
                    style={{
                      fontFamily: "Montserrat,sans-serif",
                      fontSize: "16px",
                      color: "#0F172A",
                      fontWeight: 600,
                    }}
                  >
                    Continue with Google
                  </Typography>
                </Box>
              </LoginSocialGoogle>
              <Box mt={"34px"} style={{ position: "relative" }} pt={"10px"}>
                <Box style={{ borderTop: "1px solid #E2E8F0" }}></Box>
                <Box
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: "40%",
                    background: "#fff",
                    width: "60px",
                  }}
                >
                  <Typography style={webStyle.orstyle}>OR</Typography>
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
                      <label style={webStyle.Emaillabel} htmlFor="email">
                        Email
                      </label>

                      <Field
                        className="email"
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
                      <label style={webStyle.label} htmlFor="password">
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
                          <Typography style={webStyle.required}>
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
                      <span style={webStyle.description}>
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
                          href="/ForgotPassword"
                          style={{
                            color: "#FF3131",
                            textAlign: "right",
                            fontFamily: "Montserrat",
                            fontSize: "12px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "normal",
                            letterSpacing: "-0.12px",
                          }}
                        >
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
                          style={webStyle.remember}
                        />
                        <label htmlFor="remember" style={webStyle.agreeText}>
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
                      <Typography style={webStyle.rememberRequired}>
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
                          style={webStyle.signbtn}
                          size="large"
                        >
                          Sign in
                        </Button>
                        <Typography style={webStyle.accountLink}>
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
        <Box style={webStyle.rightCard}>
          <img style={webStyle.rightCardImg} src={RightImg} alt="RightImg" />
        </Box>
        {this.renderFlatlist()}
      </div>

      // Customizable Area End
    );
  }
}

// Customizable Area Start
const webStyle = {
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
  } as React.CSSProperties,

  googleAcc: {
    border: "1px solid #CBD5E1",
    padding: "10px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    height: "56px",
  },

  customEmail: {
    width: "100%",
    height: "56px",
    borderRadius: "4px",
  },

  orstyle: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#64748B",
    textAlign: "center",
    fontFamily: "Montserrat,sans-serif",
    width: "23px",
    margin: "0 20px",
  } as React.CSSProperties,

  accountLink: {
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "16px",
    lineHeight: "30px",
    fontWeight: 400,
    color: "#0F172A",
  } as React.CSSProperties,

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
  } as React.CSSProperties,
  label: {
    fontStyle: "normal",
    fontWeight: 700,
    marginBottom: "10px",
    fontFamily: "Montserrat, sans-serif",
    color: "#0F172A",
    fontSize: "16px",
    letterSpacing: "0.2px",
  } as React.CSSProperties,

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
  } as React.CSSProperties,

  emailLoginError: {
    color: "red",
    marginTop: "10px",
    fontFamily: "Montserrat",
    marginLeft: "-3px",
    marginBottom: "10px",
    fontSize: "11px",
  } as React.CSSProperties,

  passwordError: {
    color: "red",
    marginTop: "10px",
    fontFamily: "Montserrat",
    marginBottom: "10px",
    fontSize: "11px",
  } as React.CSSProperties,

  customError: {
    marginRight: "5px",
    marginBottom: "4px",
  } as React.CSSProperties,

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
  } as React.CSSProperties,
};

// Customizable Area End
