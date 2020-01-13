import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './App.css';
import Container from './components/Container'
import Header from './components/Header'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  )
}
export default App

ReactDOM.render(<App />, document.querySelector('#root'));