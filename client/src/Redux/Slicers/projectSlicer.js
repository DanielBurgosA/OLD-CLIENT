import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    AllProjects:{},
    postStatus: '',
    error: null,
};

export const postProject = createAsyncThunk('project/postProject', async (info) => {
    
        const res = await axios.post("http://localhost:3001/projects", info);
        const data = res.json();
        return data;
    
})

export const projectsSlicer = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    //se utiliza para que el reducer sepa como manejar actions que vienen fuera del reducer
    extraReducers(builder) {
        builder
            .addCase(postProject.fulfilled, (state, action)=>{
                let data = action.payload;
                state.status = 'Succeeded';
                state.AllProjects = data;
            })

    }
})



export default projectsSlicer.reducer;