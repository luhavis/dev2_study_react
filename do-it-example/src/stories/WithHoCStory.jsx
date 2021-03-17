import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/Button';
import Text from '../components/Text';
import withHoC from '../components/withHoC';

const ButtonWithHoC = withHoC(Button);
const TextWithHoC = withHoC(Text);

storiesOf('WithHoC', module)
  .addWithJSX('기본 설정', () => (
    <div>
      <ButtonWithHoC>안녕하세요</ButtonWithHoC>
      <TextWithHoC>안녕하세요</TextWithHoC>
    </div>
  ))
  .addWithJSX('large 예제', () => (
    <div>
      <ButtonWithHoC large>안녕하세요</ButtonWithHoC>
      <TextWithHoC large>안녕하세요</TextWithHoC>
    </div>
  ));
