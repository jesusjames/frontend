import React from 'react';
import { useHistory } from 'react-router';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle,
    Button} from 'reactstrap';
import './productitem.css';
import { connect } from 'react-redux';
import {actionCreators} from '../../store/Cart';

export const ProductItem = (props) => {
    const {
        image,
        title,
        price,
        id,
        addProductToCart,
        ...rest
    } = props; 

    const history = useHistory();

    const redirect = (event) => {
        event.preventDefault();
        history.push(`/detail/${id}`);
    }

    const addProduct = (event) => {
        event.stopPropagation();
        props.addProductToCart(id);
    }

    return (
        <Card {...rest} onClick={redirect} style={{cursor: 'pointer'}}>
            <CardImg top src={image} alt="Card image cap" style={{height: 220}} />
            <CardBody>
                <CardTitle tag="h5" style={{height: 75, overflow: 'hidden'}}>{title}</CardTitle>
                <div className="d-flex justify-content-between">
                    <CardSubtitle tag="h6" className="mt-0 pt-2 text-muted">{`$ ${price}`}</CardSubtitle>
                    <Button onClick={addProduct}>Agregar</Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default connect(null, actionCreators)(React.memo(ProductItem));