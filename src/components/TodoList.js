import Todo from "./Todo";

import { connect } from "react-redux";

const TodoList = (props) => {
    const { todos } = props;
    return(
      <ul>
          {
              todos.map(todo => {
                return <Todo todo = {todo}/>
              })
          }          
        </ul>
    );
  }

  const mapToStateToProps = (state) => {
    console.log('state in TodoList: ', state);
    return {
        todos: state.todos
    }
  }
  export default connect(mapToStateToProps)(TodoList);
  