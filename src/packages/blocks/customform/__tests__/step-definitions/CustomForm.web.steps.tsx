import React from "react";
import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from 'enzyme';

import { runEngine } from '../../../../framework/src/RunEngine'
import { Message } from "../../../../framework/src/Message"
import MessageEnum, { getName } from "../../../../framework/src/Messages/MessageEnum";
import CustomForm from "../../src/CustomForm.web";

const screenProps = {
  navigation: "",
  id: "CustomForm"
}

const feature = loadFeature('./__tests__/features/CustomForm-scenario.feature');

const response = {
  "id": "1",
  "attributes": {
    "id": 1,
    "first_name": "abc",
    "last_name": "test",
    "phone_number": "12345678",
    "email": "test@gmail.com",
    "organization": "xyz",
    "team_name": "developer",
    "i_am": "tenant",
    "gender": "Male",
    "stars_rating": 5,
    "address": "abc",
    "country": "india",
    "state": "delhi",
    "city": "delhi",
    "file": {
      "file_name": "abc.png"
    }
  }
};

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('User navigates to CustomForm', ({ given, when, then }) => {
    let CustomFormBlock: ShallowWrapper;

    given('I am a User loading CustomForm', () => {
      CustomFormBlock = shallow(<CustomForm {...screenProps} />);
    });

    when('I click on add user button', () => {
      let buttonComponent = CustomFormBlock.findWhere((node) => node.prop('data-test-id') === 'addUserBtn');
      buttonComponent.simulate('click');
    });

    then('check add user dialog open properly', () => {
      const dialogComponent = CustomFormBlock.findWhere((node) => node.prop('data-test-id') === 'form');
      expect(dialogComponent.html()).toMatch("Add user");
    });

    when('add user modal open', () => {
      let buttonComponent = CustomFormBlock.findWhere((node) => node.prop('data-test-id') === 'addUserBtn');
      buttonComponent.simulate('click');
    });

    then('check all textfield working properly', () => {
      const formikTag = CustomFormBlock.findWhere((node) => node.prop('data-test-id') === 'formik').dive();
      formikTag.findWhere((node) => node.prop('data-test-id') === 'firstName').simulate("change", { target: { value: "abc" } });
      formikTag.findWhere((node) => node.prop('data-test-id') === 'lastName').simulate("change", { target: { value: "test" } });
      formikTag.findWhere((node) => node.prop('data-test-id') === 'phoneNumber').simulate("change", { target: { value: "12345678" } });
      formikTag.findWhere((node) => node.prop('data-test-id') === 'email').simulate("change", { target: { value: "test@gmail.com" } });
      formikTag.findWhere((node) => node.prop('data-test-id') === 'organization').simulate("change", { target: { value: "test" } });
      formikTag.findWhere((node) => node.prop('data-test-id') === 'teamName').simulate("change", { target: { value: "test" } });
      formikTag.findWhere((node) => node.prop('data-test-id') === 'address').simulate("change", { target: { value: "test" } });
      formikTag.findWhere((node) => node.prop('data-test-id') === 'country').simulate("change", { target: { value: "test" } });
      formikTag.findWhere((node) => node.prop('data-test-id') === 'state').simulate("change", { target: { value: "test" } });
      formikTag.findWhere((node) => node.prop('data-test-id') === 'city').simulate("change", { target: { value: "test" } });
      expect(formikTag.html()).toMatch('abc');
    });

    then('check all dropdown working properly', () => {
      const formikTag = CustomFormBlock.findWhere((node) => node.prop('data-test-id') === 'formik').dive();
      formikTag.findWhere((node) => node.prop('data-test-id') === 'gender').simulate("change", { label: "Male", value: "Male" });
      formikTag.findWhere((node) => node.prop('data-test-id') === 'userType').simulate("change", { label: "Supervisor", value: "Supervisor" });
      formikTag.findWhere((node) => node.prop('data-test-id') === 'rating').simulate("change", { label: "1", value: "1" });
      expect(formikTag.html()).toMatch('Male');
    });

    then('check file uploaded properly', () => {
      const formikTag = CustomFormBlock.findWhere((node) => node.prop('data-test-id') === 'formik').dive();
      formikTag.findWhere((node) => node.prop('data-test-id') === 'file').simulate("change", { target: { files: ["test.png"] } });
      expect(formikTag.html()).toMatch('input');
    });

    then('check add api called', () => {
      const formikTag = CustomFormBlock.findWhere((node) => node.prop('data-test-id') === 'formik');
      formikTag.renderProp('children')({ touched: { firstName: true }, errors: { firstName: "FirstName is required!" } });
      formikTag.simulate("submit", {});
      expect(formikTag.html()).toMatch('input');
    });

    then('check close button working properly', () => {
      CustomFormBlock.findWhere((node) => node.prop('data-test-id') === 'closeBtn').simulate("click");
      expect(CustomFormBlock.html()).toMatch('Manage User');
    });

    when('user list api failed', () => {
      const userListApi = new Message(getName(MessageEnum.RestAPIResponceMessage));
      userListApi.addData(getName(MessageEnum.RestAPIResponceDataMessage), userListApi.messageId);
      userListApi.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
        status: 500
      });
      const componentRef = CustomFormBlock.instance() as CustomForm;
      componentRef.getUserListApiCallId = userListApi.messageId;
      runEngine.sendMessage("Unit Test", userListApi);
    });

    then('check table data not rendered', () => {
      expect(CustomFormBlock.html()).toMatch("No record");
    });

    when('add user api failed', () => {
      const addUserApi = new Message(getName(MessageEnum.RestAPIResponceMessage));
      addUserApi.addData(getName(MessageEnum.RestAPIResponceDataMessage), addUserApi.messageId);
      addUserApi.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
        errors: "Custom form already created!"
      });
      const componentRef = CustomFormBlock.instance() as CustomForm;
      componentRef.addUserApiCallId = addUserApi.messageId;
      runEngine.sendMessage("Unit Test", addUserApi);
    });

    then('check error notification display', () => {
      expect(CustomFormBlock.html()).toMatch('Add user');
    });

    when('user list api called properly', () => {
      const userListApi = new Message(getName(MessageEnum.RestAPIResponceMessage));
      userListApi.addData(getName(MessageEnum.RestAPIResponceDataMessage), userListApi.messageId);
      userListApi.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
        data: [response]
      });
      const componentRef = CustomFormBlock.instance() as CustomForm;
      componentRef.getUserListApiCallId = userListApi.messageId;
      runEngine.sendMessage("Unit Test", userListApi);
    });

    then('check table render correctly', () => {
      expect(CustomFormBlock.html()).toMatch('abc');
    });

    then('check pagination working properly', () => {
      const formikTag = CustomFormBlock.findWhere((node) => node.prop('data-test-id') === 'pagination').dive();
      formikTag.simulate("change", "", 1);
      expect(formikTag.html()).toMatch('pagination');
    });

    then('check edit button working properly', () => {
      const editButtonTag = CustomFormBlock.findWhere((node) => node.prop('data-test-id') === 'editBtn');
      editButtonTag.simulate("click");
      const dialogComponent = CustomFormBlock.findWhere((node) => node.prop('data-test-id') === 'form');
      expect(dialogComponent.html()).toMatch("Edit user");
    });

    then('check edit api called', () => {
      const editButtonTag = CustomFormBlock.findWhere((node) => node.prop('data-test-id') === 'editBtn');
      editButtonTag.simulate("click");
      const formikTag = CustomFormBlock.findWhere((node) => node.prop('data-test-id') === 'formik');
      formikTag.dive().findWhere((node) => node.prop('data-test-id') === 'file').simulate("change", { target: { files: ["test.png"] } });
      formikTag.simulate("submit", {});
      expect(formikTag.html()).toMatch('input');
    });

    when('add user api called properly', () => {
      const addUserApi = new Message(getName(MessageEnum.RestAPIResponceMessage));
      addUserApi.addData(getName(MessageEnum.RestAPIResponceDataMessage), addUserApi.messageId);
      addUserApi.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
        data: response
      });
      const componentRef = CustomFormBlock.instance() as CustomForm;
      componentRef.addUserApiCallId = addUserApi.messageId;
      runEngine.sendMessage("Unit Test", addUserApi);
    });

    then('check user added correctly', () => {
      expect(CustomFormBlock.html()).toMatch('abc');
    });

    when('edit user api called properly', () => {
      const editUserApi = new Message(getName(MessageEnum.RestAPIResponceMessage));
      editUserApi.addData(getName(MessageEnum.RestAPIResponceDataMessage), editUserApi.messageId);
      editUserApi.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
        data: response
      });
      const componentRef = CustomFormBlock.instance() as CustomForm;
      componentRef.editUserApiCallId = editUserApi.messageId;
      runEngine.sendMessage("Unit Test", editUserApi);
    });

    then('check user edited correctly', () => {
      expect(CustomFormBlock.html()).toMatch('abc');
    });
  });
});
