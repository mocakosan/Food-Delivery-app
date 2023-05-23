import { createSlice } from "@reduxjs/toolkit";

//store => root reducer(state) => user slice,order slice

const initialState = {
  name: "",
  email: "",
  accessToken: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      //동기 액션
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
    },
  },
  extraReducers: (builder) => {
    //비동기 액션
  },
});

export default userSlice;
