export const ADD_TODO = "ADD_TODO";

export const addTodo = (title) => {
    return { type: ADD_TODO, payload: title };
  };

  export const addThree = (title) => {
    return (dispatch => {
      // console.log('Just doing my thing here. no state change necessary');
      dispatch(addTodo(title));

      setTimeout (() => {
        dispatch(addTodo(title));
        setTimeout(() => {
          dispatch(addTodo(title));
        }, 5000)
      }, 3000)
    })
  }