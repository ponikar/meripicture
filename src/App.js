import React from 'react'
import Background from './Components/Background'
import Header from './Components/Header'
import MovieInfo from './Components/MovieInfo'
import { Provider } from 'react-redux'
import Store from './Store'

export default class App extends React.Component {
  render() {
      return (
        <Provider store={Store}> 
        <Background>
        <Header />
        <MovieInfo />   
        </Background>
      </Provider>
       )
  }
}