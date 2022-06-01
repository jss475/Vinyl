import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SignInSeller from './SignInSeller'
import SignInBuyer from './SignInBuyer'
import SignUpSeller from './SignUpSeller'
import SignUpBuyer from './SignUpBuyer'
import Logout from './Logout'
import NavBar from './NavBar';
import Home from './Home'
import Products from './Products';
import MyListings from './MyListings'
import AddListing from './AddListing'
import ProductListing from './ProductListing';

function App() {

    // set state
  const [searched, setSearched] = useState("")
  const [allProducts, setAllProducts] = useState([])
  const [allSellers, setAllSellers] = useState([])
  const [allBuyers, setAllBuyers] = useState([])

  //sign in msg
  const [signInMsg, setSignInMsg] = useState()

  //who signed in as buyer
  const [signedInBuyer, setSignedInBuyer] = useState([])
  //who signed in as seller
  const [signedInSeller, setSignedInSeller] = useState([])

  //set history for delete item
  let history = useHistory();


  //fetch product data
  useEffect(()=> {
    fetch('http://localhost:9292/products')
      .then(res => res.json())
      .then(data => setAllProducts(data))
  },[])

  //fetch seller data
  useEffect(()=> {
    fetch('http://localhost:9292/sellers')
      .then(res => res.json())
      .then(data => setAllSellers(data))
  },[])

  //fetch buyer data
  useEffect(()=> {
    fetch('http://localhost:9292/buyers')
      .then(res => res.json())
      .then(data => setAllBuyers(data))
  },[])


  //handle signupbuyer event
  function handleSignUpBuyer(e){
    e.preventDefault() //don't reset the form on submit

    if (e.target.password.value === "" && e.target.username.value === "") {
      setSignInMsg("Please Fill Out Your Username and Password!");
    } else if (e.target.password.value === "") {
      setSignInMsg("Please Fill Out Your Password");
    } else if (e.target.username.value === "") {
      setSignInMsg("Please Fill Out Your Username");
    } else {

      //filter out the buyers that have the same username
      let filteredBuyer = allBuyers.filter((buyer) => {
        if (buyer.username === e.target.username.value) {
          return true;
        } else {
          return false;
        }
      });

      if(filteredBuyer.length){
        setSignInMsg("Your username has already been taken!")
      }else{
        //create configObj to POST the new buyer
        let configObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: e.target.username.value,
            password: e.target.password.value,
            name: e.target.name.value
          }
          )
        }
        //update server for new buyer
        fetch('http://localhost:9292/buyers', configObj)
          .then(res => res.json())
          .then(data => setAllBuyers([...allBuyers,data]))

          document.querySelector('#sign_up_buyer_form').reset()
        }
      }
    }

  //handle signupseller event
  function handleSignUpSeller(e) {
    e.preventDefault() //don't reset the form on submit
    
    if (e.target.password.value === "" && e.target.username.value === "") {
      setSignInMsg("Please Fill Out Your Username and Password!");
    } else if (e.target.password.value === "") {
      setSignInMsg("Please Fill Out Your Password");
    } else if (e.target.username.value === "") {
      setSignInMsg("Please Fill Out Your Username");
    } else {

      //filter out the sellers that have the same username
      let filteredSeller = allSellers.filter((seller) => {
        debugger
        if (seller.username === e.target.username.value) {
          return true;
        } else {
          return false;
        }
      });
    

      if(filteredSeller.length){
        setSignInMsg("Your username has already been taken!")
      }else{
        setSignInMsg("Success!")
        //create configObj to POST the new seller
        let configObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: e.target.username.value,
            password: e.target.password.value,
            name: e.target.name.value,
            balance: 0
          })
        }
        //update server for new seller
        fetch('http://localhost:9292/sellers', configObj)
        .then(res => res.json())
        .then(data => setAllSellers([...allSellers,data]))

        document.querySelector('#sign_up_seller_form').reset()
    }
  }
}



  //handle signinbuyer event
  function handleSignInBuyer(e){
    e.preventDefault()
    if (e.target.password.value === "" && e.target.username.value === "") {
      setSignInMsg("Please Fill Out Your Username and Password!");
    } else if (e.target.password.value === "") {
      setSignInMsg("Please Fill Out Your Password");
    } else if (e.target.username.value === "") {
      setSignInMsg("Please Fill Out Your Username");
    } else {
      
      //filter out the users that are signed in
      let filteredBuyer = allBuyers.filter((buyer) => {
        if (
          buyer.username === e.target.username.value &&
          buyer.password === e.target.password.value
        ) {
          return true;
        } else {
          return false;
        }
      });
        if(!filteredBuyer.length){
          setSignInMsg("Your Username and Password Are Not In The System")
        }else {
          setSignInMsg("Success!")
          //set who signed in
          setSignedInBuyer(filteredBuyer)
          //local storage of username
          localStorage.setItem("username", e.target.username.value);
        }
      }
      document.querySelector('#sign_in_buyer_form').reset()
    }
    
    
  

  //handle signinseller event
  function handleSignInSeller(e){
    e.preventDefault()
    if (e.target.password.value === "" && e.target.username.value === "") {
      setSignInMsg("Please Fill Out Your Username and Password!");
    } else if (e.target.password.value === "") {
      setSignInMsg("Please Fill Out Your Password");
    } else if (e.target.username.value === "") {
      setSignInMsg("Please Fill Out Your Username");
    } else {
      
      //filter out the users that are signed in
      let filteredSeller = allSellers.filter((seller) => {
        if (
          seller.username === e.target.username.value &&
          seller.password === e.target.password.value
        ) {
          return true;
        } else {
          return false;
        }
      });

        if(!filteredSeller.length){
          setSignInMsg("Your Username and Password Are Not In The System")
        }else {
          setSignInMsg("Success!")
          //set who signed in
          setSignedInSeller(filteredSeller)
          //local storage of username
          localStorage.setItem("username", e.target.username.value);
        }
      }
      document.querySelector('#sign_in_seller_form').reset()
  }

  //handle logout event
  function handleLogout() {
    if(signedInSeller.length==false && signedInBuyer.length == true){
      setSignedInBuyer([])
      localStorage.setItem("username",'')
    }else if(signedInSeller.length == true && signedInBuyer.length ==false){
      setSignedInSeller([])
      localStorage.setItem("username",'')
    }
  }

  function handleUpdateItem(item) {
    console.log(item)
  }

  function handleDeleteItem(id) {
    fetch(`http://localhost:9292/products/${id}`,
    {method: "DELETE"})
    
    let filteredDeleteArray = allProducts.filter((product) => 
    product.id != id)
    setAllProducts(filteredDeleteArray)

    history.push(`/products`)
  }
  
    // search bar functionality
    function handleSearch(e) {
      setSearched(e)
    }

    // used for individual product listing ref
    function handleProductClick(product) {
      console.log(product)
  }

    const productsToDisplay = allProducts.filter((product) => 
      product.name.toLowerCase().includes(searched.toLowerCase()) || product.description.toLowerCase().includes(searched.toLowerCase()) ? true : false)

  //adding a new listing as a seller
  function handleAddListing(e){
    e.preventDefault();

    let configObj= {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: e.target.name.value,
            price: e.target.price.value,
            quantity: e.target.quantity.value,
            description: e.target.description.value,
            image: e.target.image.value,
            seller_id: signedInSeller[0].id
        })
      }

    fetch('http://localhost:9292/products',configObj)
        .then(res => res.json())
        .then(data => setAllProducts([...allProducts,data]))

    document.querySelector('#add_listing_form').reset()
    }

    //handle updating a product as a seller. Being sent to ProductListing.js
    function handleUpdateSubmit(e,id){
      e.preventDefault()
      console.log(e)
      console.log(id)
      // console.log(id)
      let configObj = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          quantity: e.target.quantity.value,
          price: e.target.price.value
        })
      }

      fetch(`http://localhost:9292/products/${id}`,configObj)
        .then(res => res.json())
        .then(data => {
          let newArray = allProducts.map(product => {
            if(product.id == id){
              product.price = data.price
              product.quantity = data.quantity
              return product
            }else{
              return product
            }
          })
          console.log(newArray)
          setAllProducts(newArray)
          setUpdatedClicked(false)}
          )
    }

    //handle true false ternary for showing the update form in ProductListing.js
    const [updatedClicked, setUpdatedClicked] = useState(false)

    function handleUpdateItem(){
        setUpdatedClicked(true)
    }

    

    return (
      <>
      {/* <div className='App'> */}
        <NavBar handleSearch={handleSearch} handleLogout={handleLogout} signedInBuyer={signedInBuyer} signedInSeller={signedInSeller}/>
        <Switch>
        <Route path="/signin/seller">
            <SignInSeller handleSignInSeller={handleSignInSeller}
            signInMsg={signInMsg}/>
          </Route>
          <Route path="/signin/buyer">
            <SignInBuyer handleSignInBuyer={handleSignInBuyer}
            signInMsg={signInMsg}
            />
          </Route>
          <Route path="/signup/seller">
            <SignUpSeller handleSignUpSeller={handleSignUpSeller}
            signInMsg={signInMsg}
            />
          </Route>
          <Route path="/signup/buyer" >
            <SignUpBuyer handleSignUpBuyer={handleSignUpBuyer}
            signInMsg={signInMsg}
            />
          </Route>
          {/* <Route path="/logout">
            <Logout handleLogout={handleLogout}/>
          </Route> */}
          <Route exact path='/products'>
            <Products products={productsToDisplay} signedInBuyer={signedInBuyer} signedInSeller={signedInSeller} handleProductClick={handleProductClick}/>
          </Route>     
          <Route exact path = "/mylistings">
            <MyListings products={productsToDisplay} signedInSeller={signedInSeller} handleProductClick={handleProductClick} />
          </Route>
          <Route exact path = "/addlisting">
            <AddListing signedInSeller={signedInSeller} handleAddListing={handleAddListing}  />
          </Route>
          <Route path='/products/:id'>
            <ProductListing allProducts={allProducts} allSellers={allSellers} signedInSeller={signedInSeller} handleDeleteItem={handleDeleteItem} handleUpdateItem={handleUpdateItem} handleUpdateSubmit={handleUpdateSubmit}
            updatedClicked={updatedClicked}
            />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>   
        </Switch>
      {/* </div> */}
      </>
  );
}

export default App;
