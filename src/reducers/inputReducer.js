const inputReducer = (state="",action)=> {
    switch(action.type){
        case 'ADD_INPUT': 
            return action.playload
        default :
            return state
    }
}
export default inputReducer