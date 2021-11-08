
import { addTodo, addThree} from "./../actions"
import { connect } from "react-redux"

const TodoForm = (props) => {
    const handleSubmit =(e) => {
        e.preventDefault();
        // console.log('dispatch and todo action');
        // console.log('props: ', props); 
        props.dispatch(addTodo("this is a new title"));   
    }

    const handleThreeSubmit = (e) => {
      e.preventDefault();
      props.dispatch(addThree("Three of me!!!"));
    };

    return (
      <form>
          <input />
          <button onClick={handleSubmit}>Submit Todo</button>
          <button onClick={handleThreeSubmit}>Submit Three</button>
        </form>
    );
  }

  export default connect()(TodoForm);