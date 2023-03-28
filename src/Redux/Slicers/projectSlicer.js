import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { project } from "../../Utils/seed";
import { instance } from "../../Utils/AttachTokenToReq";
import Cookie from "js-cookie";

const initialState = {
  AllProjects: [...project],
  postStatus: "",
  error: null,
  projectId: {},
  projectByName: [],
  ProjectsToDisplay: [...project],
  filterLocation: [],
  filterState: [],
  projectsSearch: "",
  seeLaterItemsAdds: [],
  seeLaterItemsGet: []
};



export const getProjectById = createAsyncThunk(
  "project/getProjectById",
  async (id) => {
    const res = await axios.get(`/projects/${id}`);
    return res.data;
  }
);

export const getProjectByName = createAsyncThunk(
  "project/getProjectByName",
  async (name) => {
    const res = await axios.get(`/projects?name=${name}`);
    return res.data;
  }
);

export const getProject = createAsyncThunk("project/getProject", async () => {
  const res = await axios.get(`/projects`);
  return res.data;
});

export const postProject = createAsyncThunk(
  "project/postProject",
  async (info) => {
    
    axios.interceptors.request.use(req => {
      const token = Cookie.get("value")
      req.headers.authorization =`Bearer ${token}`;
      return req;
    });

    try {
      const res = await axios.post("/projects", info);


      console.log(res.data)
      return res.data;

    } catch (error) {
      console.log(error.message)
    }

  }
);

const projectsSlicer = createSlice({
  name: "project",
  initialState,
  reducers: {
    /////////logica get by id/////////
    cleanId(state, action) {
      state.projectId = {};
    },

    provGetId(state, action) {
      state.projectId = state.AllProjects.filter((project) => action.payload == project.id)[0];
    },

    ///////////logica filtros////////////
    filter(state, action) {
      if (!state.filterLocation.length && !state.filterState.length && state.searchName) {
        state.ProjectsToDisplay = [...state.AllProjects];
        state.projectsFiltred = [...state.AllProjects];
      } else {
        let toFilter = [...state.AllProjects];

        ////////// search ///////////////
        if (state.projectsSearch.length) {
          let answers = state.AllProjects.filter((project) => project.name.indexOf(state.projectsSearch) != -1)
          toFilter = [...answers];
        }

        if (state.filterState.length) {
          const filters = [...state.filterState];
          toFilter = toFilter.filter((project) =>
            filters.some((state) => project.completed === state)
          );
        }

        if (state.filterLocation.length) {
          const filters = [...state.filterLocation];
          toFilter = toFilter.filter((project) =>
            filters.some((location) => project.location === location)
          );
        }
        state.ProjectsToDisplay = [...toFilter];
        state.projectsFiltred = [...toFilter];
      }
    },

    addFilterLocation(state, action) {
      state.filterLocation = [...action.payload];
    },

    addFilterState(state, action) {
      state.filterState = [...action.payload];
    },

    ////////// search ///////////////
    searchName(state, action) {
      state.projectsSearch = action.payload;
    },

    //logica ordenamiento
    orderByAlpha(state, action) {
      if (!state.ProjectsToDisplay.length) return;
      else if (action.payload === "none")
        state.ProjectsToDisplay = [...state.projectsFiltred];
      else {
        if (action.payload === "asc" || action.payload === "desc") {
          const toFilter = [...state.projectsFiltred];
          let sorted =
            action.payload === "asc"
              ? toFilter.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                return 0;
              })
              : toFilter.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                return 0;
              });
          state.ProjectsToDisplay = [...sorted];
        } else {
          const toFilter = [...state.projectsFiltred];
          let sorted =
            action.payload === "-"
              ? toFilter.sort((a, b) => {
                if (a.cost > b.cost) return 1;
                if (a.cost < b.cost) return -1;
                return 0;
              })
              : toFilter.sort((a, b) => {
                if (a.cost > b.cost) return -1;
                if (a.cost < b.cost) return 1;
                return 0;
              });
          state.ProjectsToDisplay = [...sorted];
        }
      }
    },
    //estado para saber cuantos projectos estan en ver mas tarde
    addseeLaterItem(status, action) {
      const itemSelected = status.AllProjects.filter((project) => project.id == action.payload);
      status.seeLaterItemsAdds.push(itemSelected[0]);
      localStorage.setItem("projectsToSeeLater", JSON.stringify(status.seeLaterItemsAdds));
    },

    getSeeLaterItem(status) {
      const data = localStorage.getItem("projectsToSeeLater");
      const itemsToSeeLater = JSON.parse(data);
    }
  },

  extraReducers(builder) {
    builder
      .addCase(postProject.fulfilled, (state) => {
        state.postStatus = "Succeeded";
      })
      .addCase(getProjectById.fulfilled, (state, action) => {
        state.projectId = action.payload;
      })
      .addCase(getProject.fulfilled, (state, action) => {
        state.AllProjects = [...action.payload];
        state.ProjectsToDisplay = [...action.payload];
        state.projectsFiltred = [...action.payload];
      })
      .addCase(getProjectByName.fulfilled, (state, action) => {
        state.projectByName = action.payload;
      });
  },
});
export const { filter, addFilterLocation, addFilterState, orderByAlpha, provGetId, cleanId, searchName, addseeLaterItem, getSeeLaterItem } = projectsSlicer.actions;
export default projectsSlicer.reducer;
