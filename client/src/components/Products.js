import React from 'react';
import ProductPage from './ProductPage';
import { Link } from 'react-router-dom';

function Products({ products, signedInBuyer, signedInSeller, handleProductClick }) {

    // let filteredProducts = []
    // if (signedInSeller.length == true){
    //     filteredProducts = products.filter(product => product.seller_id === signedInSeller[0].id)
    // }else if (signedInBuyer.length == true){
    //     debugger
    //     filteredProducts = products.filter(product => product.buyer_id === signedInBuyer[0].id)
    // }
    return (
        <div className='grid'>
            <div className='product-grid'>
            {products.map((product) => {
                return (
                <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                    <ProductPage key={product.id} product={product} handleProductClick={handleProductClick} />
                </Link>
            )})}
            </div>
        </div>
    )
}

export default Products;