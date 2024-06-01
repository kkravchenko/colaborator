import { type Slice, createSlice } from '@reduxjs/toolkit'

export const pageSlice: Slice = createSlice({
  name: 'page',
  initialState: {
    page: 1
  },
  reducers: {
    set: (state: any, page: any) => {
      state.page = page.payload
    }
  }
})

export const { set } = pageSlice.actions
export default pageSlice.reducer
