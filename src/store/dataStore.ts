import { type Slice, createSlice } from '@reduxjs/toolkit'
import flightsData from '../data/data.json'
import { IFlight } from '../types.dt'

export const dataSlice: Slice = createSlice({
  name: 'data',
  initialState: {
    flightData: {}
  },
  reducers: {
    load: (state: any, param: any) => {
      const flights: IFlight[] = []
      const perPage: number = Number(process.env.REACT_APP_FLIGHT_PER_PAGE)
      let skip = false

      let fd = flightsData
      switch (param.payload.sort) {
        case 0: {
          fd = flightsData.sort((a, b) => a.price - b.price)
          break
        }
        case 1: {
          fd = flightsData.sort(
            (a, b) =>
              Number(a.outtime.replace(/[^\d]/gi, '')) +
              Number(a.inttime.replace(/[^\d]/gi, '')) -
              (Number(b.outtime.replace(/[^\d]/gi, '')) +
                Number(b.inttime.replace(/[^\d]/gi, '')))
          )
          break
        }
        case 2: {
          fd = flightsData.sort(
            (a, b) =>
              a.price +
              Number(a.replane.replace(/[^\d]/gi, '')) +
              Number(a.outtime.replace(/[^\d]/gi, '')) +
              Number(a.inttime.replace(/[^\d]/gi, '')) -
              (b.price +
                Number(b.replane.replace(/[^\d]/gi, '')) +
                Number(b.outtime.replace(/[^\d]/gi, '')) +
                Number(b.inttime.replace(/[^\d]/gi, '')))
          )
          break
        }
        default: {
          break
        }
      }

      const filters: string[] = []
      let count = 0
      fd.map((flight: IFlight) => {
        if (!filters.includes(flight.replane)) {
          filters.push(flight.replane)
        }

        if (param.payload.filters.length > 0) {
          skip = false
          if (!param.payload.filters.includes('Всі')) {
            if (param.payload.filters.includes(flight.replane)) {
              skip = false
            } else {
              skip = true
            }
          }
        }
        if (!skip) {
          if (flights.length <= perPage * param.payload.page) {
            flights.push(flight)
          }
          count += 1
        }
        return true
      })

      state.flightData = { flights, count, filters }
    }
  }
})

export const { load } = dataSlice.actions
export default dataSlice.reducer
