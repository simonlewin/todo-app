// react redux's connect function
import { connect } from "react-redux";

// import in the Articles component
import Tasks from "../components/Tasks";

// import in the getTitles API action
import { getTasks } from "../data/actions/api";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => ({
  tasks: state.tasks,
});

// setup mapDispatchToProps to call the action
const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(getTasks()),
});

// connect up mapStateToProps with the Articles component
// Articles' props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);