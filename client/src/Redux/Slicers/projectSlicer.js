import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  AllProjects: [],
  postStatus: "",
  error: null,
  projectId: {},
};

export const getProjectById = createAsyncThunk(
  "project/getProjectById",
  async (id) => {
    const res = await axios.get(`http://localhost:3001/projects/${id}`);
    const data = res.json();
    return data;
  }
);

<<<<<<< HEAD
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
=======
export const getProject = createAsyncThunk("project/getProject", async () => {
  const res = await axios.get(`http://localhost:3001/projects`);
  const data = res.json();
  return data;
});
>>>>>>> 095df69d1eac1beacf6a140f51063948f2943447

export const postProject = createAsyncThunk(
  "project/postProject",
  async (info) => {
    const res = await axios.post("http://localhost:3001/projects", info);
    const data = res.json();
    return data;
  }
);

const projectsSlicer = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postProject.fulfilled, (state) => {
        state.postStatus = "Succeeded";
      })
      .addCase(getProjectById.fulfilled, (state, action) => {
        state.projectId = action.payload;
      })
      .addCase(getProject.fulfilled, (state, action) => {
        state.AllProjects = action.payload;
      });
  },
});

export default projectsSlicer.reducer;
