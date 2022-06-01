import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductListing({ signedInSeller, handleUpdateItem, handleDeleteItem}) {
    const { id } = useParams()
    const [productListing, setProductListing] = useState([])

    function getProductListingFetch() {
        fetch(`http://localhost:9292/products/${id}`)
        .then(res => res.json())
        .then(data => setProductListing(data))
    }

    useEffect(() => {
        getProductListingFetch();
    }, [])
    
    if (productListing.length < 1) {
        return (
        <div className='"App'>Loading...</div>
        )
    }
    else {
    return (
        <>
        <div className='product-listing'>
            <img className="listing-image" src={productListing[0].image}></img>
        </div>
        <div className='product-listing-info'>
            <h2>{productListing[0].name}</h2>
            <p>Price: ${productListing[0].price}</p>
            <p>Quantity: {productListing[0].quantity}</p>
            <p>Sold by: {productListing[1].name}</p>
        </div>
        {
            signedInSeller.length > 0 == true ? 
                (signedInSeller[0].id == productListing[0].seller_id ?
                    <>
                        <button onClick={() => handleDeleteItem(productListing[0].id)}>Delete</button>
                        <button onClick={() => handleUpdateItem(productListing[0].id)}>Update</button>
                    </> 
                :null) :null
        }
        </>
    )}
}

export default ProductListing;