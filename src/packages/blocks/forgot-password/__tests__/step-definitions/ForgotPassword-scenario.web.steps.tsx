import { defineFeature, loadFeature} from "jest-cucumber"
import { mount, shallow, ShallowWrapper } from 'enzyme'

import * as helpers from '../../../../framework/src/Helpers'
import {runEngine} from '../../../../framework/src/RunEngine'
import {Message} from "../../../../framework/src/Message"

import MessageEnum, {getName} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";

import ForgotPasswordWeb from "../../src/ForgotPassword.web";
import { beforeEach, expect, jest } from "@jest/globals";
import PhoneInput from 'react-phone-input-2';

const navigation = require("react-navigation");


const screenProps = {
   
    navigation: {
        addListener: jest.fn().mockImplementation((event, callback) => {

        }),
        navigate: jest.fn(),
        goBack: jest.fn(),
        dispatch: jest.fn()
    },
    id: "ForgotPasswordWeb"
}

 


const emailLogin = {
    "data": {
        "data": {
            "id": "354",
            "type": "account",
            "attributes": {
                "id": 354,
                "activated": true,
                "country_code": 91,
                "fullname": "Pallavi",
                "email": "pallavi@yomail.com",
                "first_name": null,
                "full_phone_number": "911234567890",
                "last_name": null,
                "description": null,
                "company_name": null,
                "phone_number": 1234567890,
                "type": "EmailAccount",
                "created_at": "2023-01-11T05:12:56.029Z",
                "updated_at": "2023-01-11T05:12:56.029Z",
                "device_id": null,
                "unique_auth_id": "e8RIFW8HTEh3AnikyFAuoQtt",
                "user_type": "customer",
                "tell_me_about": false,
                "office_address": null,
                "city": null,
                "pin_code": null,
                "gst_number": null,
                "pan_number": null,
                "user_status": "registered",
                "address": null,
                "document_image": null,
                "sp_image": null,
                "avatar": null,
                "offers": {
                    "data": []
                },
                "service_provider_detail": {
                    "data": null
                },
                "bank_details": {
                    "data": []
                }
            }
        }
    },
    "meta": {
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MzU0LCJleHAiOjE2NzM2MDMxMjMsInRva2VuX3R5cGUiOiJsb2dpbiJ9.vsp8Ga6ODrIBAQM-zMkhgNiv3mfFOuJPDkT1Jfo6-g65xyiMMEfpAVp4Pu8oT_LpZRDXrTfBTtsvit_dOKXOAA"
    }
}

const mockMessage = {
    getData: jest.fn(),
    id: 'your_message_id',
  };
  
  const mockRunEngine = {
    unSubscribeFromMessages: jest.fn(),
  };


const feature = loadFeature('./__tests__/features/ForgotPassword-scenario.web.feature');

defineFeature(feature, (test) => {


    beforeEach(() => {
        jest.resetModules()
        jest.doMock('react-native', () => ({ Platform: { OS: 'web' } }))
        jest.spyOn(helpers, 'getOS').mockImplementation(() => 'web');
       

    });
  
    test('User navigates to Email ForgotPasswordWeb', ({ given, when, then }) => {
        let mobileAccountLogInWrapper: ShallowWrapper;
        let instance: ForgotPasswordWeb;
        let newinstance: ForgotPasswordWeb;
  
        given('I am a User attempting to ForgotPasswordWeb with a Email', () => {
            mobileAccountLogInWrapper = shallow(<ForgotPasswordWeb navigation={undefined} id={""} classes={undefined} history={undefined}/>)
            expect(mobileAccountLogInWrapper).toBeTruthy()
  
            instance = mobileAccountLogInWrapper.instance() as ForgotPasswordWeb;
            newinstance = mobileAccountLogInWrapper.instance() as ForgotPasswordWeb;
        });
  
        when('I navigate to the ForgotPasswordWeb Screen', () => {
            instance = mobileAccountLogInWrapper.instance() as ForgotPasswordWeb
        });
  
        then('I can select the ForgotPasswordWeb button with out errors', async () => {
            

            let textInputComponent = mobileAccountLogInWrapper.find('Formik').dive().findWhere((node) => node.prop("data-test-id") === 'forgotBtn');
            
              const formic = mobileAccountLogInWrapper.findWhere(
                (node) => node.prop("data-test-id") === "FormikID"
            );
            formic.props().onSubmit({ values: "abc" });

            const event = {
                preventDefault() {},
                target: { value: "hello@aol.com" },
              };
              textInputComponent.simulate('click', instance.handleForgot(event))
            //   instance.handleSubmit(event);
              
        
              const responseJson = {
                meta: {
                  token: 'mocked_token',
                },
              };

            

            mobileAccountLogInWrapper.instance().setState = jest.fn();
          

          
            mockMessage.getData.mockReturnValue(responseJson);

          
             
         
            const loginApiCallId = new Message(
                getName(MessageEnum.RestAPIResponceMessage)
            );
            loginApiCallId.addData(
                getName(MessageEnum.RestAPIResponceDataMessage),
                loginApiCallId.messageId
            );
            loginApiCallId.addData(
                getName(MessageEnum.RestAPIResponceSuccessMessage),
                JSON.parse(JSON.stringify(emailLogin))
            );
            instance.ForgotPasswordApiCallId= loginApiCallId.messageId;
            runEngine.sendMessage("Unit Test", loginApiCallId);



            
            
        });
        
     
       
        then('I can enter a email address with out errors', () => {
           
            let textInputComponent = mobileAccountLogInWrapper.find('Formik').dive().findWhere((node) => node.prop("data-test-id") === 'signupInputEmail');
            textInputComponent.simulate('change', { target: { emailOrPhone: 'abc@gmail.com', value: 'jonroy@gmail.com' } });
  
            expect(mobileAccountLogInWrapper).toBeTruthy();
        });

        then('I can enter a password with out errors', () => {
            instance.setState({forgotPassword:true})

            let textInputComponent = mobileAccountLogInWrapper.find('Formik').dive().findWhere((node) => node.prop("data-test-id") === 'signupInputPassword');
            
              const formic = mobileAccountLogInWrapper.findWhere(
                (node) => node.prop("data-test-id") === "FormikID"
            );
            formic.props().onSubmit({ values: "" });
           
            // let textInputComponent = mobileAccountLogInWrapper.find('Formik').dive().findWhere((node) => node.prop("data-test-id") === 'signupInputPassword');
            // textInputComponent.simulate('change', { target: { password: '', value: '' } });

         
            instance.setState({showPassword:false})

            instance.handleClickShowPassword()

            newinstance.setState({showPassword:true})
            
           //  instance.handleClickShowPassword()

           
       });

       then('I can enter a confirm Password with out errors', () => {
          
           
            let textInputComponent = mobileAccountLogInWrapper.find('Formik').dive().findWhere((node) => node.prop("data-test-id") === 'signupInputCPassword');
            // textInputComponent.simulate('change', { target: { password: '', value: '' } });
            instance.handleClickShowPassword()
    
            instance.setState({confirmPassword:false})
            instance.handleShowConfirmPassword()
            
            instance.setState({confirmPassword:true})
            instance.handleShowConfirmPassword()

     
       });


       then('I can click resetPassword button with out errors', async () => {
            

        let textInputComponent = mobileAccountLogInWrapper.find('Formik').dive().findWhere((node) => node.prop("data-test-id") === 'resetBtn');
        
          const formic = mobileAccountLogInWrapper.findWhere(
            (node) => node.prop("data-test-id") === "FormikID"
        );
        formic.props().onSubmit({ values: "" });

        const event = {
            preventDefault() {},
            target: { value: "nbn" },
          };
        //   textInputComponent.simulate('click', )
          instance.handleResetPassword(event);
          instance.handleClose();
          
    
          const responseJson = {
            meta: {
              token: 'mocked_token',
            },
          };

        

        mobileAccountLogInWrapper.instance().setState = jest.fn();
      

      
        mockMessage.getData.mockReturnValue(responseJson);

      
         
     
        const loginApiCallId = new Message(
            getName(MessageEnum.RestAPIResponceMessage)
        );
        loginApiCallId.addData(
            getName(MessageEnum.RestAPIResponceDataMessage),
            loginApiCallId.messageId
        );
        loginApiCallId.addData(
            getName(MessageEnum.RestAPIResponceSuccessMessage),
            JSON.parse(JSON.stringify(emailLogin))
        );
        instance.ResetPasswordApiCallId= loginApiCallId.messageId;
        runEngine.sendMessage("Unit Test", loginApiCallId);

    });
  

        then('I can leave the screen with out errors', () => {
            instance.componentWillUnmount();
            expect(mobileAccountLogInWrapper).toBeTruthy();
        });
    });

});

