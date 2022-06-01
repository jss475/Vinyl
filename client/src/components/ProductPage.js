import React from 'react';

function ProductPage({ product }) {
    
    console.log(product)

    return (
        <div className='full-card'>
        <div>
            <img className='card-image' src={product.image}></img>
        </div>
            <div className='product-page'>
                <p>{product.name}</p>
                <div class="col-md-auto">
                    <h6 class="mb-3">${product.price}</h6>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;