import React, {useContext} from 'react';
import './countResult.scss';
import {RateContext} from "../../context/RateContext";

export const CountResult = () => {
  const {state} = useContext(RateContext)

  return (
    <div className="calcResult">
      <ul>
        <li>
          <p>
            <span>{state.inputValue}&nbsp;RUB</span>
            =
            <span>{state.result}&nbsp;{state.currencyValue}</span>
          </p>
        </li>
      </ul>
    </div>
  )
}