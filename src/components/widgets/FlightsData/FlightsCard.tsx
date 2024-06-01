import React from 'react'
import formatNumber from '../../../lib/formatNumber'
import { IFlight } from '../../../types.dt'

export default ({ flight }: { flight: IFlight }): JSX.Element => (
  <div className="flights__card">
    <div className="card__data">
      <div className="card__price">{formatNumber(flight.price)} $</div>
      <div className="card__logo"></div>
    </div>
    <div className="card__flight">
      <div className="card__detail">
        <div className="card__info">
          {flight.out} - {flight.in}
        </div>
        <div className="card__value">{flight.outtimeinterval}</div>
      </div>
      <div className="card__detail">
        <div className="card__info">В дорозі</div>
        <div className="card__value">{flight.outtime}</div>
      </div>
      <div className="card__detail">
        <div className="card__info">{flight.replane}</div>
        <div className="card__value">{flight.name}</div>
      </div>
    </div>
    <div className="card__flight">
      <div className="card__detail">
        <div className="card__info">
          {flight.in} - {flight.out}
        </div>
        <div className="card__value">{flight.intimeinterval}</div>
      </div>
      <div className="card__detail">
        <div className="card__info">В дорозі</div>
        <div className="card__value">{flight.inttime}</div>
      </div>
      <div className="card__detail">
        <div className="card__info">{flight.replane}</div>
        <div className="card__value">{flight.name}</div>
      </div>
    </div>
  </div>
)
