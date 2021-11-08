

const TodoForm = () => {
    const handleSubmit =(e) => {
        e.preventDefault();
    
    }
    return (
      <form>
          <input />
          <button onClick={handleSubmit}>Submit Todo</button>
          <button>Submit Three</button>
        </form>
    );
  }

  export default TodoForm;