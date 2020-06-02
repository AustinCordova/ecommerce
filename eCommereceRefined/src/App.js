import React from 'react';
import List from './Components/Products/Products'
import Menu from './Components/Menu/Menu';
import Filters from './Components/Filter/Filters';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <List />
        <Filters />
        <Footer />
      </>
    )
  }
}

export default App;