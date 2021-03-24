import { connect } from 'react-redux';
import { resetFilter } from '../actions/searchFilterActions';
import Button from '../components/Button';

const mapStateToProps = (state, props) => {
  // 검색 값이 없는 경우 버튼을 disabled 처리
  const disabled = Object.values(state.searchFilter).reduce(
    (result, value) => result && !value,
    true,
  );

  return {
    disabled,
  };
};

const mapDispatchToProps = {
  onPress: resetFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
