import { connect } from 'react-redux';
import { setFilter } from '../actions/searchFilterActions';
import Input from '../components/Input';

const mapStateToProps = (state, props) => {
  const value = state.searchFilter[props.name] || '';

  return {
    value,
  };
};

const mapDispatchToProps = {
  onChange: setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
