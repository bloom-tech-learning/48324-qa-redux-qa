
import { addTodo  } from "./../actions"
import { connect } from "react-redux"

const TodoForm = (props) => {
    const handleSubmit =(e) => {
        e.preventDefault();
        // console.log('dispatch and todo action');
        // console.log('props: ', props); 
        props.dispatch(addTodo("this is a new title"));   
    }
    return (
      <form>
          <input />
          <button onClick={handleSubmit}>Submit Todo</button>
          <button>Submit Three</button>
        </form>
    );
  }

  export default connect()(TodoForm);