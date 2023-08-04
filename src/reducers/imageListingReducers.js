
const initialData={
    list:[]
}
const imageListingReducers=(state=initialData,action)=>{
  switch(action.type){
    case "ADD_TODO":

    // const{id, data}=action.payload;
    return {
        ...state,
        list:[
            ...state.list,
          ...action.payload
        ]
    }
    case "DELETE_TODO":
    //  console.log('deleteaction',action);
//    const newList= state.list.filter((x)=>  x.id !== action.id)
const newList=state.list.filter((index)=>index !==action.id)
// const newList=state.splice(id,1);
   console.log("--newList--", newList)
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