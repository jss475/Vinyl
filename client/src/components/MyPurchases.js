import React, {useState} from 'react'
import ProductPage from './ProductPage'
import { Link } from 'react-router-dom';

function MyPurchases({ products, signedInBuyer, handleProductClick }) {
    let filteredProducts = []
    if (signedInBuyer.length == true){
        filteredProducts = products.filter(product => product.buyer_id === signedInBuyer[0].id)
    //if you sign up do this
    }else if(signedInBuyer.username.length > 0){
        filteredProducts = products.filter(product => product.buyer_id === signedInBuyer.id)
    }
   
    return (
        <div className='grid'>
            <div className='product-grid'>
            {filteredProducts.map((product) => {
                return (
                <Link  style={{ textDecoration: 'none' }} to={`/products/${product.id}`}>
                    <ProductPage key={product.id} product={product} handleProductClick={handleProductClick} />
                </Link>
                )  
            })}
            </div>
        </div>
    )
    
}

export default MyPurchases;