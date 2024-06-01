import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import FlightsCard from './FlightsCard'
import { More } from '../..'
import { IFlight, IFlightsData } from '../../../types.dt'

export default (): JSX.Element => {
  const [flightsData, setFlightsData] = useState<IFlight[]>([])
  const [count, setCount] = useState<number>(0)

  const loadData: IFlightsData = useSelector<any, any>(
    (state: any) => state.flightData.flightData
  )

  useEffect(() => {
    if (!!loadData.flights && loadData.flights !== flightsData) {
      setFlightsData(loadData.flights)
    }
    if (loadData.count !== count) setCount(loadData.count)
  }, [loadData, flightsData, count])

  return (
    <div className="flights__list">
      {flightsData.map((flight: IFlight) => (
        <FlightsCard flight={flight} key={flight.id} />
      ))}
      <More count={count} />
    </div>
  )
}
