import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    AllProjects:{},
    status: '',
    error: null
};

export const getAllProjects = createAsyncThunk('project/getProjects', async () => {
    
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");//use la fake Api de json place holder para simular la request
        const data = res.json();
        return data;
    
})

export const projectsSlicer = createSlice({
    name: 'project',
    initialState,
    reducers: {
        filterById(state, action){
            state.projectToDisplay = action.payload
        }
    },
    //se utiliza para que el reducer sepa como manejar actions que vienen fuera del reducer
    extraReducers(builder) {
        builder
            .addCase(getAllProjects.pending, (state, action)=>{
                state.status = 'Loading';
            })

            .addCase(getAllProjects.fulfilled, (state, action)=>{
                let data = action.payload;
                state.status = 'Succeeded';
                state.AllProjects = data;
            })

            .addCase(getAllProjects.rejected,  (state, action)=>{
                state.status = 'rejected';
                state.error = action.error.message;
            })

    }
})

export const {filterById} = projectsSlicer.actions;


export default projectsSlicer.reducer;