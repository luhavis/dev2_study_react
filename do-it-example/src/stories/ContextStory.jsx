import React from 'react';
import { storiesOf } from '@storybook/react';

import HomePageComponent from '../components/HomePageComponent';
import HomePageWithProvider from '../components/HomePageWithProvider';
import HomePageWithTwoProvider from '../components/HomePageWithTwoProvider';

storiesOf('HomePageComponent', module)
  .addWithJSX('컨텍스트 예제', () => <HomePageComponent />)
  .addWithJSX('Provider 예제', () => <HomePageWithProvider />)
  .addWithJSX('이중 Provider 예제', () => <HomePageWithTwoProvider />);
