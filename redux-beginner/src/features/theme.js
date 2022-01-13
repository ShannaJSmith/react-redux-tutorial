import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = ""

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { value: initialStateValue },
  reducers: {
    changeColour: (state, action) => {
      state.value = action.payload
      if (state.value !== typeof 'string') {
        console.log("not a valid colour")
      }
    }
  }
})

export const { changeColour } = themeSlice.actions 

export default themeSlice.reducer