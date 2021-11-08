import './App.css';

const TodoList = () => {
  return(
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
  );
}

const TodoForm = () => {
  return (
    <form>
        <input />
        <button>Submit Todo</button>
        <button>Submit Three</button>
      </form>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1> Todo </h1>
      <TodoList />
      <TodoForm />
    </div>
  );
}


