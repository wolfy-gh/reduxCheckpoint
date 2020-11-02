const filterReducer = (state =[],action)=>{
    switch(action.type){
        case 'DATA' : 
            return action.playload
        default : 
            return state 
    }
}
export default filterReducer