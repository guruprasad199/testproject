import React from "react";

import {
  Container,
  Box,
  Input,
  Button,
  InputLabel,
  Typography,
  InputAdornment,
  IconButton,
  // Customizable Area Start
  TextField,
  // Customizable Area End
} from "@material-ui/core";

// Customizable Area Start
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from '@material-ui/icons/Delete';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
//@ts-ignore
import { Helmet } from 'react-helmet';

const theme = createTheme({
  typography: {
    h6: {
      fontWeight: 500,
    },
    subtitle1: {
      margin: "20px 0px",
    },
  },
});
// Customizable Area End

import SearchengineoptimisationseoController, {
  Props,
  configJSON,
} from "./SearchengineoptimisationseoController";

export default class Searchengineoptimisationseo extends SearchengineoptimisationseoController {
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
      <ThemeProvider theme={theme}>
        <Container maxWidth={"sm"}>
          <Box sx={webStyle.mainWrapper}>
            { this.state.activePage === 'landingPage' && (
              <>
                <Button 
                  data-test-id="seoSettingButton" 
                  variant="contained" 
                  style={webStyle.buttonStyle} 
                  onClick={() => { 
                    this.handleSetActivePage("seoSettingsPage")
                    this.handleFetchSeoSettingsApiAction(configJSON.getAPIMethod, null)
                  }}>SEO Settings</Button>
                <Button 
                  data-test-id="displayWebsiteButton" 
                  variant="contained" 
                  style={webStyle.buttonStyle} 
                  onClick={() => {
                      this.handleSetActivePage("displayWebsitePage")
                      this.handleFetchSeoSettingsApiAction(configJSON.getAPIMethod, null)
                    }
                  }>Display Website</Button>
              </>
            )}
            { this.state.activePage === 'seoSettingsPage' && (
              <>
                <Button data-test-id="backToLandingButton1" variant="contained" style={webStyle.buttonStyle} onClick={() => this.handleSetActivePage("landingPage")}>Back</Button>
                <Button 
                  data-test-id="createPageButton" 
                  variant="contained"
                  style={webStyle.buttonStyle1} 
                  onClick={() => this.handleCreatePageAction({page_name: "", meta_title: "", meta_description: "", page_id: null})}>
                  Create Page
                </Button>
                { this.state.pages.map((page, index) => {
                  return (
                    <Box sx={webStyle.mainWrapper5} key={page.attributes.page_name}>
                      {page.attributes.page_name}
                       <Box sx={webStyle.mainWrapper4}>
                        <Button 
                          data-test-id={`editButton${index}`} style={webStyle.buttonStyle3} 
                          onClick={() => this.handleCreatePageAction({page_name: page.attributes.page_name, meta_title: page.attributes.meta_title, meta_description: page.attributes.meta_description, page_id: page.attributes.id})}>
                          <EditIcon/>
                        </Button>
                        <Button data-test-id={`deleteButton${index}`} style={webStyle.buttonStyle3} onClick={() => this.handleDeletePageAction(page.attributes.id)}><DeleteIcon/></Button>
                      </Box>
                    </Box>
                  )
                })}
              </>
            )} 
            { this.state.activePage === 'displayWebsitePage' && (
              <>
                <Button data-test-id="backToLandingButton2" variant="contained" style={webStyle.buttonStyle} onClick={() => this.handleSetActivePage("landingPage")}>Back</Button>
                <Box sx={webStyle.mainWrapper6}>
                  <Typography variant="h4">Display Website</Typography>
                </Box>
                <Box sx={webStyle.mainWrapper}>
                  { this.state.pages.map((page, index) => {
                    return (
                      <Button data-test-id={`openWebsiteButton${index}`} style={webStyle.buttonStyle1} onClick={() => this.handleOpenWebsiteAction(page.attributes.id)} key={page.attributes.id}>{page.attributes.page_name}</Button>
                    )
                  })}
                </Box>
              </>
            )}
            { this.state.activePage === 'createPage' && (
              <>
                <Box sx={webStyle.mainWrapper3}>
                  <TextField 
                    id="standard-basic"
                    data-test-id="pageNameInput"
                    label="Page Name"
                    value={this.state.page_name}
                    required
                    error={this.state.errors.page_name}
                    onChange={(event) => this.handlePageNameOnChangeAction(event.target.value)}
                    style={webStyle.textFieldStyle}
                  />
                  <TextField 
                    id="standard-basic"
                    data-test-id="metaTitleInput"
                    label="Meta Title"
                    value={this.state.meta_title}
                    required
                    error={this.state.errors.meta_title}
                    onChange={(event) => this.handleMetaTitleOnChangeAction(event.target.value)}
                    style={webStyle.textFieldStyle}
                  />
                  <TextField 
                    id="standard-basic"
                    data-test-id="metaDescriptionButton"
                    label="Meta Description"
                    value={this.state.meta_description}
                    required
                    error={this.state.errors.meta_description}
                    onChange={(event) => this.handleMetaDescriptionOnChangeAction(event.target.value)}
                    style={webStyle.textFieldStyle}
                  />
                </Box>
                <Box sx={webStyle.mainWrapper2}>
                  <Button data-test-id="saveButton" variant="contained" style={webStyle.buttonStyle2} onClick={() => this.handleSaveAction()}>Save</Button>
                  <Button data-test-id="backToLandingButton3" variant="contained" style={webStyle.buttonStyle2} onClick={() => this.handleSetActivePage("seoSettingsPage")}>Back</Button> 
                </Box>
              </>
            )} 
          </Box>
        </Container>

        {this.state.activePage === 'redirectedPage' && (
          <Container maxWidth={"sm"}>
            {this.state.page_id && (
              <Helmet>
                <meta name="description" content={this.state.meta_description} />
                <meta name="og:description" content={this.state.meta_description} />
                <meta property="title" content={this.state.meta_title} />
                <meta property="og:title" content={this.state.meta_title} />
              </Helmet>
            )}
            <Button 
              data-test-id="backToDisplayWebsitePage" 
              variant="contained" 
              style={webStyle.buttonStyle} 
              onClick={() => { this.handleBacktoDisplayPageAction()}}
            >
              Back
            </Button>
            <Box sx={webStyle.mainWrapper6}>
              <Typography variant="h4">{this.state.page_name}</Typography>
            </Box>
          </Container>
        )}
      </ThemeProvider>
      // Customizable Area End
    );
  }
}

// Customizable Area Start
const webStyle = {
  mainWrapper: {
    display: "flex",
    fontFamily: "Roboto-Medium",
    flexDirection: "column",
    alignItems: "start",
    paddingBottom: "30px",
    background: "#fff",
  },
  mainWrapper2: {
    display: "flex",
    fontFamily: "Roboto-Medium",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: "30px",
    background: "#fff",
    width: "100%",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  mainWrapper3: {
    display: "flex",
    fontFamily: "Roboto-Medium",
    flexDirection: "column",
    paddingBottom: "30px",
    background: "#fff",
    width: "100%",
    marginTop: "10px",
  },
  mainWrapper4: {
    display: "flex",
    fontFamily: "Roboto-Medium",
    flexDirection: "row",
  },
  mainWrapper5: {
    display: "flex",
    fontFamily: "Roboto-Medium",
    flexDirection: "row",
    flexWrap: "nowwrap",
    paddingBottom: "30px",
    background: "#fff",
    width: "100%",
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: "10px",
    paddingLeft: "10px",
  },
  mainWrapper6: {
    display: "flex",
    fontFamily: "Roboto-Medium",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "10px",
    justifyContent: "center",
    width: "100%",
  },
  buttonStyle: {
    padding: '10px 20px',
    marginTop: "30px",
    border: "none",
    boxShadow: "none",
  },
  buttonStyle1: {
    padding: '10px 20px',
    marginTop: "30px",
    border: "none",
    boxShadow: "none",
    width: "100%",
    backgroundColor: "rgb(98, 0, 238)",
    color: "white",
  },
  buttonStyle2: {
    padding: '10px 20px',
    border: "none",
    boxShadow: "none",
    width: "48%",
    backgroundColor: "rgb(98, 0, 238)",
    color: "white",
  },
  buttonStyle3: {
    border: "none",
    boxShadow: "none",
  },
  buttonStyle4: {
    padding: '10px 20px',
    border: "none",
    boxShadow: "none",
    backgroundColor: "rgb(98, 0, 238)",
    color: "white",
    textTransform: "none"
  },
  textFieldStyle: {
    marginTop: '10px',
  }
};
// Customizable Area End
