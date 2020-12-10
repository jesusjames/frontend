import React from 'react';
import { Row } from 'reactstrap';

export const DetailSeption = (props) => {
    return(
        <div className="mb-5">
            <Row>
                {props.children}
            </Row>
        </div>
    )
}

export default DetailSeption
