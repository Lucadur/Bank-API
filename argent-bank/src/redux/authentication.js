import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "authentication",
  initialState: {
    isConnected: false,
    firstName: "",
    lastName: "",
  },

  reducers: {
    success: {
      prepare: (data) => ({
        payload: {
          firstName: data.body.firstName,
          lastName: data.body.lastName,
        },
      }),

      reducer: (draft, action) => {
        draft.firstName = action.payload.firstName;
        draft.lastName = action.payload.lastName;
        draft.isConnected = true;
      },
    },

    logout: {
      reducer: (draft) => {
        draft.isConnected = false;
        draft.firstName = "";
        draft.lastName = "";
      },
    },
    update: {
      prepare: (data) => ({
        payload: {
          firstName: data.body.firstName,
          lastName: data.body.lastName,
        },
      }),
      reducer: (draft, action) => {
        draft.firstName = action.payload.firstName;
        draft.lastName = action.payload.lastName;
      },
    },
  },
});

export const { success, logout, update } = actions;
export default reducer;
