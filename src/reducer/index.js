
export const initialState = {
    todos: [
        {title: "item 1", complete: false, id: 123},
        {title: "item 2", complete: false, id: 456},
        {title: "item 3", complete: false, id: 789}
       
    ]

};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;

    }
        
};

export default reducer;