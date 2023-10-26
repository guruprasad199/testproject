import React from "react";
// Customizable Area Start
import { Collapse } from "antd";
import Header from "../../../components/src/MainHeader/Header.web";
import FaqController from "./FaqController.web";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Navbar from "../../../components/src/Navbar/Navbar.web";
import Footer from "../../../components/src/Footer/Footer.web";
import { FaqBg } from "./assets";
import { createStyles,withStyles } from '@material-ui/core/styles';
const { Panel } = Collapse;
// Customizable Area End

class Faq extends FaqController {
  render() {
    // Customizable Area Start
    const {classes}= this.props

    const CustomPanelHeader = ({ title, item, index }:any) => {
      return (
        <div>
          <p className={classes.faqQuestion}><span className={classes.faqQuestionNumber}>{index + 1}.</span> {title}</p>
        </div>
      );
    };
    return (
      <div className={classes.faqMainContainer}>
        <Navbar onLogin={undefined} />
        <Header
          heading="Questions!"
          subHeading="have you can find frequently asked question. We help you to find the answer"
          bgImage={FaqBg}
          otherHeading="Frequently Asked "
        />
        <div className={classes.faqInnerContainer}>
          <h1 className={classes.faqHeading}>FAQs</h1>
          <Collapse
            bordered={true}
            expandIconPosition="right"
            expandIcon={({ isActive }) =>
              isActive ? (
                <AiOutlineMinus className={classes.faqPanelIcon} />
              ) : (
                <AiOutlinePlus className={classes.faqPanelIcon}  />
              )
            }
          >
            {this.state.questionData.map((item: any, index: number) => {
              return (
                <Panel header={<CustomPanelHeader index={index} title={item.title} />} key={index} className={classes.faqPanel}>
                  <p className={classes.faqAnswer}>{item.content}</p>
                </Panel>
              );
            })}
          </Collapse>
        </div>
        <Footer />
      </div>
    );
  }
}


const useStyles =(theme:any) => createStyles({
  faqMainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  faqInnerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    gap:40,
    "& .ant-collapse":{
      width:"100%",
      backgroundColor:"#fff",
      border:"none",
     "& .ant-collapse-item":{
      border:"none",
     }
    }
  },
  faqHeading: {
    color: '#2B65EC',
    fontSize: '32px',
    fontWeight: 700,
    fontFamily: 'Montserrat, sans-serif',
    marginBottom:0
  },
  faqPanel:{
    marginBottom:20,
    background:"#F3F9FD",
    boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.06), 0px 4px 8px 0px rgba(0, 0, 0, 0.03)",
    width:"100%",
    borderRadius:8,
    borderBottom:0,
    "& .ant-collapse-content":{
      background: "#F3F9FD",
    }
  },
  faqPanelIcon: {
    fontSize: '24px',
    backgroundColor: 'transparent',
    color: 'black',
    fontWeight: 500,
  },
  faqQuestion:{
    color: "var(--black, #334155)",
    fontFamily: "Montserrat",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    marginBottom:0
  },
  faqQuestionNumber:{
    color: "var(--black, #334155)",
    fontFamily: "Liberteen Regular",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
  },
  faqAnswer: {
    margin: '5px',
    fontSize: '16px',
    fontWeight: 400,
    fontFamily: 'Montserrat, sans-serif',
    color: 'var(--black, #334155)',
  },
});

export default withStyles(useStyles)(Faq);
export { Faq };
// Customizable Area End
