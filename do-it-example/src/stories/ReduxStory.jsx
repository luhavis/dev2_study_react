import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp01 from '../components/Redux01';
import ReduxApp02 from '../components/Redux02';

storiesOf('ReduxApp', module)
  .addWithJSX('기본 스토어 설정', () => <ReduxApp01 />)
  .addWithJSX('기본 액션 호출', () => <ReduxApp02 />);
