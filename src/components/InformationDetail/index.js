import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/Cart'

export const InfotmationDetail = (props) => {
    const { id, title, price, description, category } = props;

    return (
        <Col md="7">
            <Row>
                <Col md="12">
                    <h3 className="mb-4 mt-5">{title}</h3>
                    <h4 className="mb-4"><span className="mr-1"><strong>{`$ ${price}`}</strong></span></h4>
                    <p>{description}</p>
                    <table className="table table-sm table-borderless mb-5">
                        <tbody>
                            <tr>
                                <th className="pl-0 w-25" scope="row"><strong>Categoría</strong></th>
                                <td>{category}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Button color="primary" onClick={() => props.addProductToCart(id)}>
                        <i className="fas fa-shopping-cart pr-2"></i>Agregar al carrito</Button>
                </Col>
            </Row>
        </Col>
    )
}

export default connect(null, actionCreators)(React.memo(InfotmationDetail));