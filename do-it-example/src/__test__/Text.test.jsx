import React from 'react';
import { shallow } from 'enzyme';

import Text from '../components/Text';

describe('<Text>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Text>테스트</Text>);
    }).not.toThrow();
  });

  it('contains <span>', () => {
    expect(
      shallow(<Text>테스트</Text>)
        .dive() // 하위 컴포넌트도 출력
        .find('span'),
    ).toHaveLength(1);
  });
});
