import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '../components/Input';

storiesOf('Input', module)
  .add('기본 설정2', () => <Input name="name" />)
  .addWithJSX('기본 설정', () => <Input name="name" />);
