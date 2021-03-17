import React from 'react';
import branch from 'recompose/branch';

import Button from './Button';

// export default branch(
//   ({ isLoading }) => isLoading,
//   () => () => <Button disabled>로딩중</Button>,
// )(Button);

function isLoading(props) {
  return props.isLoading;
}

function LoadingButton(props) {
  return <Button disabled>로딩중</Button>;
}

// isLoading 함수가 참값을 반환하면 로딩 메시지를, 로딩이 오나료되면 Loading button 컴포넌트를 반환
export default branch(isLoading, () => LoadingButton)(Button);
