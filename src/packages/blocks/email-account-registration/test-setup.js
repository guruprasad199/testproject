// test-setup.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };   
  global.localStorage = localStorageMock;
  function FormDataMock() { 
    this.append = jest.fn();   
  }
  global.FormData = FormDataMock
 
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
    OS: 'macos',
    select: () => null
}));

configure({ adapter: new Adapter() });
