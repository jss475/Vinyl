import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage({ product, handleProductClick }) {

    const { id } = useParams()
    return (
        <div className='full-card' onClick={() => handleProductClick(product)}>
        <div>
            <img className='card-image' src={product.image}></img>
        </div>
            <div className='product-page'>
                <p>{product.name} {id}</p>
                <div className="col-md-auto">
                    <h6 className="mb-3">${product.price}</h6>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;