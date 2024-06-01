import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import { Helmet } from 'react-helmet'
import { load } from '../../../store/dataStore'
import { Header, Filters, FlightsData } from '../..'
import { IFlight, ISort, IFlightsData } from '../../../types.dt'

export const Flights = (): JSX.Element => {
  const [sort, setSort] = useState<number>(0)
  const [flights, setFlights] = useState<IFlight[]>([])
  const [filtersData, setFiltersData] = useState<string[]>([])
  const [filters, setFilters] = useState<string[]>([])
  const [page, setPage] = useState<number>(1)
  const dispatch = useDispatch<Dispatch<UnknownAction>>()

  useEffect(() => {
    dispatch(load({ filters, sort, page }))
  }, [dispatch, filters, sort, page])

  const sortData: ISort[] = useSelector<any, any>(
    (state: any) => state.sortData.sortData
  )

  useEffect(() => {
    const activeSort: number = sortData.filter((s: ISort) => s.active)[0].id
    if (activeSort !== sort) {
      setSort(activeSort)
    }
  }, [sortData, sort])

  const filtData: string[] = useSelector<any, any>(
    (state: any) => state.filterData.filterData
  )

  useEffect(() => {
    if (filtData !== filters) {
      setFilters(filtData)
    }
  }, [filtData, filters])

  const pageData: number = useSelector<any, any>(
    (state: any) => state.page.page
  )

  useEffect(() => {
    if (pageData !== page) setPage(pageData)
  }, [pageData, page])

  const loadData: IFlightsData = useSelector<any, any>(
    (state: any) => state.flightData.flightData
  )

  useEffect(() => {
    if (!!loadData.flights && loadData.flights !== flights) {
      setFlights(loadData.flights)

      setFiltersData(loadData.filters)
    }
  }, [loadData, flights])

  return (
    <>
      <Helmet>
        <title>Colaboator Flights List</title>
        <meta
          name="description"
          content="The best Flights List over the world"
        ></meta>
      </Helmet>

      <Header />
      <div className="flights">
        <Filters replains={filtersData} />
        <FlightsData />
      </div>
    </>
  )
}
