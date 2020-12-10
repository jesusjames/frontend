import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText,
    Button} from 'reactstrap';
import './productitem.css';

export const ProductItem = (props) => {
    const {
        image,
        title,
        price,
        ...rest
    } = props; 

    return (
        <Card {...rest}>
            <CardImg top src={image} alt="Card image cap" style={{height: 220}} />
            <CardBody>
                <CardTitle tag="h5" style={{height: 75, overflow: 'hidden'}}>{title}</CardTitle>
                <div className="d-flex justify-content-between">
                    <CardSubtitle tag="h6" className="mt-0 pt-2 text-muted">{`$ ${price}`}</CardSubtitle>
                    <Button>Agregar</Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default React.memo(ProductItem);