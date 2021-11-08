
export const initialState = {
    todos: [
        {title: "item 1", completed: true, id: 123},
        {title: "item 2", completed: false, id: 456},
        {title: "item 3", completed: false, id: 789}
       
    ]

};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;

    }
        
};

export default reducer;