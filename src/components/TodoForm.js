

const TodoForm = () => {
    const handleSubmit =(e) => {
        e.preventDefault();
        console.log('Adding todo');
    
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