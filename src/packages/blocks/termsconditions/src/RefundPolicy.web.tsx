import React from "react";
import Navbar from "../../../components/src/Navbar/Navbar.web";
import Header from "../../../components/src/MainHeader/Header.web";
import Footer from "../../../components/src/Footer/Footer.web";
import { termsConditionBgImage } from "./assets";
import RefundPolicyController from "./RefundPolicyController.web";
import { withStyles, createStyles } from "@material-ui/core";

class RefundPolicy extends RefundPolicyController {
  render() {
    const { classes } = this.props
    const subHeading =
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed to eiusmod temport incididunt ut labore et dolore";
    return (
      <div className={classes.refundPolicyMainContainer} >
        <Navbar onLogin={undefined} />
        <Header
          heading="Refund Policy"
          subHeading={subHeading}
          bgImage={termsConditionBgImage}
          otherHeading=''
        />
        <div className={classes.refundPolicyContiainer} data-testId="refundPolicyContiainer">
          {this.state.refundPolicyData.map((item: any, index: any) => {
            return (
              <p
                className={classes.refundDataText}
                dangerouslySetInnerHTML={{
                  __html: item.content,
                }}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}
const refundStyles = (theme: any) => createStyles({
  refundPolicyContiainer: {
    margin: "40px 40px 60px 40px",
    borderRadius: 8,
    background: "#F3F9FD",
    boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.06), 0px 4px 8px 0px rgba(0, 0, 0, 0.03)",
  },
  refundDataText: {
    margin: "10px 0",
    fontSize: "14px",
    fontWeight: 400,
    fontFamily: '"Montserrate", sans-serif',
    "& ul": {
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
          marginLeft: "-15px"
        }
      },
    }
  },
  refundPolicyMainContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }
})

export default withStyles(refundStyles)(RefundPolicy);
export { RefundPolicy };
