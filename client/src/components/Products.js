import React from 'react';
import ProductPage from './ProductPage';

function Products({ products }) {
    console.log(products)
    return (
        <div className='grid'>
            <div className='product-grid'>
            {products.map((product) => {
                return <ProductPage key={product.id} product={product} />
            })}
            </div>
        </div>
    )
}

export default Products;