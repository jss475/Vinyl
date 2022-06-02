import React from 'react';
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardGroup, ListGroup } from 'react-bootstrap';

function ProductPage({ product, handleProductClick }) {

    const { id } = useParams()
    return (
        <CardGroup>
            <Card onClick={() => handleProductClick(product)} className="product_page_card" border="dark">
                <Card.Img variant="top" src={product.image} className="product_page_image"/>
                <Card.Header className="product_page_title">{product.name} {id}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item className="product_page_quantity">Quantity: {product.quantity}</ListGroup.Item>
                    <ListGroup.Item className="product_page_price">Price: ${product.price}</ListGroup.Item>
                </ListGroup>
                {/* <Card.Body>
                    <Card.Title className="product_page_title">{product.name} {id}</Card.Title>
                    <Card.Text className="product_page_quantity">Quantity: {product.quantity}</Card.Text>
                    <Card.Text className="product_page_price">${product.price}</Card.Text>
                </Card.Body> */}

            </Card>
        </CardGroup>
        // <div className='full-card' onClick={() => handleProductClick(product)}>
        // <div>
        //     <img className='card-image' src={product.image}></img>
        // </div>
        //     <div className='product-page'>
        //         <p>{product.name} {id}</p>
        //         <div className="col-md-auto">
        //             <h6 className="mb-3">${product.price}</h6>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ProductPage;