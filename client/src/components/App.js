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
import ScrollToTop from './ScrollToTop';



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

  //true false state for seller sign in
  const [sellerState, setSellerState] = useState(false)
  //true false state of products being added
  const [addedPState, setAddedPState] = useState(false)

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
          .then(data => {
            setSignedInBuyer(data)
            setAllBuyers([...allBuyers,data])
          })

          document.querySelector('#sign_up_buyer_form').reset()
          history.push('/products')
        }
      }
    }


  //handle signupseller event
  function handleSignUpSeller(e) {
    e.preventDefault() //don't reset the form on submit
    
    //conditionals on if you do/do not submit a proper username/password
    if (e.target.password.value === "" && e.target.username.value === "") {
      setSignInMsg("Please Fill Out Your Username and Password!");
    } else if (e.target.password.value === "") {
      setSignInMsg("Please Fill Out Your Password");
    } else if (e.target.username.value === "") {
      setSignInMsg("Please Fill Out Your Username");
    } else {

      //filter out the sellers that have the same username
      let filteredSeller = allSellers.filter((seller) => {
      
        if (seller.username === e.target.username.value) {
          return true;
        } else {
          return false;
        }
      });
    
      //if a username has been found, return the error message
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
        .then(data => {
          setSignedInSeller(data)
          setAllSellers([...allSellers,data])
        })


        setSellerState(true)

        //refresh the form
        document.querySelector('#sign_up_seller_form').reset()
        //rerout to add listing once you sign up as a seller
        history.push('/addlisting')
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
          history.push('/products')
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
          //set state of if signed in
          setSellerState(true)
          //local storage of username
          localStorage.setItem("username", e.target.username.value);
          history.push('/mylistings')
        }
      }
      document.querySelector('#sign_in_seller_form').reset()
  }

  //handle logout event
  function handleLogout() {
  
    if(sellerState===false && signedInBuyer.length == true){
      setSignedInBuyer([])
      
      localStorage.setItem("username",'')
    }else if(sellerState === true && signedInBuyer.length ==false){
      setSignedInSeller([])
      setSellerState(false)
      localStorage.setItem("username",'')
    }
    history.push('/')
  }

  function handleUpdateItem(item) {
    console.log(item)
  }


  //handle deleting an item
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
      setUpdatedClicked(false)
  }

    const productsToDisplay = allProducts.filter((product) => 
      product.name.toLowerCase().includes(searched.toLowerCase()) || product.description.toLowerCase().includes(searched.toLowerCase()) ? true : false)

  //adding a new listing as a seller
  function handleAddListing(e){
    e.preventDefault();


    //we did this because when you just sign in. SignedInSeller uses a .filter to be updated hence an array is put out
    //when you sign up, just the object of the seller created is used to update SignedInSeller
    let sellerID 
    if(signedInSeller.length > 0){
      sellerID = signedInSeller[0].id
    }else{
      sellerID = signedInSeller.id
    }

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
            seller_id: sellerID
        })
      }

    fetch('http://localhost:9292/products',configObj)
        .then(res => res.json())
        .then(data => setAllProducts([...allProducts,data]))
    
    document.querySelector('#add_listing_form').reset()

    //reroute to mylistings
    history.push('/mylistings')
    }

    //handle updating a product as a seller. Being sent to ProductListing.js
    function handleUpdateSubmit(e,id){
      e.preventDefault()

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
      
        <NavBar handleSearch={handleSearch} handleLogout={handleLogout} 
        signedInBuyer={signedInBuyer} 
        signedInSeller={signedInSeller}
        sellerState={sellerState}
        />
        <ScrollToTop />
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
            <MyListings products={productsToDisplay} signedInSeller={signedInSeller} handleProductClick={handleProductClick} addedPState={addedPState} />
          </Route>
          <Route exact path = "/addlisting">
            <AddListing signedInSeller={signedInSeller} handleAddListing={handleAddListing}  />
          </Route>
          <Route path='/products/:id'>
            <ProductListing allProducts={allProducts} allSellers={allSellers} signedInSeller={signedInSeller} handleDeleteItem={handleDeleteItem} handleUpdateItem={handleUpdateItem} handleUpdateSubmit={handleUpdateSubmit}
            updatedClicked={updatedClicked}
            sellerState={sellerState}
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
