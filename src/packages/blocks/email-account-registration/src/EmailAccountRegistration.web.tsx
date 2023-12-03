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
  FormHelperText,
  Modal,
  createStyles,
  Theme,
  withStyles,
} from "@material-ui/core";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { LoginSocialGoogle } from "reactjs-social-login";
import {
  Logo,
  RightImg,
  google,
  successLogo,
  failLogo,
  redDot,
  checkMark,
  warning,
} from "./assets";
// Customizable Area End

import EmailAccountRegistrationController, {
  Props,
  configJSON,
} from "./EmailAccountRegistrationController";

export default class EmailAccountRegistration extends EmailAccountRegistrationController {
  constructor(props: Props) {
    super(props);
  }
  // Customizable Area Start
  renderSignUpFailed = () => {
    return (
      <Modal
        open={this.state.isSignupModal}
        onClose={this.modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        data-test-id="new_spend_modal"
      >
        <Box className={this.props.classes?.popUpWrapper}>
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
            className={this.props.classes?.textTitleContent}
          >
            {this.state.registrationStatus === "success"
              ? "User Registration Successful"
              : "User Registration Failed"}
          </Typography>
          {this.state.registrationStatus !== "success" && (
            <Typography>It seems your email is already registered</Typography>
          )}
          <Link href="/Login" className={this.props.classes?.redirection}>
            Go to Login
          </Link>
        </Box>
      </Modal>
    );
  };

  renderValidationMessage = (condition: any, message: string) => {
    return (
      condition !== null && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: condition ? "7px" : "3px",
          }}
        >
          <img src={condition ? redDot : checkMark} />
          <Typography
            style={{
              color: condition ? "red" : "green",
              marginLeft: "13px",
              fontFamily: "Montserrat",
              fontSize: "14px",
              lineHeight: "24px",
            }}
          >
            {message}
          </Typography>
        </div>
      )
    );
  };
  // Customizable Area End

  render() {
    return (
      // Customizable Area Start
      <Box className={this.props.classes?.mainWrapper}>
        <Box className={this.props.classes?.rightCard}>
          <img
            className={this.props.classes?.rightCardImg}
            src={RightImg}
            alt="RightImg"
          />
        </Box>
        <Box className={this.props.classes?.formBackground}>
          <Box>
            <Box className={this.props.classes?.formWrapper}>
              <Box>
                <img
                  src={Logo}
                  alt="logo"
                  className={this.props.classes?.logoContent}
                />
                <Typography variant="h2" className={this.props.classes?.header}>
                  Sign up Adventure Park
                </Typography>
              </Box>
              <Box mt={"24px"}>
                <LoginSocialGoogle
                  scope="https://www.googleapis.com/auth/userinfo.profile"
                  client_id={configJSON.clientId}
                  access_type="online"
                  discoveryDocs="claims_supported"
                  onResolve={({ provider, data }) => {
                    //istanbul ignore next/
                    this.getSignUpData(data);
                  }}
                  onReject={(error) => {
                    //istanbul ignore next/
                    this.getSignUpData(error);
                  }}
                  isOnlyGetToken={false}
                >
                  <Box className={this.props.classes?.googleAcc}>
                    <img
                      src={google}
                      alt="google"
                      className={this.props.classes?.iconGoogle}
                    />
                    <Typography className={this.props.classes?.googleText}>
                      Continue with Google
                    </Typography>
                  </Box>
                </LoginSocialGoogle>
                <Box mt={"34px"} style={{ position: "relative" }} pt={"10px"}>
                  <Box className={this.props.classes?.lineHorizontal} />
                  <Box className={this.props.classes?.divider}>
                    <Typography className={this.props.classes?.textDivide}>
                      OR
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box mt={5}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <label
                      className={this.props.classes?.label}
                      htmlFor="firstName"
                    >
                      First Name
                    </label>

                    <TextField
                      data-test-id="signUpInputName"
                      className={this.props.classes?.inputFelid}
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      variant="outlined"
                      value={this.state.guruFirstName}
                      onChange={this.guruFirst}
                      onBlur={this.validateFirstName}
                      required
                      error={!!this.state.guruFirstNameError}
                      InputLabelProps={{
                        className: "custom-placeholder",
                      }}
                      fullWidth
                    />
                    <FormHelperText>
                      <div className={this.props.classes?.errorMessage}>
                        {this.state.guruFirstNameError}
                      </div>
                    </FormHelperText>
                  </Grid>
                  <Grid item xs={6}>
                    <label
                      className={this.props.classes?.label}
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <TextField
                      data-test-id="signUpInputName"
                      type="text"
                      id="lastName"
                      className={this.props.classes?.inputFelid}
                      name="lastName"
                      placeholder="Last Name"
                      variant="outlined"
                      value={this.state.guruLastName}
                      onChange={this.guruLast}
                      onBlur={this.validateLastName}
                      fullWidth
                      error={!!this.state.guruLastNameError}
                    />
                    <FormHelperText>
                      <div className={this.props.classes?.errorMessage}>
                        {this.state.guruLastNameError}
                      </div>
                    </FormHelperText>
                  </Grid>
                  <Grid item xs={12}>
                    <label
                      className={this.props.classes?.label}
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <TextField
                      data-test-id="signUpInputEmail"
                      id="email"
                      className={this.props.classes?.inputFelid}
                      name="email"
                      placeholder="abc@gmail.com"
                      variant="outlined"
                      fullWidth
                      error={!!this.state.formErrors.email}
                      onChange={this.handleEmail}
                      onBlur={this.validateEmail}
                    />
                    <FormHelperText>
                      {this.state.guruEmailError.length !== 0 && (
                        <div className={this.props.classes?.errorMessage}
                        >
                          <img
                            src={warning}
                            alt="warning"
                            style={{ marginRight: "5px", marginBottom: "4px" }}
                          />
                          Please enter a valid email address
                        </div>
                      )}
                    </FormHelperText>
                  </Grid>
                  <Grid item xs={12}>
                    <label
                      className={this.props.classes?.label}
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <TextField
                      name="password"
                      variant="outlined"
                      placeholder="**********"
                      type={this.state.confirmPassword ? "text" : "password"}
                      className={this.props.classes?.inputFelid}
                      value={this.state.newPaasword}
                      onChange={this.passwordHandleChange}
                      onBlur={this.handleBlurNew}
                      fullWidth
                      required
                      error={
                        !!this.state.passwordErrors.capitalLetter ||
                        !!this.state.passwordErrors.lowerCaseLetter ||
                        !!this.state.passwordErrors.oneNumber ||
                        !!this.state.passwordErrors.specialCharacter ||
                        !!this.state.passwordErrors.eightCharacter
                      }
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowConfirmPassword}
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
                    <FormHelperText
                      className={this.props.classes?.passwordWrap}
                    >
                      {this.renderValidationMessage(
                        this.state.passwordErrors.capitalLetter,
                        "At least one capital letter"
                      )}
                      {this.renderValidationMessage(
                        this.state.passwordErrors.lowerCaseLetter,
                        "At least one lowercase letter"
                      )}
                      {this.renderValidationMessage(
                        this.state.passwordErrors.eightCharacter,
                        "Minimum character length is 8 characters"
                      )}
                      {this.renderValidationMessage(
                        this.state.passwordErrors.oneNumber,
                        "At least one number"
                      )}
                      {this.renderValidationMessage(
                        this.state.passwordErrors.specialCharacter,
                        "At least one special character"
                      )}
                    </FormHelperText>
                    <span className={this.props.classes?.description}>
                      The password must be minimum 8 characters, include at
                      least one capital, one lowercase, one number and one
                      special character.
                    </span>
                  </Grid>
                  <Grid item xs={12}>
                    <label
                      className={this.props.classes?.label}
                      htmlFor="Cpassword"
                    >
                      Confirm Password
                    </label>
                    <TextField
                      data-test-id="signupInputCPassword"
                      className={this.props.classes?.inputFelid}
                      type={this.state.confirmPassword ? "text" : "password"}
                      id="Cpassword"
                      name="confirmPassword"
                      placeholder="**********"
                      variant="outlined"
                      fullWidth
                      required
                      error={!!this.state.passwordMatchError}
                      onChange={this.handleConfirmPasswordChange}
                      onBlur={this.handleConfirmPasswordBlur}
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowConfirmPassword}
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
                    <FormHelperText>
                      <div
                        style={{
                          color: "red",
                          marginTop: "10px",
                          fontFamily: "Montserrat",
                          marginBottom: "10px",
                          fontSize: "11px",
                        }}
                      >
                        {this.state.passwordMatchError}
                      </div>
                    </FormHelperText>
                  </Grid>
                  <Grid item xs={6}>
                    <label
                      className={this.props.classes?.label}
                      htmlFor="Phone"
                    >
                      Mobile Number
                    </label>

                    <PhoneInput
                      inputStyle={{ width: "100%", height: "60px" }}
                      country={"in"}
                      value={this.state.guruMobileNumber}
                      onChange={this.handlePhoneNumberChange}
                    />
                    <div
                      className={this.props.classes?.errorMessage}
                    >
                      {this.state.isPhoneNumberValid}
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <label
                      className={this.props.classes?.dateOfBirthLabel}
                      htmlFor="date"
                    >
                      Date of Birth
                    </label>
                    <TextField
                      name="date"
                      className={this.props.classes?.inputFelid}
                      variant="outlined"
                      fullWidth
                      id="date"
                      type="date"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label
                      className={this.props.classes?.label}
                      htmlFor="state"
                    >
                      State
                    </label>
                    <TextField
                      data-test-id="State"
                      type="text"
                      className={this.props.classes?.inputFelid}
                      id="state"
                      name="state"
                      placeholder="Delhi"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label className={this.props.classes?.label} htmlFor="City">
                      City
                    </label>
                    <TextField
                      data-test-id="City"
                      className={this.props.classes?.inputFelid}
                      type="text"
                      id="City"
                      name="City"
                      placeholder="Delhi"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box className={this.props.classes?.genderContent}>
                      <label
                        className={this.props.classes?.label}
                        htmlFor="Gender"
                      >
                        Gender
                      </label>
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
                                className={this.props.classes?.imageReader}
                              >
                                +
                              </Typography>
                            </Box>
                          ) : (
                            <Box>
                              <img
                                src={this.state.imageprofile}
                                alt=""
                                className={this.props.classes?.imageIcon}
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
                    <Box className={this.props.classes?.signUpButtonWrap}>
                      <Button
                        onClick={this.handleSubmitNew}
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
                          className={this.props.classes?.linkContainer}
                        >
                          Sign in
                        </Link>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
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
      "& .MuiSvgIcon-root": {
        width: "12px !important",
        height: "12px !important",
      },
      "& .Mui-checked svg:nth-child(2)": {
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
    signUpButtonWrap: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    emailErrorText: {

    },
    linkContainer: {
      color: "#2B65EC",
      fontFamily: "Montserrat",
      fontWeight: 700,
    },
    redirection: {
      color: "#2B65EC",
      fontWeight: 700,
      marginTop: "10px",
      fontFamily: "Montserrat",
    },
    passwordWrap: {
      marginTop: "10px",
      fontFamily: "Montserrat",
      marginLeft: "-3px",
      marginBottom: "10px",
      fontSize: "11px",
    },
    imageIcon: {
      width: "80px",
      height: "80px",
    },
    genderContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logoContent: {
      width: "133px",
      height: "104px",
    },
    imageReader: {
      color: "white",
      fontSize: "14px",
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
    textTitleContent: {
      color: "#000000",
      fontWeight: 600,
      marginTop: "10px",
      fontFamily: "Montserrat",
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
    textDivide: {
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
    errorMessage: {
      color: "red",
      marginTop: "10px",
      fontFamily: "Montserrat",
      marginBottom: "10px",
      fontSize: "11px",
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

    accountLink: {
      textAlign: "left",
      color: "#0F172A",
      fontSize: "16px",
      lineHeight: "30px",
      fontFamily: "Montserrat,sans-serif",
    },

    Loginblock: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
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
      "&:hover": {
        background: "#7089c3",
        color: "#fff",
      },
    },
    dateOfBirthLabel: {
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "16px",
      marginBottom: "14px",
      fontFamily: "Montserrat, sans-serif",
      color: "#334155",
    },
    popUpWrapper: {
      background: "#FFFAFA",
      width: "390px",
      border: "1px solid black",
      height: "250px",
      position: "absolute",
      top: "50%",
      left: "50%",
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      transform: "translate(-50%, -50%)",
    },
    label: {
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "16px",
      marginBottom: "10px",
      fontFamily: "Montserrat, sans-serif",
      color: "#334155",
    },
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
    },

    required: {
      color: "red",
      marginTop: "10px",
      fontSize: "11px",
      fontFamily: "Montserrat,sans-serif",
    },

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
        background: "#FFFFFF",
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
        height: "40rem",
      },
      googleAcc: {
        background: "#FFFFFF",
      },
      divider: {
        background: "initial",
      },
    },
    "@media (max-width: 400px)": {
      popUpWrapper: {
        width: "320px",
      },
      formWrapper: {
        width: "324px",
      },
      googleAcc: {
        height: "50.4px",
      },
      iconGoogle: {
        height: "21.6px",
        width: "21.6px",
      },
      label: {
        fontSize: "14.4px",
      },
      dateOfBirthLabel: {
        fontSize: "14.4px",
      },
      googleText: {
        fontSize: "14.4px",
      },
      inputFelid: {
        "& .MuiOutlinedInput-root": {
          height: "50px !important",
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

const EmailAccountRegistrationWithStyle = withStyles(styles)(
  EmailAccountRegistration
);
export { EmailAccountRegistrationWithStyle };
// Customizable Area End
