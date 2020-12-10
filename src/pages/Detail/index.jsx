import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/Detail';
import { Row, Col } from 'reactstrap';
import { DetailSeption, ImageDetail, InformationDetail } from '../../components';

export const DetailPage = (props) => {
    console.log(props);
    const {detail,error, children} = props;
    
    useEffect(() => {
        const {idProduct} = props.match.params;
        props.getDetailProducts(idProduct);
    }, [])

    return (
        <div>
            <Row>
                <Col ms="12">
                    <h1>Detalle producto</h1>
                </Col>
            </Row>
            <DetailSeption>
                <ImageDetail image={detail.image}/>
                <InformationDetail id={detail.id}
                    title={detail.title}
                    price={detail.price}
                    description={detail.description}
                    category={detail.category}
                />
            </DetailSeption>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state.detail
}

export default connect(
    mapStateToProps,
    actionCreators
)(React.memo(DetailPage));