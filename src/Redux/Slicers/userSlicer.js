import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { users } from "../../Utils/seed";

const initialState = {
  users : [],
  postUserStatus: '',
};



// export const getUsers = createAsyncThunk(
//   "user/getUsers",
//   async () => {
//     const res = await axios.get(`/`);
//     const data = res.json();
//     return data;
//   }
// );


export const postUser = createAsyncThunk(
  "user/postUser",
  async (info) => {
    const res = await axios.post("/user", info);
    return res.data;
  }
);

const usersSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {  },
  extraReducers(builder) {
    builder
      .addCase(postUser.fulfilled, (state) => {
        state.postUserStatus = "Succeeded";
      })
    //   .addCase(getUserById.fulfilled, (state, action) => {
    //     state.projectId = action.payload;
    //   })
  },
});

export default usersSlicer.reducer;
