export interface IFlight {
  id: number
  price: number
  name: string
  out: string
  outtime: string
  outtimeinterval: string
  intimeinterval: string
  in: string
  inttime: string
  replane: string
}

export interface IFlightsData {
  flights: IFlight[]
  count: number
  filters: string[]
}

export interface ISort {
  id: number
  name: string
  active: boolean
}
