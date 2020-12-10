import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styles from './cardbutton.module.css';

const CartButtonItem = ({title, price}) => {
    return (
        <div className="d-flex flex-column px-3">
            <div className="d-flex justify-content-between">
                <div className="w-70"><p>{title}</p></div>
                <div className={styles.right}><p>{`$ ${price}`}</p></div>
            </div>
        </div>
    )
}

export const CartButton = (props) => {
    // state
    const [isOpen, setIsOpen] = useState(false);

    const { cart, total } = props;

    // toggle CartButton
    const toggle = () => {
        cart.length !== 0 && setIsOpen(prevOpen => !prevOpen);
    };

    return (
        <Dropdown isOpen={isOpen} toggle={toggle}>
            <DropdownToggle color="primary" caret>
                <i className="fas fa-cart-arrow-down mr-2"></i>
                <span className="badge badge-success">{cart.length}</span>
            </DropdownToggle>
            <DropdownMenu className={styles.cartmenu} right>
                {cart.map((item, index) => {
                    return (
                        <CartButtonItem key={index}
                            title={item.title}
                            price={item.price}/>
                    )
                })}
                <DropdownItem divider />
                <DropdownItem disabled>{`Precio Total: $ ${total}`}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

const mapStateToProps = (state) => {
    return state.cart
}

export default connect(
    mapStateToProps,
    null
)(React.memo(CartButton));
