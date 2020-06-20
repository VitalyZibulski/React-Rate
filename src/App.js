import React from 'react';
import './App.scss';
import Layout from "./components/layout/Layout";
import CHF from './image/CHF.png';
import CNY from './image/CNY.png';
import EUR from './image/EUR.png';
import GBP from './image/GBP.png';
import JPY from './image/JPY.png';
import RUB from './image/RUB.png';
import USD from './image/USD.png';
import {RateContext} from "./context/RateContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      base: 'USD',
      rate: '',
      date: '',
      currency: {
        USD: {name: 'Доллар США', flag: USD, course: '9999999'},
        CNY: {name: 'Китайский Юань', flag: CNY, course: '9999999'},
        EUR: {name: 'Евро', flag: EUR, course: '9999999'},
        GBP: {name: 'Фунт Стерлингов', flag: GBP, course: '9999999'},
        JPY: {name: 'Японская Йена', flag: JPY, course: '9999999'},
        RUB: {name: 'Российский Рубль', flag: RUB, course: '9999999'},
        CHF: {name: 'Швейцарский Франк', flag: CHF, course: '9999999'},
      }
    }
  }


    render(){
      return (
        <RateContext.Provider value={{state: this.state}}>
          <Layout/>
        </RateContext.Provider>
      )
    }
}

export default App;
