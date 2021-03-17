import React from 'react';
import { shallow, mount } from 'enzyme';

import Input from '../components/Input';

describe('<Input>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Input name="test_name" />);
    }).not.toThrow();
  });

  it('has one element', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toHaveLength(1);
  });

  describe('contains <input>', () => {
    it('renders one input', () => {
      const wrapper = shallow(<Input name="test_name" />);
      expect(wrapper.find('input')).toHaveLength(1); // 1개의 element 객체만 있는지...
      expect(wrapper.find('label')).toHaveLength(1); // 1개의 element 객체만 있는지...
    });

    it('assigns the prop value and type', () => {
      const expectedValue = '123';
      const wrapper = shallow(<Input name="test_name" value={expectedValue} />);
      expect(wrapper.find('input').prop('value')).toBe(expectedValue); // prop() 로 value의 프로퍼티 값과 컴포넌트에 전달된 expectedValue를 검증
      const { type, value } = wrapper.find('input').props(); // 필요한 프로퍼티 항목을 추출
      expect(value).toBe(expectedValue); // 두 값을 검증
      expect(type).toBe('text'); // type 검증
      expect(() => {
        wrapper.setProps({ type: 'invalid type' });
      }).toThrow();
      wrapper.setProps({ type: 'number' });
      expect(wrapper.find('input').prop('type')).toBe('number');
    });

    it('calls back onChange on input change', () => {
      const changeStub = jest.fn(); // 함수의 호출을 감시하는 기능
      const wrapper = shallow(<Input name="test_name" onChange={changeStub} />); // 감시 함수를 onChange 에 할당
      expect(changeStub).not.toHaveBeenCalled(); // 이벤트 실행 이전에 호출 검증 메소드 toHaveBeenCalled 로 검증
      const expectedTargetValue = 'updated input';
      wrapper.find('input').simulate('change', { target: { value: expectedTargetValue } }); // onChange 이벤트를 재현
      expect(changeStub).toHaveBeenCalledTimes(1); // 함수 호출 횟수를 검증
      expect(changeStub).toHaveBeenCalledWith('test_name', expectedTargetValue); // 함수 인자들을 검증
    });
  });

  it('renders errorMessage', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.find('.error')).toHaveLength(0); // error 스타일을 포함한 에러 메시지가 있는지...
    const expectedErrorMessage = '올지 못한 값이 입력되었습니다';
    wrapper.setProps({ errorMessage: expectedErrorMessage }); // setProps()로 errorMessage 프로퍼티 값을 변경
    expect(wrapper.find('span').prop('className')).toBe('error');
    expect(wrapper.find('.error')).toHaveLength(1); // errorMessage 프로퍼티를 추가했기 때문에 정상적으로 포함된것을 확인할 수 있음
    expect(wrapper.html()).toContain(expectedErrorMessage); // html()로 HTML에서 실제 오류 메시지가 출력되는지 검증
  });
});
