//@ts-nocheck
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';
//* Routes List start
const LandingPage = lazy(() =>
  import('../../blocks/landingpage/src/LandingPage.web')
);
const FaqPage = lazy(() => import('../../blocks/interactivefaqs/src/Faq.web'));
const TermsAndConditionsPage = lazy(() =>
  import('../../blocks/termsconditions/src/TermsAndConditions.web')
);
const RefundPolicy = lazy(() =>
  import('../../blocks/termsconditions/src/RefundPolicy.web')
);
const ForgotPasswordWeb = lazy(() =>
  import('../../blocks/forgot-password/src/ForgotPassword.web')
);
import { RolesandpermissionsWithStyle } from '../../blocks/rolesandpermissions/src/Rolesandpermissions.web';
import { FoodOutletWithStyle } from '../../blocks/rolesandpermissions/src/FoodOutlet.web';
import { AboutUsWithStyle } from '../../blocks/contentmanagement/src/AboutUs.web';
import { OpeningTimesWithStyle } from '../../blocks/rolesandpermissions/src/OpeningTimes.web';
import { ParkMapWithStyle } from '../../blocks/rolesandpermissions/src/ParkMap.web';
const Signup = lazy(() =>
  import('../../blocks/email-account-registration/src/Signup.web')
);
const SignIn = lazy(() =>
  import('../../blocks/email-account-login/src/LogIn.web')
);
import { AdventureActivityWithStyle } from '../../blocks/settings2/src/Settings2.web';
import { CategoriessubcategoriesWithStyle } from '../../blocks/categoriessubcategories/src/Categoriessubcategories.web';
import { LoginWebWithStyle } from '../../blocks/email-account-login/src/LogIn.web';
import { EmailAccountRegistrationWithStyle } from '../../blocks/email-account-registration/src/EmailAccountRegistration.web';
import { TicketsystemWithStyle } from '../../blocks/ticketsystem2/src/Ticketsystem2.web';
// /* Routes List End /

// /* Private Routes start /

// /* Private Roues End /

function WebRoutes(rootProps: any) {
  return (
    <Suspense fallback="">
      <Switch>
        <Route path="/" exact render={props => <LandingPage {...props} />} />
        <Route path="/faq" exact render={props => <FaqPage {...props} />} />
        <Route
          path="/TermsAndConditions"
          exact
          render={props => <TermsAndConditionsPage {...props} />}
        />
        <Route
          path="/RefundPolicy"
          exact
          render={props => <RefundPolicy {...props} />}
        />
        <Route
          path="/Signup"
          exact
          render={props => <EmailAccountRegistrationWithStyle {...props} />}
        />
        <Route
          path="/LogIn"
          exact
          render={props => <LoginWebWithStyle {...props} />}
        />
        <Route
          path="/ForgotPassword"
          exact
          render={props => <ForgotPasswordWeb {...props} />}
        />
        <Route
          path="/AboutUs"
          exact
          render={props => <AboutUsWithStyle {...props} />}
        />
        <Route
          path="/ParkInformation"
          exact
          render={props => <RolesandpermissionsWithStyle {...props} />}
        />
        {/* <Route
          path="/ParkInformation/foodoutlet"
          exact
          render={props => <FoodOutletWithStyle {...props} />}
        /> */}
        {/* <Route
          path="/ParkInformation/openingtimes"
          exact
          render={props => <OpeningTimesWithStyle {...props} />}
        />
        <Route
          path="/ParkInformation/parkmap"
          exact
          render={props => <ParkMapWithStyle {...props} />}
        /> */}
        <Route
          path="/ParkInformation/AboutUs"
          exact
          render={props => <AboutUsWithStyle {...props} />}
        />
        <Route
          path="/AdventureActivity"
          exact
          render={props => <AdventureActivityWithStyle {...props} />}
        />
        <Route
          path="/Annualpass"
          exact
          render={props => <CategoriessubcategoriesWithStyle {...props} />}
        />
        <Route
          path="/DayPass"
          exact
          render={props => <TicketsystemWithStyle {...props} />}
        />
      </Switch>
    </Suspense>
  );
}

export default withRouter(WebRoutes);
