// Customizable Area Start
import React from "react";
import {
  // Customizable Area Start
  Box,
  Button,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Dialog,
  DialogContent,
  TextField
  // Customizable Area End
} from "@material-ui/core";

// Customizable Area Start
import EditIcon from "@material-ui/icons/EditOutlined";
import Select, { ValueType } from "react-select";
import * as Yup from "yup";
import { Formik, FormikErrors, FormikTouched } from "formik";
import Pagination from "@material-ui/lab/Pagination";
import CloseIcon from "@material-ui/icons/Close";
import { styled } from "@material-ui/styles";
import CustomFormController, {
  Props,
  Touched,
  Error,
  Dropdown,
  Data
} from "./CustomFormController.web";
// Customizable Area End

export default class CustomForm extends CustomFormController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  userSchema = () => {
    return Yup.object().shape({
      firstName: Yup.string().required("*First name is required!"),
      lastName: Yup.string().required("*Last name is required!"),
      phoneNumber: Yup.string().required("*Phone number is required!"),
      email: Yup.string().required("*Email is required!"),
      organization: Yup.string().required("*Organization is required!"),
      teamName: Yup.string().required("*Team name is required!"),
      userType: Yup.string().required("*User type is required!"),
      rating: Yup.string().required("*Rating type is required!"),
      gender: Yup.string().required("*Gender is required!"),
      address: Yup.string().required("*Address is required!"),
      country: Yup.string().required("*Country is required!"),
      state: Yup.string().required("*State is required!"),
      city: Yup.string().required("*City is required!"),
      file: Yup.string().required("*File is required!").nullable()
    });
  };

  getErrorMessage = (touched: FormikTouched<Touched>, errors: FormikErrors<Error>, value: string) => {
    return (
      touched[value as keyof Error] &&
      errors[value as keyof Error] && (
        <Typography
          style={{ marginTop: "2px", fontSize: "14px", color: "#f94b4b" }}
        >
          {errors[value as keyof Error]}
        </Typography>
      )
    );
  };

  getValue = (event: ValueType<Dropdown, false>) => {
    return event ? event.value : "";
  }
  // Customizable Area End

  render() {
    return (
      // Customizable Area Start
      <Box margin="35px 30px" sx={webStyle.mainWrapper}>
        <Box
          display={{ xs: "block", sm: "flex" }}
          justifyContent="space-between"
          mb="40px"
        >
          <Box>
            <Box sx={webStyle.mainTitle}>
              Manage User
            </Box>
            <Box color="#1b3c69" fontSize={{ xs: "16px", sm: "20px" }}>
              User details
            </Box>
          </Box>
          <Box mt={{ xs: "20px", sm: "0px" }}>
            <Button
              data-test-id="addUserBtn"
              onClick={this.onAddBtnClicked}
              style={{ ...webStyle.buttonStyle, marginRight: "10px", textTransform: "none" }}
            >
              Add user
            </Button>
          </Box>
        </Box>
        <Box mt="60px">
          <Box>
            <Grid container>
              <Grid item xs={12} style={{ overflow: "auto" }}>
                <Table
                  aria-label="simple table"
                  style={{
                    border: "1px solid #E0E0E0",
                    borderRadius: "10px",
                    borderCollapse: "separate",
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" style={webStyle.tableData}>First name</TableCell>
                      <TableCell align="left" style={webStyle.tableData}>Last name</TableCell>
                      <TableCell align="left" style={webStyle.tableData}>Email</TableCell>
                      <TableCell align="left" style={webStyle.tableData}>Phone number</TableCell>
                      <TableCell align="left" style={webStyle.tableData}>Organization</TableCell>
                      <TableCell align="left" style={webStyle.tableData}>Team name</TableCell>
                      <TableCell align="left" style={webStyle.tableData}>I am</TableCell>
                      <TableCell align="left" style={webStyle.tableData}>Gender</TableCell>
                      <TableCell align="left" style={webStyle.tableData}>Rating</TableCell>
                      <TableCell align="left" style={webStyle.tableData}>Address</TableCell>
                      <TableCell align="left" style={webStyle.tableData}>Country</TableCell>
                      <TableCell align="left" style={webStyle.tableData}>State</TableCell>
                      <TableCell align="left" style={webStyle.tableData}>City</TableCell>
                      <TableCell align="left" style={webStyle.tableData}>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.data.length > 0 ? (
                      <>
                        {this.state.data.map((item: Data, index: number) => (
                          <TableRow key={`${index + 1}`}>
                            <TableCell align="left" style={webStyle.tableData}>{item.firstName}</TableCell>
                            <TableCell align="left" style={webStyle.tableData}>{item.lastName}</TableCell>
                            <TableCell align="left" style={webStyle.tableData}>{item.email}</TableCell>
                            <TableCell align="left" style={webStyle.tableData}>{item.phoneNumber}</TableCell>
                            <TableCell align="left" style={webStyle.tableData}>{item.organization}</TableCell>
                            <TableCell align="left" style={webStyle.tableData}>{item.teamName}</TableCell>
                            <TableCell align="left" style={webStyle.tableData}>{item.userType}</TableCell>
                            <TableCell align="left" style={webStyle.tableData}>{item.gender}</TableCell>
                            <TableCell align="left" style={webStyle.tableData}>{item.rating}</TableCell>
                            <TableCell align="left" style={webStyle.tableData}>{item.address}</TableCell>
                            <TableCell align="left" style={webStyle.tableData}>{item.country}</TableCell>
                            <TableCell align="left" style={webStyle.tableData}>{item.state}</TableCell>
                            <TableCell align="left" style={webStyle.tableData}>{item.city}</TableCell>
                            <TableCell align="left" style={webStyle.tableData}>
                              <Box whiteSpace="noWrap">
                                <EditIcon
                                  data-test-id="editBtn"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => this.onEditBtnClicked(item)}
                                />
                              </Box>
                            </TableCell>
                          </TableRow>
                        ))}
                      </>
                    ) : (
                      <TableRow>
                        <TableCell colSpan={13} align="center" style={webStyle.noRecord}>
                          No record's found!
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
                {this.state.data.length > 0 && (
                  <div>
                    <Pagination
                      data-test-id="pagination"
                      style={webStyle.pagination}
                      page={this.state.page + 1}
                      count={Math.ceil(this.state.dataLength / this.state.rowsPerPage)}
                      onChange={(event: unknown, newPage: number) => {
                        this.onChangeHandler(newPage - 1);
                      }}
                      showFirstButton
                      showLastButton
                      variant="outlined"
                      shape="rounded"
                      siblingCount={0}
                      boundaryCount={1}
                    />
                  </div>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Dialog
          data-test-id="dialog"
          open={this.state.openDialogName === "Add" || this.state.openDialogName === "Edit"}
          fullWidth={false}
          style={webStyle.mainWrapper}
          className="automated-prioritization"
          maxWidth={"sm"}
          transitionDuration={0}
          scroll="body"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogContent style={{ padding: "0px", width: "100%" }} data-test-id="form">
            <Box style={{ textAlign: "right", margin: "10px 10px 0px 0px" }}>
              <CloseIcon
                data-test-id="closeBtn"
                onClick={this.onCancel}
                style={{
                  cursor: "pointer",
                  fontSize: "35px",
                  color: "#787878",
                }}
              />
            </Box>
            <Box padding={{ xs: "15px 25px 25px", sm: "15px 40px 40px" }}>
              <Box
                id="modal-title"
                mb="20px"
                fontFamily="Roboto, Helvetica, Arial, sans-serif"
                fontWeight="bolder"
                fontSize={{ xs: "20px", sm: "30px" }}
              >
                {this.state.openDialogName + " user"}
              </Box>
              <Formik
                data-test-id="formik"
                initialValues={{
                  firstName: this.state.firstName,
                  lastName: this.state.lastName,
                  phoneNumber: this.state.phoneNumber,
                  email: this.state.email,
                  organization: this.state.organization,
                  teamName: this.state.teamName,
                  userType: this.state.userType,
                  rating: this.state.rating,
                  gender: this.state.gender,
                  address: this.state.address,
                  country: this.state.country,
                  state: this.state.state,
                  city: this.state.city,
                  file: this.state.file
                }}
                validationSchema={this.userSchema}
                onSubmit={(values) => {
                  this.state.openDialogName === "Add"
                    ? this.onAddTask()
                    : this.onEditTask();
                }}
              >
                {({ errors, touched, setFieldValue, handleSubmit }) => (
                  <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <div style={{ marginBottom: "5px", fontSize: "16px" }}>
                          First name
                          <span style={{ color: "red" }}>*</span>
                        </div>
                        <TextField
                          data-test-id="firstName"
                          fullWidth
                          variant="outlined"
                          inputProps={{
                            style: {
                              height: "0px"
                            }
                          }}
                          placeholder="First name"
                          value={this.state.firstName}
                          onChange={(event) => {
                            this.onValueChange("firstName", event.target.value);
                            setFieldValue("firstName", event.target.value);
                          }}
                        />
                        {this.getErrorMessage(touched, errors, "firstName")}
                      </Grid>
                      <Grid item xs={12}>
                        <div style={{ marginBottom: "5px", fontSize: "16px" }}>
                          Last name
                          <span style={{ color: "red" }}>*</span>
                        </div>
                        <TextField
                          data-test-id="lastName"
                          fullWidth
                          variant="outlined"
                          inputProps={{
                            style: {
                              height: "0px"
                            }
                          }}
                          placeholder="Last name"
                          value={this.state.lastName}
                          onChange={(event) => {
                            this.onValueChange("lastName", event.target.value);
                            setFieldValue("lastName", event.target.value);
                          }}
                        />
                        {this.getErrorMessage(touched, errors, "lastName")}
                      </Grid>
                      <Grid item xs={12}>
                        <div style={{ marginBottom: "5px", fontSize: "16px" }}>
                          Phone number
                          <span style={{ color: "red" }}>*</span>
                        </div>
                        <TextField
                          data-test-id="phoneNumber"
                          fullWidth
                          variant="outlined"
                          inputProps={{
                            style: {
                              height: "0px"
                            }
                          }}
                          placeholder="Phone number"
                          value={this.state.phoneNumber}
                          onChange={(event) => {
                            this.onValueChange("phoneNumber", event.target.value);
                            setFieldValue("phoneNumber", event.target.value);
                          }}
                        />
                        {this.getErrorMessage(touched, errors, "phoneNumber")}
                      </Grid>
                      <Grid item xs={12}>
                        <div style={{ marginBottom: "5px", fontSize: "16px" }}>
                          Email
                          <span style={{ color: "red" }}>*</span>
                        </div>
                        <TextField
                          data-test-id="email"
                          fullWidth
                          variant="outlined"
                          inputProps={{
                            style: {
                              height: "0px"
                            }
                          }}
                          placeholder="Email"
                          value={this.state.email}
                          onChange={(event) => {
                            this.onValueChange("email", event.target.value);
                            setFieldValue("email", event.target.value);
                          }}
                        />
                        {this.getErrorMessage(touched, errors, "email")}
                      </Grid>
                      <Grid item xs={12}>
                        <div style={{ marginBottom: "5px", fontSize: "16px" }}>
                          Organization
                          <span style={{ color: "red" }}>*</span>
                        </div>
                        <TextField
                          data-test-id="organization"
                          fullWidth
                          variant="outlined"
                          inputProps={{
                            style: {
                              height: "0px"
                            }
                          }}
                          placeholder="Organization"
                          value={this.state.organization}
                          onChange={(event) => {
                            this.onValueChange("organization", event.target.value);
                            setFieldValue("organization", event.target.value);
                          }}
                        />
                        {this.getErrorMessage(touched, errors, "organization")}
                      </Grid>
                      <Grid item xs={12}>
                        <div style={{ marginBottom: "5px", fontSize: "16px" }}>
                          Team name
                          <span style={{ color: "red" }}>*</span>
                        </div>
                        <TextField
                          data-test-id="teamName"
                          fullWidth
                          variant="outlined"
                          inputProps={{
                            style: {
                              height: "0px"
                            }
                          }}
                          placeholder="Team name"
                          value={this.state.teamName}
                          onChange={(event) => {
                            this.onValueChange("teamName", event.target.value);
                            setFieldValue("teamName", event.target.value);
                          }}
                        />
                        {this.getErrorMessage(touched, errors, "teamName")}
                      </Grid>
                      <Grid item xs={12}>
                        <div style={{ marginBottom: "5px", fontSize: "16px" }}>
                          I am
                          <span style={{ color: "red" }}>*</span>
                        </div>
                        <Select
                          data-test-id="userType"
                          classNamePrefix="react-select"
                          placeholder="User type"
                          isSearchable={false}
                          value={
                            userTypeList.filter(
                              (option: Dropdown) =>
                                option.value === this.state.userType
                            )[0]
                          }
                          options={userTypeList}
                          onChange={(event) => {
                            const value = this.getValue(event);
                            this.onValueChange("userType", value);
                            setFieldValue("userType", value);
                          }}
                        />
                        {this.getErrorMessage(touched, errors, "userType")}
                      </Grid>
                      <Grid item xs={12}>
                        <div style={{ marginBottom: "5px", fontSize: "16px" }}>
                          Gender
                          <span style={{ color: "red" }}>*</span>
                        </div>
                        <Select
                          data-test-id="gender"
                          classNamePrefix="react-select"
                          placeholder="Gender"
                          isSearchable={false}
                          value={
                            genderList.filter(
                              (option: Dropdown) =>
                                option.value === this.state.gender
                            )[0]
                          }
                          options={genderList}
                          onChange={(event) => {
                            const value = this.getValue(event);
                            this.onValueChange("gender", value);
                            setFieldValue("gender", value);
                          }}
                        />
                        {this.getErrorMessage(touched, errors, "gender")}
                      </Grid>
                      <Grid item xs={12}>
                        <div style={{ marginBottom: "5px", fontSize: "16px" }}>
                          Rating
                          <span style={{ color: "red" }}>*</span>
                        </div>
                        <Select
                          data-test-id="rating"
                          classNamePrefix="react-select"
                          placeholder="User type"
                          isSearchable={false}
                          value={
                            ratingList.filter(
                              (option: Dropdown) =>
                                option.value === this.state.rating
                            )[0]
                          }
                          options={ratingList}
                          onChange={(event) => {
                            const value = this.getValue(event);
                            this.onValueChange("rating", value);
                            setFieldValue("rating", value);
                          }}
                        />
                        {this.getErrorMessage(touched, errors, "rating")}
                      </Grid>
                      <Grid item xs={12}>
                        <div style={{ marginBottom: "5px", fontSize: "16px" }}>
                          Address
                          <span style={{ color: "red" }}>*</span>
                        </div>
                        <TextField
                          data-test-id="address"
                          fullWidth
                          variant="outlined"
                          inputProps={{
                            style: {
                              height: "0px"
                            }
                          }}
                          placeholder="Address"
                          value={this.state.address}
                          onChange={(event) => {
                            this.onValueChange("address", event.target.value);
                            setFieldValue("address", event.target.value);
                          }}
                        />
                        {this.getErrorMessage(touched, errors, "address")}
                      </Grid>
                      <Grid item xs={12}>
                        <div style={{ marginBottom: "5px", fontSize: "16px" }}>
                          Country
                          <span style={{ color: "red" }}>*</span>
                        </div>
                        <TextField
                          data-test-id="country"
                          fullWidth
                          variant="outlined"
                          inputProps={{
                            style: {
                              height: "0px"
                            }
                          }}
                          placeholder="Country"
                          value={this.state.country}
                          onChange={(event) => {
                            this.onValueChange("country", event.target.value);
                            setFieldValue("country", event.target.value);
                          }}
                        />
                        {this.getErrorMessage(touched, errors, "country")}
                      </Grid>
                      <Grid item xs={12}>
                        <div style={{ marginBottom: "5px", fontSize: "16px" }}>
                          State
                          <span style={{ color: "red" }}>*</span>
                        </div>
                        <TextField
                          data-test-id="state"
                          fullWidth
                          variant="outlined"
                          inputProps={{
                            style: {
                              height: "0px"
                            }
                          }}
                          placeholder="State"
                          value={this.state.state}
                          onChange={(event) => {
                            this.onValueChange("state", event.target.value);
                            setFieldValue("state", event.target.value);
                          }}
                        />
                        {this.getErrorMessage(touched, errors, "state")}
                      </Grid>
                      <Grid item xs={12}>
                        <div style={{ marginBottom: "5px", fontSize: "16px" }}>
                          City
                          <span style={{ color: "red" }}>*</span>
                        </div>
                        <TextField
                          data-test-id="city"
                          fullWidth
                          variant="outlined"
                          inputProps={{
                            style: {
                              height: "0px"
                            }
                          }}
                          placeholder="City"
                          value={this.state.city}
                          onChange={(event) => {
                            this.onValueChange("city", event.target.value);
                            setFieldValue("city", event.target.value);
                          }}
                        />
                        {this.getErrorMessage(touched, errors, "city")}
                      </Grid>
                      <Grid item xs={12}>
                        <div style={{ marginBottom: "5px", fontSize: "16px" }}>
                          File
                          <span style={{ color: "red" }}>*</span>
                        </div>
                        <input
                          data-test-id="file"
                          type="file"
                          onChange={(event) => {
                            const file = event.target.files ? event.target.files[0] : null;
                            this.onFileChange(file);
                            setFieldValue("file", file);
                          }}
                        />
                        {this.getErrorMessage(touched, errors, "file")}
                      </Grid>
                    </Grid>
                    <Box mt="30px" display="flex">
                      <CancelButton data-test-id="cancelBtn" onClick={this.onCancel}>Cancel</CancelButton>
                      <SubmitButton type="submit">{this.state.openDialogName}</SubmitButton>
                    </Box>
                  </form>
                )}
              </Formik>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
      // Customizable Area End
    );
  }
}

const userTypeList: Dropdown[] = [
  { label: "Tenant", value: "Tenant" },
  { label: "Owner", value: "Owner" },
  { label: "Supervisor", value: "Supervisor" }
];

const ratingList: Dropdown[] = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" }
];

const genderList: Dropdown[] = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" }
];

const SubmitButton = styled(Button)({
  backgroundColor: "rgb(98, 0, 238)",
  color: "white",
  borderRadius: "10px",
  textTransform: "none",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontSize: "18px",
  padding: "6px 31px",
  "&:hover": {
    color: "white",
    backgroundColor: "rgb(98, 0, 238)",
  },
  "@media(max-width:600px)": {
    padding: "7px 27px",
  },
});

const CancelButton = styled(Button)({
  backgroundColor: "white",
  padding: "6px 17px",
  border: "1px solid rgb(98, 0, 238)",
  color: "rgb(98, 0, 238)",
  fontSize: "18px",
  borderRadius: "8px",
  marginRight: "15px",
  textTransform: "none",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  "&:hover": {
    backgroundColor: "white",
    color: "rgb(98, 0, 238)",
  },
  "@media(max-width:600px)": {
    padding: "7px 13px",
  },
});

const webStyle = {
  tableData: {
    fontSize: "16px",
    color: "#000",
  },
  statusColumn: {
    display: "flex",
    justifyContent: "center",
    color: "#000",
    alignItems: "center",
    fontSize: "16px",
  },
  noRecord: {
    fontSize: "18px",
    color: "#000",
  },
  mainTitle: {
    marginBottom: "5px",
    color: "#1b3c69",
    fontSize: "30px"
  },
  mainWrapper: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  },
  pagination: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "end"
  },
  buttonStyle: {
    fontSize: "18px",
    borderRadius: "8px",
    padding: "6px 17px",
    border: "none",
    backgroundColor: "rgb(98, 0, 238)",
    color: "white",
    cursor: "pointer"
  },
};
// Customizable Area End
