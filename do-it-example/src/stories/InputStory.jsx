import React, { Component } from 'react';
import storiesOf from '@storybook/react';

import { Input } from '../components/Input';

storiesOf('Input', module).add('기본 설정', () => <Input name="name" />);
