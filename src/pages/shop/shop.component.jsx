import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import CartDropdown from '../../components/cart/cart-dropdown.component.jsx';
import './shop.styles.scss'
import {Route} from 'react-router-dom';

import CollectionPage from '../collection/collection.component'


import CollectionsOverview from '../../components/collections-overview/collections-overview.component'


import {createStructuredSelector} from 'reselect'



import {selectCartHidden} from '../../redux/cart/cart.selectors'

import {connect} from 'react-redux';

export const ShopPage  = ({hidden, match}) => {
        return (
        <div className={`${hidden ? '' : 'shop-container'}`}> 
            <div className='shop-page'>
              <Route exact path={`${match.path}`} component = {CollectionsOverview } />
              <Route path={`${match.path}/:collectionId`} component = {CollectionPage} />
            </div>
            <div className = "sidebar">
                { hidden ? null :
            <CartDropdown/> 
                }
                </div>
        </div>
        )
    }


const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
   
})

export default  connect(mapStateToProps)(ShopPage)
