
const initialData={
    list:[]
}
const imageListingReducers=(state=initialData,action)=>{
  switch(action.type){
    case "ADD_TODO":

    const{id, data}=action.payload;
    return {
        ...state,
        list:[
            ...state.list,
            {
              id:id,
              data:data
            }
        ]
    }
    case "DELETE_TODO":
    //  console.log('deleteaction',action);
   const newList= state.list.filter((ele)=>  ele.id !== action.id)
   
    return {
        ...state,
        list: newList
        
    }
    case "REMOVE_TODO": return {
        ...state,
        list: []
    }

    case "EDIT_TODO":
      // const a=action.payload;
      console.log('action',action);
      const newList1= state?.list?.find((ele)=>ele?.id === action.id);
      console.log('newlist',newList1);
       return {
        ...state,
        a:newList1
        // text:state.list[action.payload]
    }

    default:return state;
  }
}
export default imageListingReducers;