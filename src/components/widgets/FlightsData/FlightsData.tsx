import React from 'react'
import { Sort } from '../..'
import FlightsList from './FlightsList'

export const FlightsData = (): JSX.Element => (
  <div className="fligts__data">
    <Sort />
    <FlightsList />
  </div>
)
