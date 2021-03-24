import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp01 from '../components/Redux01';

storiesOf('ReduxApp', module).addWithJSX('기본 스토어 설정', () => <ReduxApp01 />);
