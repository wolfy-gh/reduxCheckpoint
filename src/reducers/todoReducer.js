const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: Math.random(), name: action.playload, isDone: false }]
        case 'DELETE_TODO':
            return [...state].filter(el => el.id !== action.playload)
        case 'MODIFY_TODO':
            return  [...state].map(el => el.id === action.playload.id ? { ...el, name: action.playload.name } : el)
        case 'IS_DONE': 
            return [...state].map(el => el.id === action.playload ? { ...el, isDone: !el.isDone } : el)
        default:
            return state
    }
}
export default todoReducer 
