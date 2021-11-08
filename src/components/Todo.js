
const Todo = (props) => {
    // console.log('props in Todo: ', props);
    return (
        <li>{props.todo.title}</li>
    );
}

export default Todo;