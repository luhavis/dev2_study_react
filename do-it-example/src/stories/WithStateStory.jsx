import React from 'react';
import { storiesOf } from '@storybook/react';

import { CounterWithCountState, CounterWithCountHandler } from '../components/withState';
import CounterComponent from '../components/CounterComponent';

storiesOf('WithState', module)
  .addWithJSX('CounterWithCountState', () => <CounterWithCountState />)
  .addWithJSX('CounterWithCountHandler', () => <CounterWithCountHandler />)
  .addWithJSX('CounterWithoutHoC', () => <CounterComponent />);
