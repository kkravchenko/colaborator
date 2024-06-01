import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import FilterElement from './FilterElement'
import { set } from '../../../store/filterStore'

export const Filters = ({ replains }: { replains: string[] }): JSX.Element => {
  const [filters, setFilters] = useState<string[]>([])
  const [replainsData, setReplainsData] = useState<string[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    const checkAllReplain = replains.filter(
      (replain: string) => replain === 'Всі'
    )
    const sortedArray = [...replains].sort((a, b) => (a < b ? -1 : 1))

    if (checkAllReplain.length === 0) {
      sortedArray.unshift('Всі')
    }
    setReplainsData(sortedArray)
  }, [replains])

  useEffect(() => {
    dispatch(set(filters))
  }, [filters, dispatch])

  const handleSelect = (replain: string): void => {
    if (replain === 'Всі') {
      if (filters.includes(replain)) {
        setFilters([])
      } else {
        setFilters([replain])
      }
    } else if (filters.includes(replain))
      setFilters(filters.filter((f: string) => f !== replain))
    else setFilters([...filters, replain])
  }

  return (
    <section className="flights__filters">
      <h2>КІЛЬКІСТЬ ПЕРЕСАДОК</h2>
      <div className="flights__filterslist">
        {replainsData.map((replain: string) => (
          <FilterElement
            key={uuidv4()}
            replain={replain}
            checked={filters}
            handleSelect={handleSelect}
          />
        ))}
      </div>
    </section>
  )
}
