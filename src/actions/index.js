export const addTodo=(data)=>{
    console.log('datas',data);
    return {
        type:'ADD_TODO',
        // payload:{
        //     id:new Date().getTime().toString(),
        //     data:data
        // }
        payload:data
    }
}


export const deleteTodo=(id)=>{

    return {
        type:'DELETE_TODO',
        id
    }

}

export const removeTodo=()=>{
    return {
        type:'REMOVE_TODO'
    }
}

export const editTodo=(id)=>{
    // console.log()


    console.log('editid',id)
    // console.log('newlist',newList1);
    return {
        type:"EDIT_TODO",
        id:id
        // ele:ele
    }
    
}