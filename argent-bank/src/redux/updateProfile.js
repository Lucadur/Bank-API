import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "update",
  initialState: {
    newFirstName: "",
    newLastName: "",
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
        draft.newFirstName = action.payload.firstName;
        draft.newLastName = action.payload.lastName;
      },
    },
  },

  reset: {
    reducer: (draft) => {
      draft.newFirstName = "";
      draft.newLastName = "";
    },
  },
});

export const { success, reset } = actions;
export default reducer;
