import React from "react";
import TermsAndConditonsController from "./TermsAndConditonsController.web"
import Navbar from "../../../components/src/Navbar/Navbar.web";
import Header from "../../../components/src/MainHeader/Header.web";
import Footer from "../../../components/src/Footer/Footer.web";
import { Collapse } from "antd";
import { termsConditionBgImage } from "./assets";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { createStyles, withStyles } from "@material-ui/core";
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
const { Panel } = Collapse;
class TermsAndConditions extends TermsAndConditonsController {
  static componentDidMount: any;
  render() {
    const { classes } = this.props
    const { expanded } = this.state
    const Accordion = withStyles({
      root: {
        boxShadow: '0px 8px 32px 0px rgba(0, 0, 0, 0.06), 0px 4px 8px 0px rgba(0, 0, 0, 0.03)',
        "&:before": {
          display: "none"
        },
        '&$expanded': {
          marginBottom: 40
        },
      },
      expanded: {},
    })(MuiAccordion);

    const AccordionSummary = withStyles({
      root: {
        minHeight: 56,
        
        '&$expanded': {
          minHeight: 56,
          borderBottom: "1px solid rgba(0, 0, 0, .125)",
        },

      },
      content: {
        '&$expanded': {
          margin: '16px 0',
          
        },
        display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"
      },
      expanded: {},
    })(MuiAccordionSummary);

    const AccordionDetails = withStyles((theme) => ({
      root: {
        padding:"0px 30px",
      },
    }))(MuiAccordionDetails);

    return (
      <div className={classes.termsConditionMainContainer}>
        <Navbar onLogin={undefined} />
        <Header
          heading="Terms & Conditions"
          subHeading={this.state.termsandConditionsTitle}
          bgImage={termsConditionBgImage}
          otherHeading=""
        />
        <div className={classes.tncInnerContainer}>
          {this.state.questionData.map((item: any, index: number) => {
            return (
              <Accordion key={index} expanded={expanded[index]} className={classes.accordian}
                onChange={this.handleChange(index)}>
                <AccordionSummary
                  expandIcon={expanded[index] ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  data-testid="accordion-title"
                >
                  <p className={classes.tncHeading}>{item.title}</p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className={classes.termsText}
                    dangerouslySetInnerHTML={{
                      __html: item.content,
                    }}
                  />
                </AccordionDetails>
              </Accordion>
            )
          })}
          <p className={classes.termsNote}>All Guests Visting the Park agree to the above Terms and Conditions</p>
        </div>
        <Footer />
      </div>
    );
  }
}

const styles = (theme: any) => createStyles({
  termsConditionMainContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  accordian: {
    background: "#F3F9FD",
    borderRadius: 8,
    marginBottom: 20
  },
  tncInnerContainer: {
    padding: "40px",
  },
  tncHeading: {
    color: "var(--black, #334155);",
    fontSize: "18px",
    fontWeight: 500,
    marginBottom: 0
  },
  antCollapse: {
    backgroundColor: "white",
    padding: "12px 5px",
    width: "98%",
    border: "none",
  },
  antCollapseHeader: {
    antCollapseHeaderText: {
      fontSize: "18px",
      fontWeight: 500,
      fontFamily: "Montserrat, sans-serif",
    },
  },
  tncPanelIcon: {
    fontSize: "25px",
    backgroundColor: "transparent",
    color: "black",
    fontWeight: 500,
  },
  tncAnswer: {
    margin: "5px",
    fontSize: "18px",
    fontWeight: 400,
    color: "gray",
  },
  antCollapseArrow: {
    color: "black",
    fontSize: "18px",
  },
  antCollapseContent: {
    antCollapseContentBox: {
      padding: "10px 10px",
      backgroundColor: "#f4f9fd",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
    },
  },
  termsText: {
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "Montserrat, sans-serif",
    color: "#334155",
    margin: "10px 0",
    "& ul": {
      paddingLeft: 0,

      "& li": {
        fontFamily: "Montserrat",
        fontSize: 14,
        fontSstyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        marginBottom: theme.spacing(1.5),
        "&::before": {
          content: "''",
          width: "8px",
          height: "8px",
          backgroundColor: 'var(--primary, #2B65EC)',
          borderRadius: "50%",
          display: "inline-block",
          marginRight: "8px",
          marginLeft:"-15px"
        }
      },

    }
  },
  qlEditor: {
    boxSizing: "border-box",
    lineHeight: "1.42",
    height: "unset",
    overflowY: "auto",
    padding: "0px 0px",
    tabSize: 4,
    "-mozTabSize": 4,
    textAlign: "left",
    whiteSpace: "normal",
    wordWrap: "break-word",
  },
  termsNote: {
    color: "#FF5E5E",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    textAlign: "center",
  },
  qlEditorUl: {
    "& li": {
      "&::before": {
        content: '"\\2022"',
        color: "blue",
        fontSize: "14px",
      },
    },
  },
});

export default withStyles(styles)(TermsAndConditions)
export { TermsAndConditions }