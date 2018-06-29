import { connect } from "react-redux";

import { postTask } from "../data/actions/api";

import Input from "../components/Input";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => {
      dispatch(postTask(data));
    },
  }
};

// connect up mapDispatchToProps with the Add component
// has to be the second argument - the first is for mapStateToProps
// Add' props are now controlled by this file
export default connect(null, mapDispatchToProps)(Input);