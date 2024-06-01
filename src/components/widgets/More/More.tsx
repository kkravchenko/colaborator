import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set } from '../../../store/pageStore'

export const More = ({ count }: { count: number }): JSX.Element => {
  const [page, setPage] = useState<number>(1)
  const dispatch = useDispatch()

  const pageData = useSelector((state: any) => state.page.page)

  useEffect(() => {
    if (pageData !== page) setPage(pageData)
  }, [pageData, page])

  const handleClick = () => {
    setPage(page + 1)
    dispatch(set(page + 1))
  }

  return (
    <>
      {count > page * Number(process.env.REACT_APP_FLIGHT_PER_PAGE) && (
        <button type="button" className="fligths__more" onClick={handleClick}>
          Показати ще{' '}
          {count - page * Number(process.env.REACT_APP_FLIGHT_PER_PAGE) > 5
            ? 5
            : count - page * Number(process.env.REACT_APP_FLIGHT_PER_PAGE)}{' '}
          квитків
        </button>
      )}
    </>
  )
}
