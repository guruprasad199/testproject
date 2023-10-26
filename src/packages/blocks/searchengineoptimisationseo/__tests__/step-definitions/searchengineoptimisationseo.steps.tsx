import { defineFeature, loadFeature} from "jest-cucumber"
import { shallow, ShallowWrapper } from 'enzyme'

import * as helpers from '../../../../framework/src/Helpers'
import {runEngine} from '../../../../framework/src/RunEngine'
import {Message} from "../../../../framework/src/Message"

import MessageEnum, {getName} from "../../../../framework/src/Messages/MessageEnum"; 
import React from "react";
import Searchengineoptimisationseo from "../../src/Searchengineoptimisationseo"
const navigation = require("react-navigation")

const screenProps = {
    navigation: navigation,
    id: "Searchengineoptimisationseo"
  }

const feature = loadFeature('./__tests__/features/searchengineoptimisationseo-scenario.feature');

defineFeature(feature, (test) => {


    beforeEach(() => {
        jest.resetModules();
        jest.doMock('react-native', () => ({ Platform: { OS: 'web' }}));
        jest.spyOn(helpers, 'getOS').mockImplementation(() => 'web');
    });

    test('User navigates to searchengineoptimisationseo', ({ given, when, then }) => {
        let exampleBlockA:ShallowWrapper;
        let instance:Searchengineoptimisationseo; 

        given('I am a User loading searchengineoptimisationseo', () => {
            exampleBlockA = shallow(<Searchengineoptimisationseo {...screenProps}/>);
        });

        when('I navigate to the searchengineoptimisationseo', () => {
             instance = exampleBlockA.instance() as Searchengineoptimisationseo
        });

        then('searchengineoptimisationseo will load with out errors', () => {
            expect(exampleBlockA).toBeTruthy();
        });
    });
});
