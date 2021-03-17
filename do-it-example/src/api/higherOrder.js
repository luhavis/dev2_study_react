// 함수형 컴포넌트를 반환하는 하이어오더 컴포넌트
function higherOrderComponent(Component) {
  return function Enhanced(props) {
    return <Component {...props} />;
  };
}

/// 클래스형 컴포넌트를 반환하는 하이어오더 컴포넌트
function higherOrderComponent(Component) {
  return class Enhanced extends React.Component {
    render() {
      return <Component {...this.props} />;
    }
  };
}
