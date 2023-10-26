# **React Native** | _**EODIndia1**_ | _**351975**_ | _**studio_pro**_

## **Catalog ProjectId: 170090** | **Catalog BuildId: 29154**

## NOTE FOR DEVELOPERS:
Clone the code-engine branch into your working branch. The contents of the branch may get overwritten.
## Author:
Code-Engine
## Keywords:
 - eodindia1
 - web
## Assembled Features To Block Status

| **Feature-Name**        | **Block-Name**        | **Path**  | **Status**  |
|:-------------|:-------------|:-------------|:-------------|
| signuplogin2      | social-media-account-registration<br>core<br>social-media-account<br>utilities<br>email-account-login<br>email-account-registration<br>country-code-selector<br>forgot-password<br>otp-input-confirmation<br>social-media-account-login<br>      | {+packages/blocks/social-media-account-registration+}<br>{+packages/blocks/core+}<br>{+packages/blocks/social-media-account+}<br>{+packages/blocks/utilities+}<br>{+packages/blocks/email-account-login+}<br>{+packages/blocks/email-account-registration+}<br>{+packages/blocks/country-code-selector+}<br>{+packages/blocks/forgot-password+}<br>{+packages/blocks/otp-input-confirmation+}<br>{+packages/blocks/social-media-account-login+}<br> | {+Non-Empty+} |
| catalogue3      | catalogue<br>      | {+packages/blocks/catalogue+}<br> | {+Non-Empty+} |
| searchengineoptimisationseo2      | searchengineoptimisationseo<br>      | {+packages/blocks/searchengineoptimisationseo+}<br> | {+Non-Empty+} |
| interactivefaqs2      | interactivefaqs<br>      | {+packages/blocks/interactivefaqs+}<br> | {+Non-Empty+} |
| automaticformcreation2      | automaticformcreation<br>      | {+packages/blocks/automaticformcreation+}<br> | {+Non-Empty+} |
| landingpage2      | landingpage<br>      | {+packages/blocks/landingpage+}<br> | {+Non-Empty+} |
| customform4      | customform<br>      | {+packages/blocks/customform+}<br> | {+Non-Empty+} |
| promocodes2      | promocodes<br>      | {+packages/blocks/promocodes+}<br> | {+Non-Empty+} |
| payments2      | stripepayments<br>      | {+packages/blocks/stripepayments+}<br> | {+Non-Empty+} |
| termsandconditions3      | termsconditions<br>      | {+packages/blocks/termsconditions+}<br> | {+Non-Empty+} |
| apiintegration50      | apiintegration<br>      | {+packages/blocks/apiintegration+}<br> | {+Non-Empty+} |
| bulkuploading2      | bulkuploading<br>      | {+packages/blocks/bulkuploading+}<br> | {+Non-Empty+} |
| adhocreporting3      | visualanalytics<br>      | {+packages/blocks/visualanalytics+}<br> | {+Non-Empty+} |
| dataimportexportcsv2      | importexportdata<br>      | {+packages/blocks/importexportdata+}<br> | {+Non-Empty+} |
| categoriessubcategories2      | categoriessubcategories<br>      | {+packages/blocks/categoriessubcategories+}<br> | {+Non-Empty+} |
| analytics7      | analytics<br>      | {+packages/blocks/analytics+}<br> | {+Non-Empty+} |
| navigationmenu2      | navigationmenu<br>      | {+packages/blocks/navigationmenu+}<br> | {+Non-Empty+} |
| contentmanagement3      | contentmanagement<br>      | {+packages/blocks/contentmanagement+}<br> | {+Non-Empty+} |
| dashboard11      | dashboard<br>      | {+packages/blocks/dashboard+}<br> | {+Non-Empty+} |
| customisableusersubscriptions2      | customisableusersubscriptions<br>      | {+packages/blocks/customisableusersubscriptions+}<br> | {+Non-Empty+} |
| customisableuserprofiles2      | customisableuserprofiles<br>      | {+packages/blocks/customisableuserprofiles+}<br> | {+Non-Empty+} |
| contactus3      | contactus<br>      | {+packages/blocks/contactus+}<br> | {+Non-Empty+} |
| accountcreation4      | mobile-account-registration<br>      | {+packages/blocks/mobile-account-registration+}<br> | {+Non-Empty+} |
| rolesandpermissions2      | rolesandpermissions2      | {-packages/blocks/rolesandpermissions2-} | {-Empty-} |
| keywordsearch      | keywordsearch      | {-packages/blocks/keywordsearch-} | {-Empty-} |
| barcodesettings      | barcodesettings      | {-packages/blocks/barcodesettings-} | {-Empty-} |
| adminconsole2      | adminconsole2      | {-packages/blocks/adminconsole2-} | {-Empty-} |
| barcodesscanner2      | barcodesscanner2      | {-packages/blocks/barcodesscanner2-} | {-Empty-} |
| audittrail2      | audittrail2      | {-packages/blocks/audittrail2-} | {-Empty-} |
| ticketsystem2      | ticketsystem2      | {-packages/blocks/ticketsystem2-} | {-Empty-} |
| googlereview      | googlereview      | {-packages/blocks/googlereview-} | {-Empty-} |
| emailnotifications2      | emailnotifications2      | {-packages/blocks/emailnotifications2-} | {-Empty-} |
| settings2      | settings2      | {-packages/blocks/settings2-} | {-Empty-} |

## AWS BACKEND DEPLOYMENT URL
 - BaseURL exported as: "https://eodindia1-351975-ruby.b351975.prd.eastus.az.svc.builder.ai"
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

See docs folder for additional information.

### Prerequisites

What things you need to install the software and how to install them

* React Native (last tested on react-native0.61.3)
  - https://facebook.github.io/react-native/docs/getting-started

* IFF brew is installed and user doesn't have permisions.
```
  $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
  $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

* XCode 11 or greater

* XCode Command Line Tools
```
  $ xcode-select --install
```

* Android SDK
```
  $ brew cask install android-sdk
```

* JDK 11
```
  $ brew tap homebrew/cask-versions
  $ brew cask install java
  $ brew cask install java11
```

### Installing

A step by step series of examples that tell you how to get a development env running

Install yarn
```
  $ brew install yarn
```

Install node

```
  $ brew install node
```

Web
```
  $ yarn
  $ yarn workspace web start 
  (Note: After udpating depencies run again if no cocde erros. )
```

iOS
```
  $ yarn
  $ cd packages/mobile/ios && pod install && cd ../../../ && cp node-runners/RCTUIImageViewAnimated.m node_modules/react-native/Libraries/Image/RCTUIImageViewAnimated.m && npx react-native bundle --entry-file ./packages/mobile/index.js --platform ios --dev true --bundle-output ./packages/mobile/ios/main.jsbundle && yarn ios
```

Android - https://docs.expo.io/versions/latest/workflow/android-studio-emulator/
```
  $ yarn
  $ export JAVA_HOME=`/usr/libexec/java_home -v 11`; java -version; export ANDROID_HOME=${HOME}/Library/Android/sdk; export PATH=${PATH}:${ANDROID_HOME}/emulator && yarn android
```

## Running the tests

```
  $ yarn test
```


## CI/CD Details

We use GitlabCI for our deployment/Build pipelines

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).



