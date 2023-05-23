import { createSlice } from "@reduxjs/toolkit";

//store => root reducer(state) => user slice,order slice
//state.user.email
//state.order
//state.ui

//action : state를 바꾸는 동작
//dispatch : 그 action을 실제로 실행하는것
//reducer : action이 실제로 실행되면 state를 바꾸는 로직
const initialState = {
  name: "",
  email: "",
  accessToken: "",
  money: 0,
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
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setMoney(state, action) {
      state.money = action.payload;
    },
  },
  extraReducers: (builder) => {
    //비동기 액션
  },
});

export default userSlice;
