
const Todo = (props) => {
    // console.log('props in Todo: ', props);
    return (
        <li>{props.todo.title} {props.todo.completed && <span>- Done</span>}</li>
    );
}

export default Todo;