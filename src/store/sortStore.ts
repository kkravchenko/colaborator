import { type Slice, createSlice } from '@reduxjs/toolkit'
import { ISort } from '../types.dt'

export const sortSlice: Slice = createSlice({
  name: 'data',
  initialState: {
    sortData: [
      { id: 0, name: 'Найдешевший', active: true },
      { id: 1, name: 'Найшвидший', active: false },
      { id: 2, name: 'Оптимальний', active: false }
    ]
  },
  reducers: {
    set: (state: any, sort: any) => {
      const newSortData: ISort[] = []
      state.sortData.map((s: ISort) => {
        if (sort.payload === s.id) newSortData.push({ ...s, active: true })
        else newSortData.push({ ...s, active: false })
        return true
      })
      state.sortData = newSortData
    }
  }
})

export const { set } = sortSlice.actions
export default sortSlice.reducer
