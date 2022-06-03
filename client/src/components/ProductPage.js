import React from 'react';
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardGroup, ListGroup } from 'react-bootstrap';

function ProductPage({ product, handleProductClick }) {
    
    document.querySelector("#myVideo").style.display = "none";
    const { id } = useParams()

    const limitText = product.description.substring(0, 150) + '...';

    return (
        <>
        <CardGroup>
            <Card onClick={() => handleProductClick(product)} className="product_page_card" style={{ marginTop: '45px'}} border="dark">
                <Card.Img variant="top" src={product.image} className="product_page_image"/>
                <Card.Header className="product_page_title" >{product.name} {id}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item className="product_page_quantity" style={{fontWeight: 'bold'}}>{product.artist}</ListGroup.Item>
                    <ListGroup.Item className="product_page_price">Price: ${product.price}</ListGroup.Item>
                </ListGroup>
                {/* <Card.Body>
                    <Card.Title className="product_page_title">{product.name} {id}</Card.Title>
                    <Card.Text className="product_page_quantity">Quantity: {product.quantity}</Card.Text>
                    <Card.Text className="product_page_price">${product.price}</Card.Text>
                </Card.Body> */}

            </Card>            
        </CardGroup>
         <p className='limit-text'>"{limitText}"</p>
         </>

    )
}

export default ProductPage;