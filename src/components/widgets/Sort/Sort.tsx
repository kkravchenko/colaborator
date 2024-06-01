import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import { set } from '../../../store/sortStore'
import { ISort } from '../../../types.dt'
import SortElement from './SortElement'

export const Sort = () => {
  const [sortList, setSortList] = useState<ISort[]>([])

  const sortDataList: ISort[] = useSelector<any, any>(
    (state: any) => state.sortData.sortData
  )
  const dispatch = useDispatch<Dispatch<UnknownAction>>()

  useEffect(() => {
    if (sortDataList !== sortList) setSortList(sortDataList)
  }, [sortDataList, sortList])

  const handleOnClick = (idx: number): void => {
    dispatch(set(idx))
  }

  return (
    <div className="flights__sort">
      {sortList.map((sort: ISort) => (
        <SortElement sort={sort} handleOnClick={handleOnClick} key={sort.id} />
      ))}
    </div>
  )
}
