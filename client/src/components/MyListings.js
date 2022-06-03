import React,{useEffect} from 'react'
import ProductPage from './ProductPage'
import { Link } from 'react-router-dom';

function MyListings({ products, signedInSeller, handleProductClick, addedPState }) {
   let filteredProducts = []

    if (signedInSeller.length == true){
        filteredProducts = products.filter(product => product.seller_id === signedInSeller[0].id)
    //if you sign up do this
    }else if(signedInSeller.username.length > 0){
        filteredProducts = products.filter(product => product.seller_id === signedInSeller.id)
    }
   
    return (
        <div className='grid'>
            <div className='product-grid'>
            {filteredProducts.map((product) => {
                return (
                <Link style={{ textDecoration: 'none' }} to={`/products/${product.id}`}>
                    <ProductPage key={product.id} product={product} handleProductClick={handleProductClick}/>
                </Link>
                )  
            })}
            </div>
        </div>
    )
    
}

export default MyListings