import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "derk" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.paylod.user;
      state.token = action.paylod.token;
    },
    setlogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.Friends = action.paylod.Friends;
      } else {
        console.log("user friends nin-exsistene");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.posts;
    },
    setPost: (state, action) => {
      const updatedPost = state.posts.map((post) => {
        if (post._id === action.paylod.post_id) return action.paylod.post;
        return post;
      });
      state.post = updatedPost;
    }
  } 
});
export const {setMode, setLogin, setlogout, setFriends,setPosts, setPost} = authSlice.action;
export default authSlice.reducers