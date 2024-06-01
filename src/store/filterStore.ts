import { type Slice, createSlice } from '@reduxjs/toolkit'

export const filterSlice: Slice = createSlice({
  name: 'filters',
  initialState: {
    filterData: []
  },
  reducers: {
    set: (state: any, filters: any) => {
      state.filterData = filters.payload
    }
  }
})

export const { set } = filterSlice.actions
export default filterSlice.reducer
