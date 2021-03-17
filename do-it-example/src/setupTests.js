// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import * as Aphrodite from 'aphrodite';
import * as AphroditeNoImportant from 'aphrodite/no-important';

// querySelector 기능을 건너뛰도록 설정
// 아프로디테의 DOM 호출 과정을 중지
Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection();

configure({ adapter: new Adapter() });

// 경고 메시지를 오류로 인식
afterEach(() => {
  console.error.mockClear();
});

// spyOn() 으로 console error() 함수를 실제 기능 대신 mockImplementation에 정의된 함수가 실행하도록 설정
// console.error() 함수를 실행할 때 전달된 인자로 오류를 발생하도록 한다
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation((e) => {
    throw new Error(e);
  });
});
