import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductListing({ allProducts, signedInSeller, signedInBuyer, handleDeleteItem, handleUpdateSubmit, handleUpdateItem, handleBuyItem, updatedClicked, sellerState, buyerState }) {
    const { id } = useParams()
    const [productListing, setProductListing] = useState([])

    function getProductListingFetch() {
        fetch(`http://localhost:9292/products/${id}`)
        .then(res => res.json())
        .then(data => setProductListing(data))
    }

    useEffect(() => {
        getProductListingFetch();
    }, [allProducts])
    
    if (productListing.length < 1) {
        return (
        <div className='"App'>Loading...</div>
        )
    }
    else {
    return (

<>
    <div class="container py-4 my-4 mx-auto d-flex flex-column">
    <div class="header">
        <div class="row r1">
            <div class="col-md-9 abc">
                <h1>{productListing[0].name}</h1>
            </div>
            <div class="col-md-3 text-right pqr"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
            <p class="text-right para"></p>
        </div>
    </div>
    <div class="container-body mt-4">
        <div class="row r3">
            <h5>Price: {productListing[0].price}</h5>
            {
            productListing[0].quantity > 0 ?
                 <h6>Quantity: {productListing[0].quantity}</h6>
             : productListing[0].quantity <= 0 ?
                 <h6>Out of Stock</h6> : null
            }
            <div class="col-md-5 p-0 klo">
                <ul>
                    <li>Free Shipping</li>
                    <li>Easy Returns</li>
                    <li>Normal Delivery : 4-5 Days</li>
                    <li>Express Delivery : 2-3 Days</li>
                </ul>
                <p>Product Description: {productListing[0].description}</p>
            </div>
            <div class="col-md-7"> <img src={productListing[0].image} width="90%" height="95%"></img> </div>
        </div>
    </div>
    <div class="footer d-flex flex-column mt-5">
        <div class="row r4">
        <h6>Sold by: {productListing[1].name}</h6>
            {
            signedInSeller.length > 0 == true ? 
                (signedInSeller[0].id == productListing[0].seller_id ?
                    <>
                        <button type="button" class="btn btn-outline-warning" style={{ width: '100px' }} onClick={() => handleDeleteItem(productListing[0].id)}>Delete</button>
                        <button type="button" class="btn btn-outline-warning" style={{ width: '100px' }} onClick={() => handleUpdateItem()}>Update</button>
                    </> 
                :null) :null
        }
        {
            sellerState == true ? 
                (signedInSeller.id == productListing[0].seller_id ?
                    <>
                        <button type="button" class="btn btn-outline-warning" style={{ width: '100px' }} onClick={() => handleDeleteItem(productListing[0].id)}>Delete</button>
                        <button type="button" class="btn btn-outline-warning" style={{ width: '100px' }} onClick={() => handleUpdateItem()}>Update</button>
                    </> 
                :null) :null
        }
        {updatedClicked == true ? 
            <div id="update_form_loc">
                <form id="update_form" onSubmit={(e)=>handleUpdateSubmit(e,productListing[0].id)}>
                    <p>Quantity</p>
                    <input
                        name="quantity"
                        type="quantity"
                        placeholder="Enter new quantity"
                    />
                    <p>Price</p>
                    <input
                        name="price"
                        type="price"
                        placeholder="Enter new price"
                    />
                    <button type="submit">Submit</button>
                </form>
                
            </div> : null}
            {
            buyerState == true && signedInBuyer.id != productListing[0].buyer_id && productListing[0].quantity > 0? 
                    <>
                        <button type="button" class="btn btn-outline-warning" style={{ width: '100px' }} onClick={() => handleBuyItem(productListing[0].id)}>Purchase</button>
                    </> 
             : buyerState == true && signedInBuyer.id == productListing[0].buyer_id && productListing[0].quantity > 0 ?
                <>
                    <button type="button" class="btn btn-outline-warning" style={{ width: '100px' }} onClick={() => handleBuyItem(productListing[0].id)}>Buy again?</button>
                </>
                : productListing[0].quantity <= 0 ?
                <>
                </>
                : null
        }
        </div>
    </div>
</div>
</>


        
        
        // <>
        // <div className='product-container'>
        //     <img className="listing-image" src={productListing[0].image}></img>
        // <div className='product-listing-info'>
        //     <h2>{productListing[0].name}</h2>
        //     <p>Price: ${productListing[0].price}</p>
        // {
        //     productListing[0].quantity > 0 ?
        //         <p>Quantity: {productListing[0].quantity}</p>
        //     : productListing[0].quantity <= 0 ?
        //         <p>Out of Stock</p> : null
        // }
        //     <p>Sold by: {productListing[1].name}</p>
        //     </div>
        //             </div>
        //             <div className='description'>
        //                 <p>{productListing[0].description}</p>
        //             </div>

        // {
        //     signedInSeller.length > 0 == true ? 
        //         (signedInSeller[0].id == productListing[0].seller_id ?
        //             <>
        //                 <button onClick={() => handleDeleteItem(productListing[0].id)}>Delete</button>
        //                 <button onClick={() => handleUpdateItem()}>Update</button>
        //             </> 
        //         :null) :null
        // }
        //  {
        //     sellerState == true ? 
        //         (signedInSeller.id == productListing[0].seller_id ?
        //             <>
        //                 <button onClick={() => handleDeleteItem(productListing[0].id)}>Delete</button>
        //                 <button onClick={() => handleUpdateItem()}>Update</button>
        //             </> 
        //         :null) :null
        // }
        // {updatedClicked == true ? 
        //     <div id="update_form_loc">
        //         <form id="update_form" onSubmit={(e)=>handleUpdateSubmit(e,productListing[0].id)}>
        //             <p>Quantity</p>
        //             <input
        //                 name="quantity"
        //                 type="quantity"
        //                 placeholder="Enter new quantity"
        //             />
        //             <p>Price</p>
        //             <input
        //                 name="price"
        //                 type="price"
        //                 placeholder="Enter new price"
        //             />
        //             <button type="submit">Submit</button>
        //         </form>
                
        //     </div> : null}
        //     {
        //     buyerState == true && signedInBuyer.id != productListing[0].buyer_id && productListing[0].quantity > 0? 
        //             <>
        //                 <button onClick={() => handleBuyItem(productListing[0].id)}>Purchase</button>
        //             </> 
        //      : buyerState == true && signedInBuyer.id == productListing[0].buyer_id && productListing[0].quantity > 0 ?
        //         <>
        //             <button onClick={() => handleBuyItem(productListing[0].id)}>Buy again?</button>
        //         </>
        //         : productListing[0].quantity <= 0 ?
        //         <>
        //         </>
        //         : null
        // }
        // </>
    )}
}

export default ProductListing;