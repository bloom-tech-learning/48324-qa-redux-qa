import Todo from "./Todo";

import { connect } from "react-redux";

const TodoList = (props) => {
    const { todos } = props;
    return(
      <ul>
          <Todo />
          <Todo />
          <Todo />
          
        </ul>
    );
  }

  const mapToStateToProps = (state) => {
    console.log('state in TodoList: ', state);
    return {
        state: state.todos
    }
  }
  export default connect(mapToStateToProps)(TodoList);
  