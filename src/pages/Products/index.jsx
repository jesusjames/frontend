import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { ProductItem } from '../../components';
import { actionCreators } from '../../store/Products';

export const ProductsPage = (props) => {
    const { products } = props;

    useEffect(() => {
        props.getAllProducts();
    }, [])

    return (
        <React.Fragment>
            <Row>
                {products.map(product => {
                    const {id, image, title, price} = product
                    return (
                        <Col key={id} md="3" xs="12" sm="6" className="mb-3">
                            <ProductItem id={id} image={image}
                                title={title}
                                price={price}
                            />
                        </Col>
                    )
                })}
            </Row>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return state.products
}

export default connect(
    mapStateToProps,
    actionCreators
)(React.memo(ProductsPage));