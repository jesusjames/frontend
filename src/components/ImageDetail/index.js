import React from 'react';
import { Col, Row } from 'reactstrap';

export const ImageDetail = (props) => {
    const {image} = props;
    return(
        <Col md="5">
            <Row>
                <Col md="12">
                    <img src={image}
                    className="img-fluid"
                    style={{transformOrigin: 'center center', transform: 'scale(1)'}}/>
                </Col>
            </Row>
        </Col>
    )
}

export default React.memo(ImageDetail);
