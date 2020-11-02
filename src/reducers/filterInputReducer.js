const filterInputReducer = (state = "all", action) => {
    switch (action.type){
        case 'FILTER' : 
            return  action.playload
        default : 
            return state
    }
}
export default filterInputReducer