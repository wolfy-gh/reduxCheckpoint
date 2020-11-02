// **************************** ACTION APP TODO *********************************
//ADD_INPUT TODO  ACTION
export const addInput = (input) => {
    return {
        type :"ADD_INPUT",
        playload : input
    }
}
//ADD TODO ACTION
export const addTodo = (todo) => {
    return {
        type : "ADD_TODO",
        playload : todo , 
    }
}
// DELETE TODO ACTION
export const deleleTodo = (id) => {
    return {
        type :"DELETE_TODO", 
        playload : id ,
    }
}
// MODIFY TODO ACTION
export const modifyTodo = todo => {
    return {
        type : "MODIFY_TODO", 
        playload :todo
    }
}
// ISDONE TODO ACTION
export const isDoneTodo = (id)=>{
    return {
        type : "IS_DONE",
        playload : id
    }
}
// FILTER INPUT  ACTION
export const filter = (filter) => {
    return {
        type : "FILTER", 
        playload : filter ,
    }
}
// FILTER  ACTION
export const filterdata = (data) => {
    return {
        type : "DATA", 
        playload : data ,
    }
}


