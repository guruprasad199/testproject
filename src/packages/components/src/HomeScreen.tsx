import React from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  // Customizable Area Start
  // Customizable Area End
} from "react-native";
import { BlockComponent } from "../../framework/src/BlockComponent";
import AlertBlock from '../../blocks/alert/src/AlertBlock';
import CustomTextItem from "./CustomTextItem";
import NavigationBlock from "../../framework/src/Blocks/NavigationBlock";
import SingletonFactory from '../../framework/src/SingletonFactory';

import HomeScreenAdapter from '../../blocks/adapters/src/HomeScreenAdapter';
import InfoPageAdapter from '../../blocks/adapters/src/InfoPageAdapter';
import AlertPageWebAdapter from "../../blocks/adapters/src/AlertPageWebAdapter";

// Customizable Area Start
import PrivacyPolicyAdapter from "../../blocks/adapters/src/PrivacyPolicyAdapter";
import TermsAndConditionAdapter from "../../blocks/adapters/src/TermsAndConditionAdapter";
import SplashScreenAdapter from "../../blocks/adapters/src/SplashScreenAdapter";
import SocialMediaLogInAdapter from "../../blocks/adapters/src/SocialMediaLogInAdapter";
import EmailAccountLogInAdapter from "../../blocks/adapters/src/EmailAccountLogInAdapter";
import EmailAccountSignUpAdapter from "../../blocks/adapters/src/EmailAccountSignUpAdapter";
import ForgotPasswordAdapter from "../../blocks/adapters/src/ForgotPasswordAdapter";
import MobilePhoneToOTPAdapter from "../../blocks/adapters/src/MobilePhoneToOTPAdapter";
import OtpToNewPasswordAdapter from "../../blocks/adapters/src/OtpToNewPasswordAdapter";
import MobilePhoneLogInAdapter from "../../blocks/adapters/src/MobilePhoneLogInAdapter";
import MobilePhoneToAdditionalDetailsAdapter from "../../blocks/adapters/src/MobilePhoneToAdditionalDetailsAdapter";

//Assembler generated adapters start

//Assembler generated adapters end



//Assembler generated adapters start

//Assembler generated adapters end



//Assembler generated adapters start

//Assembler generated adapters end



//Assembler generated adapters start
const mobilePhoneLogInAdapter = new MobilePhoneLogInAdapter();
const mobilePhoneToAdditionalDetailsAdapter = new MobilePhoneToAdditionalDetailsAdapter();

//Assembler generated adapters end



//Assembler generated adapters start

//Assembler generated adapters end



//Assembler generated adapters start
const socialMediaLogInAdapter = new SocialMediaLogInAdapter();
const emailAccountLogInAdapter = new EmailAccountLogInAdapter();
const emailAccountSignUpAdapter = new EmailAccountSignUpAdapter();
const forgotPasswordAdapter = new ForgotPasswordAdapter();
const mobilePhoneToOTPAdapter = new MobilePhoneToOTPAdapter();
const otpToNewPasswordAdapter = new OtpToNewPasswordAdapter();

//Assembler generated adapters end



const privacyAdapter = new PrivacyPolicyAdapter();
const termAndConditionAdapter = new TermsAndConditionAdapter();
const splashScreenAdapter = new SplashScreenAdapter();
// Customizable Area End


const restAPIBlock = SingletonFactory.getRestBlockInstance();
const alertBlock = new AlertBlock();
const navigationBlock = new NavigationBlock();
const sessionBlock = SingletonFactory.getSessionBlockInstance();
const userAccountManagerBlock = SingletonFactory.getUserManagerInstance();
const homeScreenAdapter = new HomeScreenAdapter();
const infoPageAdapter = new InfoPageAdapter();
const alertPageWebAdapter = new AlertPageWebAdapter()

const instructions = Platform.select({
  // Customizable Area Start
  ios: "The iOS APP to rule them all!",
  android: "Now with Android AI",
  web: "Selector your adventure."
  // Customizable Area End
});

interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  // Customizable Area End
}

// Customizable Area Start
interface S { }

interface SS { }

class HomeScreen extends BlockComponent<Props, S, SS> {

  static instance:HomeScreen;

  constructor(props: Props) {
    super(props);
    HomeScreen.instance = this;
  }

  render() {
    const { navigation } = this.props;
    const _this = this;

    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollView} bounces={false}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.welcome}>
                Welcome to EODIndia1!
              </Text>
            </View>

            <Text style={styles.instructions}>{instructions}</Text>
            <Text style={styles.header}>DEFAULT BLOCKS</Text>
            <CustomTextItem
              content={'InfoPage'}
              onPress={() => navigation.navigate("InfoPage")}
            />
            <CustomTextItem
              content={'Alert'}
              onPress={() => this.showAlert("Example", "This happened")}
            />
<CustomTextItem content={'SocialMediaAccountRegistrationScreen'}  onPress={() => navigation.navigate("SocialMediaAccountRegistrationScreen")} />
<CustomTextItem content={'core'}  onPress={() => this.showAlert("Error", "Could not determine assembler export")} />
<CustomTextItem content={'social-media-account'}  onPress={() => this.showAlert("Error", "Could not determine assembler export")} />
<CustomTextItem content={'utilities'}  onPress={() => this.showAlert("Error", "Could not determine assembler export")} />
<CustomTextItem content={'EmailAccountLoginBlock'}  onPress={() => navigation.navigate("EmailAccountLoginBlock")} />
<CustomTextItem content={'EmailAccountRegistration'}  onPress={() => navigation.navigate("EmailAccountRegistration")} />
<CustomTextItem content={'CountryCodeSelector'}  onPress={() => navigation.navigate("CountryCodeSelector")} />
<CustomTextItem content={'ForgotPassword'}  onPress={() => navigation.navigate("ForgotPassword")} />
<CustomTextItem content={'OTPInputAuth'}  onPress={() => navigation.navigate("OTPInputAuth")} />
<CustomTextItem content={'SocialMediaAccountLoginScreen'}  onPress={() => navigation.navigate("SocialMediaAccountLoginScreen")} />
<CustomTextItem content={'Catalogue'}  onPress={() => navigation.navigate("Catalogue")} />
<CustomTextItem content={'Interactivefaqs'}  onPress={() => navigation.navigate("Interactivefaqs")} />
<CustomTextItem content={'AutomaticFormCreation'}  onPress={() => navigation.navigate("AutomaticFormCreation")} />
<CustomTextItem content={'LandingPage'}  onPress={() => navigation.navigate("LandingPage")} />
<CustomTextItem content={'promocodes'}  onPress={() => this.showAlert("Error", "Could not determine assembler export")} />
<CustomTextItem content={'StripePayments'}  onPress={() => navigation.navigate("StripePayments")} />
<CustomTextItem content={'Splashscreen'}  onPress={() => navigation.navigate("Splashscreen")} />
<CustomTextItem content={'TermsConditions'}  onPress={() => navigation.navigate("TermsConditions")} />
<CustomTextItem content={'ApiIntegration'}  onPress={() => navigation.navigate("ApiIntegration")} />
<CustomTextItem content={'BulkUploading'}  onPress={() => navigation.navigate("BulkUploading")} />
<CustomTextItem content={'VisualAnalytics'}  onPress={() => navigation.navigate("VisualAnalytics")} />
<CustomTextItem content={'ImportExportData'}  onPress={() => navigation.navigate("ImportExportData")} />
<CustomTextItem content={'Categoriessubcategories'}  onPress={() => navigation.navigate("Categoriessubcategories")} />
<CustomTextItem content={'Analytics'}  onPress={() => navigation.navigate("Analytics")} />
<CustomTextItem content={'Rolesandpermissions'}  onPress={() => navigation.navigate("Rolesandpermissions")} />
<CustomTextItem content={'Searchengineoptimisationseo'}  onPress={() => navigation.navigate("Searchengineoptimisationseo")} />
<CustomTextItem content={'Keywordsearch'}  onPress={() => navigation.navigate("Keywordsearch")} />
<CustomTextItem content={'Barcodesettings'}  onPress={() => navigation.navigate("Barcodesettings")} />
<CustomTextItem content={'Customform3'}  onPress={() => navigation.navigate("Customform3")} />
<CustomTextItem content={'Adminconsole2'}  onPress={() => navigation.navigate("Adminconsole2")} />
<CustomTextItem content={'Barcodesscanner'}  onPress={() => navigation.navigate("Barcodesscanner")} />
<CustomTextItem content={'Audittrail2'}  onPress={() => navigation.navigate("Audittrail2")} />
<CustomTextItem content={'Ticketsystem2'}  onPress={() => navigation.navigate("Ticketsystem2")} />
<CustomTextItem content={'Uploadmedia3'}  onPress={() => navigation.navigate("Uploadmedia3")} />
<CustomTextItem content={'Cfpaymentintegrationwithrazorpay'}  onPress={() => navigation.navigate("Cfpaymentintegrationwithrazorpay")} />
<CustomTextItem content={'Googlereview'}  onPress={() => navigation.navigate("Googlereview")} />

<CustomTextItem content={'NavigationMenu'}  onPress={() => navigation.navigate("NavigationMenu")} />
<CustomTextItem content={'contentmanagement'}  onPress={() => this.showAlert("Error", "Could not determine assembler export")} />
<CustomTextItem content={'Dashboard'}  onPress={() => navigation.navigate("Dashboard")} />
<CustomTextItem content={'Customform4'}  onPress={() => navigation.navigate("Customform4")} />
<CustomTextItem content={'Barcodesscanner2'}  onPress={() => navigation.navigate("Barcodesscanner2")} />

<CustomTextItem content={'Customisableusersubscriptions'}  onPress={() => navigation.navigate("Customisableusersubscriptions")} />
<CustomTextItem content={'customisableuserprofiles'}  onPress={() => this.showAlert("Error", "Could not determine assembler export")} />
<CustomTextItem content={'Contactus'}  onPress={() => navigation.navigate("Contactus")} />
<CustomTextItem content={'PhoneNumberInput'}  onPress={() => navigation.navigate("PhoneNumberInput")} />
<CustomTextItem content={'Emailnotifications2'}  onPress={() => navigation.navigate("Emailnotifications2")} />
<CustomTextItem content={'Settings2'}  onPress={() => navigation.navigate("Settings2")} />

<CustomTextItem content={'Searchengineoptimisationseo2'}  onPress={() => navigation.navigate("Searchengineoptimisationseo2")} />

<CustomTextItem content={'customform'}  onPress={() => this.showAlert("Error", "Could not determine assembler export")} />

<CustomTextItem content={'Rolesandpermissions2'}  onPress={() => navigation.navigate("Rolesandpermissions2")} />

          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
// Customizable Area End

// Customizable Area Start
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    height: Platform.OS === "web" ? '100vh' : 'auto',
    backgroundColor: "#F5FCFF"
  },
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  },
  instructions: {
    textAlign: "center",
    color: "#6200EE",
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 16,

    padding: 10
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  header: {
    backgroundColor: '#6200EE',
    padding: 15,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  item: {
    backgroundColor: '#00000000',
    padding: 18,
    color: '#6200EE',
    fontSize: 16,
    fontWeight: 'normal'
  }
});
// Customizable Area End
export default HomeScreen;