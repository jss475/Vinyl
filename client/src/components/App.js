import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './NavBar';
import Home from './Home'
import Products from './Products';

function App() {

    // set state
    const [products, setProducts] = useState([])
    const [searched, setSearched] = useState("")
    // use effect / fetch 
    function getFetch() {
      fetch('http://localhost:9292/products')
      .then(res => res.json())
      .then(data => setProducts(data))
    }

    console.log(products)

    useEffect(() => {
      getFetch()
    }, [])

    function handleSearch(e) {
      setSearched(e)
    }

    const productsToDisplay = products.filter((product) => 
      product.name.toLowerCase().includes(searched) || product.description.toLowerCase().includes(searched) ? true : false)

    return (
      <>
      {/* <div className='App'> */}
        <NavBar handleSearch={handleSearch} />
        <Switch>
          <Route exact path='/Products'>
            <Products products={productsToDisplay} />
          </Route>        
          <Route exact path='/Home'>
            <Home />
          </Route>
        </Switch>
      {/* </div> */}
      </>
  );
}

export default App;
