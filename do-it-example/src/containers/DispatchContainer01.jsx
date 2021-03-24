import { connect } from 'react-redux';
import ActionComponent from '../components/ActionComponent01';

import { setAge } from '../actions/collectionAction';

const mapDispatchToProps = (dispatch) => {
  return {
    setAge: (id, age) => dispatch(setAge(id, age)),
  };
};

export default connect(null, mapDispatchToProps)(ActionComponent);
