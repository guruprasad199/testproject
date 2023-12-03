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
  createStyles,
  Theme,
  withStyles,
} from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import SignupController, { Props } from "./SignupController.web";
import { Formik, Field, Form, ErrorMessage } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { LoginSocialGoogle } from "reactjs-social-login";
import * as Yup from "yup";
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
        <Box
          style={{
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
          }}
        >
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
        <Box className={this.props.classes?.mainWrapper}>
          <Box className={this.props.classes?.rightCard}>
            <img className={this.props.classes?.rightCardImg} src={RightImg} alt="RightImg" />
          </Box>
          <Box className={this.props.classes?.formBackground}>
            <Box>
              <Box className={this.props.classes?.formWrapper}>
                <Box>
                  <img src={Logo} alt="logo" className={this.props.classes?.logoContent}/>
                  <Typography variant="h2" className={this.props.classes?.header}>
                    Sign up Adventure Park
                  </Typography>
                </Box>
                <Box mt={"24px"}>
                <LoginSocialGoogle
                scope="https://www.googleapis.com/auth/userinfo.profile"
                client_id="412576249528-k7g422igil5cb4i9v7f4hrkm87j7dmpp.apps.googleusercontent.com"
                access_type="online"
                discoveryDocs="claims_supported"
                onResolve={({ provider, data }) => {
                  //istanbul ignore next/
                  this.getSignupData(data);
                }}
                onReject={(error) => {
                  //istanbul ignore next/
                  this.getSignupData(error);
                }}
                isOnlyGetToken={false}
              >
                <Box className={this.props.classes?.googleAcc}>
                  <img src={google} alt="google" className={this.props.classes?.iconGoogle} />
                  <Typography className={this.props.classes?.googleText}>
                    Continue with Google
                  </Typography>
                </Box>
              </LoginSocialGoogle>
                  <Box mt={"34px"} style={{ position: "relative" }} pt={"10px"}>
                    <Box className={this.props.classes?.lineHorizontal} />
                    <Box className={this.props.classes?.divider}>
                      <Typography className={this.props.classes?.textdivide}>OR</Typography>
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
                      firstName: Yup.string().required("Enter your First Name"),
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
                            <label className={this.props.classes?.label} htmlFor="firstName">
                              First Name
                            </label>

                            <Field
                              data-test-id="signupInputName"
                              className={this.props.classes?.inputFelid}
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
                                <Typography className={this.props.classes?.required}>
                                  <ErrorMessage name="firstName" />
                                </Typography>
                              }
                              InputProps={{
                                disableUnderline: true,
                              }}
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <label className={this.props.classes?.label} htmlFor="lastName">
                              Last Name
                            </label>

                            <Field
                              data-test-id="signupInputName"
                              type="text"
                              id="lastName"
                              className={this.props.classes?.inputFelid}
                              name="lastName"
                              placeholder="Last Name "
                              variant="outlined"
                              as={TextField}
                              fullWidth
                              helperText={
                                <Typography className={this.props.classes?.required}>
                                  <ErrorMessage name="lastName" />
                                </Typography>
                              }
                              InputProps={{
                                disableUnderline: true,
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <label className={this.props.classes?.label} htmlFor="email">
                              Email
                            </label>

                            <Field
                              data-test-id="signupInputEmail"
                              id="email"
                              className={this.props.classes?.inputFelid}
                              name="email"
                              placeholder="abc@gmail.com"
                              variant="outlined"
                              as={TextField}
                              fullWidth
                              helperText={
                                <Typography className={this.props.classes?.required}>
                                  <ErrorMessage name="email" />
                                </Typography>
                              }
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
                              type={
                                this.state.showPassword ? "text" : "password"
                              }
                              id="password"
                              className={this.props.classes?.inputFelid}
                              name="password"
                              variant="outlined"
                              as={TextField}
                              fullWidth
                              placeholder="**********"
                              helperText={
                                <Typography className={this.props.classes?.required}>
                                  <ErrorMessage name="password">
                                    {(errorMessage) => (
                                      <div className={this.props.classes?.errorContainer}>
                                        <div style={{ marginBottom: "5px" }}>
                                          <span className={this.props.classes?.dotColor} />
                                          <span className={this.props.classes?.errorUpdate}>
                                            At least one capital letter
                                          </span>
                                        </div>
                                        <div style={{ marginBottom: "5px" }}>
                                          <span className={this.props.classes?.dotColor} />
                                          <span className={this.props.classes?.errorUpdate}>
                                            At least one lowercase letter
                                          </span>
                                        </div>
                                        <div style={{ marginBottom: "5px" }}>
                                          <span className={this.props.classes?.dotColor} />
                                          <span className={this.props.classes?.errorUpdate}>
                                            Minimum character length is 8
                                            characters
                                          </span>
                                        </div>
                                        <div style={{ marginBottom: "5px" }}>
                                          <span className={this.props.classes?.dotColor} />
                                          <span className={this.props.classes?.errorUpdate}>
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
                            <span className={this.props.classes?.description}>
                              The password must be minimum 8 characters, include
                              at least one capital, one lowercase, one number
                              and one special character.
                            </span>
                          </Grid>
                          <Grid item xs={12}>
                            <label className={this.props.classes?.label} htmlFor="Cpassword">
                              Confirm Password
                            </label>
                            <Field
                              data-test-id="signupInputCPassword"
                              className={this.props.classes?.inputFelid}
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
                                <Typography className={this.props.classes?.required}>
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
                            <label className={this.props.classes?.label} htmlFor="Phone">
                              Mobile Number
                            </label>

                            <Field
                              name="Phone"
                              className={this.props.classes?.inputFelid}
                              data-test-id="phoneNumber"
                              render={({ field, form }: any) => (
                                <PhoneInput
                                  inputStyle={{ width: "100%", height: "56px" }}
                                  {...field}
                                  country="in"
                                  value={values.Phone}
                                  onChange={(value: any) =>
                                    form?.setFieldValue("Phone", value)
                                  }
                                  onBlur={handleBlur("Phone")}
                                  inputComponent={TextField}
                                  inputProps={{
                                    label: "Phone Number",
                                    variant: "outlined",
                                    fullWidth: true,
                                    error: form?.errors.phone && form?.touched.phone,
                                    helperText: form?.errors.phone && form?.touched.phone ? form?.errors.phone : "",
                                  }}
                                />
                              )}
                            />
                            <Typography className={this.props.classes?.required}>
                              <ErrorMessage name="Phone" />
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <label className={this.props.classes?.label} htmlFor="date">
                              Date of Birth
                            </label>
                            <Field
                              name="date"
                              className={this.props.classes?.inputFelid}
                              variant="outlined"
                              as={TextField}
                              fullWidth
                              id="date"
                              type="date"
                              InputLabelProps={{
                                disableUnderline: true,
                                endAdornment: <Visibility />,
                                max: new Date().toISOString().slice(0, 10),
                              }}
                              isdate={true}
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <label className={this.props.classes?.label} htmlFor="state">
                              State
                            </label>

                            <Field
                              data-test-id="State"
                              type="text"
                              className={this.props.classes?.inputFelid}
                              id="state"
                              name="state"
                              placeholder="Delhi"
                              variant="outlined"
                              as={TextField}
                              fullWidth
                              helperText={
                                <Typography className={this.props.classes?.required}>
                                  <ErrorMessage name="state" />
                                </Typography>
                              }
                              InputProps={{
                                disableUnderline: true,
                              }}
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <label className={this.props.classes?.label} htmlFor="City">
                              City
                            </label>

                            <Field
                              data-test-id="City"
                              className={this.props.classes?.inputFelid}
                              type="text"
                              id="City"
                              name="City"
                              placeholder="Delhi"
                              variant="outlined"
                              as={TextField}
                              fullWidth
                              helperText={
                                <Typography className={this.props.classes?.required}>
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
                              <label className={this.props.classes?.label} htmlFor="Gender">
                                Gender
                              </label>
                              <Field name="Gender" data-test-id="Gender">
                                {() => (
                                  <RadioGroup
                                    className={this.props.classes?.radioButtons}
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
                              <label className={this.props.classes?.label}>
                                Profile Photo
                              </label>
                              <Box className={this.props.classes?.imgBlock}>
                                <Box>
                                  {this.state.imageprofile === "" ? (
                                    <Box className={this.props.classes?.iconstyle}>
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
                                  className={this.props.classes?.uploadbtn}
                                >
                                  <div className={this.props.classes?.uploadImg}>
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
                                className={this.props.classes?.signbtn}
                                size="large"
                              >
                                Sign up
                              </Button>
                              <Typography className={this.props.classes?.accountLink}>
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
          {this.renderSignUpFailed()}
        </Box>
      // Customizable Area End
    );
  }
}

// Customizable Area Start
//istanbul ignore next/
const styles = (theme: Theme) =>
  createStyles({
    rightCard: {
      height: "100%",
      width: "100%",
    },
    divider: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "40%",
      background: "#fff",
      width: "60px",
    },
    lineHorizontal: {
      borderTop: "1px solid #e2e8f0",
    },
    formBackground: {
     width: "100%",
    },
    radioButtons: {
      '& .MuiSvgIcon-root': {
        width: "12px !important",
        height: "12px !important",
      },
      '& .Mui-checked svg:nth-child(2)': {
        transform: "scale(2) !important",
        width: "100px",
      },
    },
    mainWrapper: {
      display: "flex",
      flexDirection: "row-reverse",
    },
    formWrapper: {
     width: "360px",
     margin: "auto",
     paddingTop: "147px",
    },
    logoContent: {
      width: "133px", height: "104px"
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
    },
    rightCardImg: {
      width: "100%",
      height: "120rem",
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
      cursor: "pointer",
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
    uploadImg: {
      position: "absolute",
      width: "120px",
      height: "120px",
    },
    "@media (max-width: 750px)": {
      mainWrapper: {
        display: "grid",
        flexDirection: "column",
      },
      formBackground: {
        background: "#FFFFFF"
      },
      rightCard: {
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgb(255 255 255 / 99%) 88%)",
      },
      formWrapper: {
        margin: "-410px auto 0 auto",
        paddingTop: 0,
       },
       logoContent: {
        width: "120px",
        height: "94px",
        display: "flex",
        margin: "0 auto",
       },
       header: {
        width: "100%",
        textAlign: "center",
        fontSize: "18px",
      },  
      rightCardImg: {
        position: "relative",
        zIndex: -1,
        display: "block",
        height: "40rem"
      },
      googleAcc: {
        background: "#FFFFFF",
      },
      divider: {
        background: "initial"
      },
    },
    "@media (max-width: 400px)": {
      formWrapper: {
        width: "324px"
       },
       googleAcc: {
        height: "50.4px"
      },
      iconGoogle: {
        height: "21.6px",
        width: "21.6px",
      },
      label: {
        fontSize: "14.4px",
      },
      googleText: {
        fontSize: "14.4px",
      },
      inputFelid: {
        '& .MuiOutlinedInput-root': {
          height: "50px !important"
        },
      },
      uploadImg: {
        position: "absolute",
        width: "108px",
        height: "108px",
      },  
      imgBlock: {
        width: "108px",
        height: "108px",
      },
      uploadbtn: {
        fontSize: "10.8px",
      },
      accountLink: {
        fontSize: "14.4px",
      },
      signbtn: {
        height: "50.4px",
        fontSize: "14.4px",
      },
    },
    "@media (max-width: 341px)": {
      formWrapper: {
        width: "280px",
      },
    },
  });

const SignUpWithStyle = withStyles(styles)(Signup);
export { SignUpWithStyle };

// Customizable Area End
