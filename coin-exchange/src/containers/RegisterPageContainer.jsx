import { connect } from "react-redux";
import RegisterPage from "../components/RegisterPage";
import { createUser } from "../actions/userActions";
import { userCreateLoadingStateSelector } from "../selectors/userSelectors";

export default connect(
  (state) => ({
    loading: userCreateLoadingStateSelector(state),
  }),
  { createUser }
)(RegisterPage);
