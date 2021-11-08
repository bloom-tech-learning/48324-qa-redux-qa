import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div className="App">
      <h1> Todo </h1>
      <TodoList />
      <TodoForm />
    </div>
  );
}


