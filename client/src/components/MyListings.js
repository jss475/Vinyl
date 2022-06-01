import React from 'react'
import ProductPage from './ProductPage'

function MyListings({ products, signedInSeller }) {

    let filteredProducts = []
    debugger
    if (signedInSeller.length == true){
        filteredProducts = products.filter(product => product.seller_id === signedInSeller[0].id)
    }

    return (
        <div className='grid'>
            <div className='product-grid'>
            {filteredProducts.map((product) => {
                return <ProductPage key={product.id} product={product} />
            })}
            </div>
        </div>
    )
    
}

export default MyListings