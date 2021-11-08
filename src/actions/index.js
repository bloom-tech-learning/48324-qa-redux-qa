export const ADD_TODO = "ADD_TODO";

export const addTodo = (title) => {
    return { type: ADD_TODO, payload: title };
  };

  export const addThree = (title) => {
    return (dispatch => {
      dispatch(addTodo(title));

    })
  }