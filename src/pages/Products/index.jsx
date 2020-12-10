import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import { ProductItem } from '../../components';
import * as ProductsStore from '../../store/Products';

export const Products = (props) => {
    console.log(props);
    const { products } = props;

    useEffect(() => {
        console.log('useEffect');
        props.getAllProducts();
    }, [])

    return (
        <React.Fragment>
            <Row>
                {products.map(product => {
                    const {id, image, title, price} = product
                    return (
                        <Col key={id} md="3" xs="12" sm="6" className="mb-3">
                            <ProductItem image={image}
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
    console.log('mapStateToProps', state);
    return state.products
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllProducts: () => dispatch(ProductsStore.actionCreators.getAllProducts())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(Products));