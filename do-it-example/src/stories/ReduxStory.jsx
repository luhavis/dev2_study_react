import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp01 from '../components/Redux01';
import ReduxApp02 from '../components/Redux02';
import ReduxApp03 from '../components/Redux03';
import AdvReduxApp01 from '../components/AdvReduxApp01';
import AdvReduxApp02 from '../components/AdvReduxApp02';
import AdvReduxApp03 from '../components/AdvReduxApp03';
import AdvReduxApp04 from '../components/AdvReduxApp04';
import AdvReduxApp05 from '../components/AdvReduxApp05';

storiesOf('ReduxApp', module)
  .addWithJSX('기본 스토어 설정', () => <ReduxApp01 />)
  .addWithJSX('기본 액션 호출', () => <ReduxApp02 />)
  .addWithJSX('기본 리듀서 구현', () => <ReduxApp03 />)
  .addWithJSX('다중 리듀서 설정', () => <AdvReduxApp01 />)
  .addWithJSX('다중 액션 설정', () => <AdvReduxApp02 />)

  .addWithJSX('배열 액션 호출', () => <AdvReduxApp03 />)
  .addWithJSX('그래프DB 변환 작업', () => <AdvReduxApp04 />)
  .addWithJSX('그래프DB 수정 액션 호출', () => <AdvReduxApp05 />);
