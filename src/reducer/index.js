import { ADD_TODO } from '../actions'
export const initialState = {
    todos: [
        {title: "item 1", completed: false, id: 123},
        {title: "item 2", completed: false, id: 456},
        {title: "item 3", completed: false, id: 789}
       
    ]

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            //1. I need to get the todo title
            //2. return state with changed todos
            //3. add on a todo with title as action.payload
            //4. return todos with new todo
        const newTodo = {
            title: action.payload,
            completed: false,
            id: Date.now()
        };

        return {
            ...state,
            todos: [...state.todos, newTodo]
          };

        default:
            return state;
    }        
};

export default reducer;