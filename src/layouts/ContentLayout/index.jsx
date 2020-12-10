import React from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from '../../components';

export const ContentLayout = (props) => (
    <React.Fragment>
        <NavMenu/>
        <Container>
            {props.children}
        </Container>
    </React.Fragment>
);

export default ContentLayout;