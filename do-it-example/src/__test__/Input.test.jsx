import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../components/Input';

describe('<Input>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input name="test_name" />, div);
    ReactDOM.unmountComponentAtNode(div);
    expect(React.isValidElement(<Input name="test_name" />)).toBeTruthy();
  });
});
