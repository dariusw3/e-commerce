import React, { Component } from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import CartDropdown from '../../components/cart/cart-dropdown.component.jsx';
import './shop.styles.scss'

import {createStructuredSelector} from 'reselect'

import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'

import {connect} from 'react-redux';

export class ShopPage extends Component {
    constructor(props){
        super(props)

        this.state ={
            collections: SHOP_DATA
        }
    }
    
    render(){
        console.log(this.props.hidden)
        const {collections} = this.state;
        return (
        <div className={`${this.props.hidden ? '' : 'shop-container'}`}> 
            <div className='shop-page'>
                {
                    collections.map( (collection) => {
                        return (
                            <CollectionPreview key= {collection.id} title = {collection.title} items={collection.items} />
                        )
                    })
                }
              
            </div>
            <div className = "sidebar">
                { this.props.hidden ? null :
            <CartDropdown/> 
                }
                </div>
        </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default  connect(mapStateToProps)(ShopPage)
