import React from 'react';
import { useParams } from 'react-router-dom';

function ProductListing() {
    const { id } = useParams()

    return (
        <div>
            listing {id}
        </div>
    )
}

export default ProductListing;