import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "login",
  initialState: {
    token: "",
  },

  reducers: {
    success: {
      prepare: (token) => ({
        payload: { token },
      }),

      reducer: (draft, action) => {
        draft.token = action.payload.token;
      },
    },

    logout: {
      reducer: (draft) => {
        draft.token = "";
      },
    },
  },
});

export const { success, logout } = actions;
export default reducer;
