const initialState ={
    posts:[
        {id:1 ,title:"Get some data", content:'bjhcbf hjvbefhjv uefvbfev'},
        {id:2 ,title:"Get some data", content:'bjhcbf hjvbefhjv uefvbfev'},
        {id:3 ,title:"Get some data", content:'bjhcbf hjvbefhjv uefvbfev'}
    ]
}

const postReducer =(state=initialState, action)=>{
    return state;
}
export default postReducer;