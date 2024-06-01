import React from 'react'
import { ISort } from '../../../types.dt'

export default ({
  sort,
  handleOnClick
}: {
  sort: ISort
  handleOnClick: (idx: number) => void
}): JSX.Element => (
  <button
    type="button"
    onClick={() => handleOnClick(sort.id)}
    className={`sort__item ${sort.active ? 'active' : ''}`}
  >
    {sort.name}
  </button>
)
