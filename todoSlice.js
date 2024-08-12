import {createSlice} from "@reduxjs/toolkit"
const initialState={
    task:[],
    

}
export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        createTask:(state,action)=>{
            const allData=action.payload;
            state.task=[...state.task,allData]
        },
        updateTask:(state,action)=>{
            const task=[...state.task];
            let newTask=task.filter((t)=>t.name!=action.payload.previous);
            state.task=[...newTask,action.payload.new];

        },deleteTask:(state,action)=>{
            const task=[...state.task];
            state.task=task.filter((t)=>t.name!=action.payload);
        },searchTask:(state,action)=>{

        }
    }
})
export const {createTask,updateTask,deleteTask,searchTask}=todoSlice.actions;
export default todoSlice.reducer;