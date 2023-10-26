//@ts-nocheck
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
  RadioGroup,
  Radio,
  FormControlLabel,
  Modal,
} from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import SignupController, { Props } from "./SignupController.web";
import { Formik, Field, Form, ErrorMessage } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as Yup from "yup";
import "./Signup.web.css";
import { Logo, RightImg, google, successLogo, failLogo } from "./assets";
// Customizable Area End

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000ff",
      contrastText: "#fff",
    },
  },
});

export default class Signup extends SignupController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }
  // Customizable Area Start
  renderSignUpFailed = () => {
    return (
      <Modal
        open={this.state.isSignupModal}
        onClose={this.modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        data-testid="new_spend_modal"
      >
        <Box style={webStyle.modalContainer}>
          <img
            src={
              this.state.registrationStatus === "success"
                ? successLogo
                : failLogo
            }
            alt="successLogo"
            style={{ width: "50px" }}
          />
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{
              color: "#000000",
              fontWeight: 600,
              marginTop: "10px",
              fontFamily: "Montserrat",
            }}
          >
            {this.state.registrationStatus === "success"
              ? "User Registration Successful"
              : "User Registration Failed"}
          </Typography>
          {this.state.registrationStatus !== "success" && (
            <Typography>It seems your email is invalid</Typography>
          )}
          <Link
            href="/Login"
            style={{
              color: "#2B65EC",
              fontWeight: 700,
              marginTop: "10px",
              fontFamily: "Montserrat",
            }}
          >
            Go to Login
          </Link>
        </Box>
      </Modal>
    );
  };

  // Customizable Area End
  render() {
    //istanbul ignore next/
    return (
      // Customizable Area Start
      // Required for all blocks
      <ThemeProvider theme={theme}>
        <Box    
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box>
              <Box width="360px" margin="auto" pt={"147px"}> 
                <Box>
                  <img
                    src={Logo}
                    alt="logo"
                    style={{ width: "133px", height: "104px" }}
                  />
                  <Typography variant="h2" style={webStyle.header}>
                    Sign up Adventure Park
                  </Typography>
                </Box>
                <Box mt={"24px"}>
                  <Box style={webStyle.googleAcc}>
                    <img src={google} alt="google" />
                    <Typography style={webStyle.googleText}>
                      Continue with Google{" "}
                    </Typography>
                  </Box>
                  <Box mt={"34px"} style={{ position: "relative" }} pt={"10px"}>
                    <Box className="lineHorizontal"></Box>
                    <Box className="divider">
                      <Typography style={webStyle.textdivide}>OR</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box mt={5}>
                  <Formik
                    data-test-id="FormikID"
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      email: "",
                      Phone: "",
                      password: "",
                      Cpassword: "",
                      Gender: "male",
                      date: "",
                    }}
                    validationSchema={Yup.object().shape({
                      firstName: Yup.string().required("Enter your Full Name"),
                      lastName: Yup.string().required("Enter your Last Name"),
                      email: Yup.string().required("Enter your Email Address "),
                      password: Yup.string()
                        .min(8, "Password must be at least 8 characters")
                        .matches(
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
                          "Password must contain at least one uppercase letter, one lowercase letter, and one number"
                        )
                        .required("Password is required"),
                      Cpassword: Yup.string()
                        .oneOf(
                          [Yup.ref("password"), null],
                          "Passwords must match"
                        )
                        .required("Confirm Password is required"),
                      Gender: Yup.string().required(
                        "Please select your Gender"
                      ),

                      Phone: Yup.string().required("Phone number is required"),
                    })}
                    onSubmit={(values) => {
                      this.handleSubmit(values);
                    }}
                  >
                    {({ values, handleChange, handleBlur }) => (
                      <Form translate={undefined}>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <label style={webStyle.label} htmlFor="firstName">
                              First Name
                            </label>

                            <Field
                              data-test-id="signupInputName"
                              className="textfield"
                              type="text"
                              id="firstName"
                              name="firstName"
                              placeholder="First Name"
                              variant="outlined"
                              as={TextField}
                              InputLabelProps={{
                                className: "custom-placeholder", // Apply the CSS class
                              }}
                              fullWidth
                              helperText={
                                <Typography style={webStyle.required}>
                                  <ErrorMessage name="firstName" />
                                </Typography>
                              }
                              InputProps={{
                                disableUnderline: true,
                              }}
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <label style={webStyle.label} htmlFor="lastName">
                              Last Name
                            </label>

                            <Field
                              data-test-id="signupInputName"
                              type="text"
                              id="lastName"
                              className="textfield"
                              name="lastName"
                              placeholder="Last Name "
                              variant="outlined"
                              as={TextField}
                              fullWidth
                              helperText={
                                <Typography style={webStyle.required}>
                                  <ErrorMessage name="lastName" />
                                </Typography>
                              }
                              InputProps={{
                                disableUnderline: true,
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <label style={webStyle.label} htmlFor="email">
                              Email
                            </label>

                            <Field
                              data-test-id="signupInputEmail"
                              id="email"
                              className="textfield"
                              name="email"
                              placeholder="abc@gmail.com"
                              variant="outlined"
                              as={TextField}
                              fullWidth
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
                            <label style={webStyle.label} htmlFor="password">
                              Password
                            </label>

                            <Field
                              data-test-id="signupInputPassword"
                              type={
                                this.state.showPassword ? "text" : "password"
                              }
                              id="password"
                              className="textfield"
                              name="password"
                              variant="outlined"
                              as={TextField}
                              fullWidth
                              placeholder="**********"
                              helperText={
                                <Typography style={webStyle.required}>
                                  <ErrorMessage name="password">
                                    {(errorMessage) => (
                                      <div style={webStyle.errorContainer}>
                                        <div style={{ marginBottom: "5px" }}>
                                          <span
                                            style={webStyle.dotColor}
                                          ></span>
                                          <span style={webStyle.errorUpdate}>
                                            At least one capital letter
                                          </span>
                                        </div>
                                        <div style={{ marginBottom: "5px" }}>
                                          <span
                                            style={webStyle.dotColor}
                                          ></span>
                                          <span style={webStyle.errorUpdate}>
                                            At least one lowercase letter
                                          </span>
                                        </div>
                                        <div style={{ marginBottom: "5px" }}>
                                          <span
                                            style={webStyle.dotColor}
                                          ></span>
                                          <span style={webStyle.errorUpdate}>
                                            Minimum character length is 8
                                            characters
                                          </span>
                                        </div>
                                        <div style={{ marginBottom: "5px" }}>
                                          <span
                                            style={webStyle.dotColor}
                                          ></span>
                                          <span style={webStyle.errorUpdate}>
                                            Atleast one number
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                  </ErrorMessage>
                                </Typography>
                              }
                              InputProps={{
                                disableUnderline: true,
                                endAdornment: (
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={this.handleClickShowPassword}
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
                              The password must be minimum 8 characters, include
                              at least one capital, one lowercase, one number
                              and one special character.
                            </span>
                          </Grid>
                          <Grid item xs={12}>
                            <label style={webStyle.label} htmlFor="Cpassword">
                              Confirm Password
                            </label>
                            <Field
                              data-test-id="signupInputCPassword"
                              className="textfield"
                              type={
                                this.state.confirmPassword ? "text" : "password"
                              }
                              id="Cpassword"
                              name="Cpassword"
                              placeholder="**********"
                              variant="outlined"
                              as={TextField}
                              fullWidth
                              helperText={
                                <Typography style={webStyle.required}>
                                  <ErrorMessage name="Cpassword" />
                                </Typography>
                              }
                              InputProps={{
                                disableUnderline: true,
                                endAdornment: (
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={
                                      this.handleClickShowConfirmPassword
                                    }
                                  >
                                    {this.state.confirmPassword ? (
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                ),
                              }}
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <label style={webStyle.label} htmlFor="Phone">
                              Mobile Number
                            </label>

                            <Field
                              name="Phone"
                              className="textfield"
                              data-test-id="phoneNumber"
                              style={{ width: "100px", padding: "10px" }}
                              render={({ field, form }: any) => (
                                <PhoneInput
                                  {...field}
                                  country="in"
                                  value={values.Phone}
                                  onChange={(value: any) =>
                                    form.setFieldValue("Phone", value)
                                  }
                                  onBlur={handleBlur("Phone")}
                                  inputComponent={TextField}
                                  inputProps={{
                                    label: "Phone Number",
                                    variant: "outlined",
                                    fullWidth: true,
                                    error:
                                      form?.errors.phone && form?.touched.phone,
                                    helperText:
                                      form?.errors.phone && form?.touched.phone
                                        ? form?.errors.phone
                                        : "",
                                  }}
                                />
                              )}
                            />
                            <Typography style={webStyle.required}>
                              <ErrorMessage name="Phone" />
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <label style={webStyle.label} htmlFor="date">
                              Date of Birth
                            </label>
                            <Field
                              name="date"
                              className="textfield"
                              variant="outlined"
                              as={TextField}
                              fullWidth
                              id="date"
                              type="date"
                              InputLabelProps={{
                                // shrink: true,
                                disableUnderline: true,
                                endAdornment: <Visibility />,
                                max: new Date().toISOString().slice(0, 10),
                              }}
                              isdate={true}
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <label style={webStyle.label} htmlFor="state">
                              State
                            </label>

                            <Field
                              data-test-id="State"
                              type="text"
                              className="textfield"
                              id="state"
                              name="state"
                              placeholder="Delhi"
                              variant="outlined"
                              as={TextField}
                              fullWidth
                              helperText={
                                <Typography style={webStyle.required}>
                                  <ErrorMessage name="state" />
                                </Typography>
                              }
                              InputProps={{
                                disableUnderline: true,
                              }}
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <label style={webStyle.label} htmlFor="City">
                              City
                            </label>

                            <Field
                              data-test-id="City"
                              className="textfield"
                              type="text"
                              id="City"
                              name="City"
                              placeholder="Delhi"
                              variant="outlined"
                              as={TextField}
                              fullWidth
                              helperText={
                                <Typography style={webStyle.required}>
                                  <ErrorMessage name="City" />
                                </Typography>
                              }
                              InputProps={{
                                disableUnderline: true,
                              }}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <Box
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <label style={webStyle.label} htmlFor="Gender">
                                Gender
                              </label>
                              <Field name="Gender" data-test-id="Gender">
                                {() => (
                                  <RadioGroup
                                    className="radioButtons"
                                    name="Gender"
                                    value={values.Gender}
                                    onChange={handleChange}
                                    row
                                  >
                                    <FormControlLabel
                                      value="male"
                                      control={<Radio color="primary" />}
                                      label="Male"
                                      style={{
                                        fontFamily: "Montserrat,sans-serif",
                                      }}
                                    />
                                    <FormControlLabel
                                      value="female"
                                      control={<Radio color="primary" />}
                                      label="Female"
                                      style={{
                                        fontFamily: "Montserrat,sans-serif",
                                      }}
                                    />
                                  </RadioGroup>
                                )}
                              </Field>
                            </Box>
                          </Grid>

                          <Grid item>
                            <Box>
                              <label style={webStyle.label}>
                                Profile Photo
                              </label>
                              <Box style={webStyle.imgBlock}>
                                <Box>
                                  {this.state.imageprofile === "" ? (
                                    <Box style={webStyle.iconstyle}>
                                      <Typography
                                        style={{
                                          color: "white",
                                          fontSize: "14px",
                                        }}
                                      >
                                        +
                                      </Typography>
                                    </Box>
                                  ) : (
                                    <Box>
                                      <img
                                        src={this.state.imageprofile}
                                        alt=""
                                        style={{
                                          width: "80px",
                                          height: "80px",
                                        }}
                                      />
                                    </Box>
                                  )}
                                </Box>
                                <Button
                                  component="label"
                                  style={webStyle.uploadbtn}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      width: "120px",
                                      height: "120px",
                                    }}
                                  >
                                    <input
                                      type="file"
                                      data-test-id="uploadImage"
                                      hidden
                                      onChange={this.ReaderImg}
                                    />
                                  </div>
                                  Upload Image
                                </Button>
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={12}>
                            <Box
                              display={"flex"}
                              flexDirection={"column"}
                              style={{ gap: "10px" }}
                            >
                              <Button
                                data-test-id="buttonSubmit"
                                type="submit"
                                style={webStyle.signbtn}
                                size="large"
                              >
                                Sign up
                              </Button>
                              <Typography style={webStyle.accountLink}>
                                Already have an account?{" "}
                                <Link
                                  href="/LogIn"
                                  style={{
                                    color: "#2B65EC",
                                    fontFamily: "Montserrat",
                                    fontWeight: 700,
                                  }}
                                >
                                  Sign in
                                </Link>
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Form>
                    )}
                  </Formik>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box style={webStyle.rightCard}>
            <img className="rightCardImg" src={RightImg} alt="RightImg" />
          </Box>
          {this.renderSignUpFailed()}
        </Box>
      </ThemeProvider>
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
  header: {
    marginTop: "24px",
    lineHeight: "2",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Montserrat,sans-serif",
    color: "#0F172A",
    letterSpacing: "-0.12px",
    width: "248px",
  } as React.CSSProperties,
  rightCardImg: {
    width: "100%",
  },
  errorUpdate: {
    marginBottom: "10px",
    color: "#FF3131",
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
  },
  dotColor: {
    height: "5px",
    width: "5px",
    backgroundColor: "red",
    borderRadius: "50%",
    display: "inline-block",
    margin: "0px 8px 2px 0px",
  },
  textdivide: {
    fontSize: "14px",
    fontWeight: "bold",
    fontFamily: "Montserrat,sans-serif",
    color: "#64748B",
    textAlign: "center",
    width: "23px",
    margin: "0 20px",
  },
  googleText: {
    fontFamily: "Montserrat,sans-serif",
    fontSize: "16px",
    color: "#0F172A",
    fontWeight: 600,
  },
  googleAcc: {
    border: "1px solid grey",
    padding: "10px",
    height: "56px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  errorContainer: {
    margin: "0px 0px 0px -10px",
  },
  imgBlock: {
    border: "1px solid grey",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    borderRadius: "5px",
    width: "120px",
    height: "120px",
  } as React.CSSProperties,

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

  accountLink: {
    textAlign: "left",
    color: "#0F172A",
    fontSize: "16px",
    lineHeight: "30px",
    fontFamily: "Montserrat,sans-serif",
  } as React.CSSProperties,

  Loginblock: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  } as React.CSSProperties,
  signbtn: {
    background: "#2B65EC",
    borderRadius: "10px",
    width: "100%",
    height: "56px",
    color: "#fff",
    fontFamily: "Montserrat,sans-serif",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18px",
    textTransform: "none",
    margin: "32px auto 32px auto",
  } as React.CSSProperties,

  label: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    marginBottom: "10px",
    fontFamily: "Montserrat, sans-serif",
    color: "#334155",
  } as React.CSSProperties,
  iconstyle: {
    borderRadius: "2px",
    background: "#999999",
    width: "20px",
    height: "20px",
    margin: "auto",
  },
  uploadbtn: {
    background: "transparent",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "12px",
    color: "#666666",
    fontStyle: "normal",
    textTransform: "capitalize",
    position: "relative",
  } as React.CSSProperties,

  required: {
    color: "red",
    marginTop: "10px",
    fontSize: "11px",
    fontFamily: "Montserrat,sans-serif",
  } as React.CSSProperties,

  title: {
    lineHeight: "2",
    fontSize: "36px",
    fontFamily: "Montserrat,sans-serif",
    color: "#323548",
    fontWeight: 700,
  },
  description: {
    color: "#64748B",
    fontWeight: 400,
    fontSize: "11px",
    fontFamily: "Montserrat",
    marginTop: "10px",
  },
};
// Customizable Area End
