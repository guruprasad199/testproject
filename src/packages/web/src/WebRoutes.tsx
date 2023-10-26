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
import { AboutUsWithStyle } from '../../blocks/contentmanagement/src/AboutUs.web';
const Signup = lazy(() =>
  import('../../blocks/email-account-registration/src/Signup.web')
);
const SignIn = lazy(() =>
  import('../../blocks/email-account-login/src/LogIn.web')
);
import { AdventureActivityWithStyle } from '../../blocks/settings2/src/Settings2.web';
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
        <Route path="/Signup" exact render={props => <Signup {...props} />} />
        <Route path="/LogIn" exact render={props => <SignIn {...props} />} />
        <Route
          path="/ForgotPassword"
          exact
          render={props => <ForgotPasswordWeb {...props} />}
        />
        <Route path="/AboutUs" exact render={props => <AboutUsWithStyle {...props} />} />

        <Route
          path="/ParkInformation"
          exact
          render={props => <RolesandpermissionsWithStyle {...props} />}
        />
        <Route
          path="/AdventureActivity"
          exact
          render={props => <AdventureActivityWithStyle {...props} />}
        />
      </Switch>
    </Suspense>
  );
}

//@ts-ignore
export default withRouter(WebRoutes);

import PhoneInput from 'react-phone-input-2';
