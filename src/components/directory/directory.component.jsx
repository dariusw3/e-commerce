import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

class Directory extends React.Component{
     constructor(){
         super();

         this.state = {
             sections: [ 
                
              {
                title: 'SHOP WOMEN',
                imageUrl: 'https://fitnesstraining.gr/wp-content/uploads/2014/04/FT-trainers.jpg',
                // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
              },
              {
                title: 'SHOP MEN',
                imageUrl: 'https://cdn.shopify.com/s/files/1/1367/5207/files/07_01_Shop_mens_12d7977a-bc8b-42f7-901e-12d9045de9c9_1900x.jpg?v=1610537787',
                // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              },
               {
                title: 'HATS',
                imageUrl: 'https://images.unsplash.com/photo-1516369033203-ba1a9f0e3b5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'JACKETS',
                imageUrl: 'https://images.unsplash.com/photo-1602107575489-f2c55a615687?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'SNEAKERS',
                imageUrl: 'https://images.unsplash.com/photo-1589187928505-f6af6c26d1ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
            ]
         }
     }

    render(){
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                    ))}
            </div>
        );
    }

}

export default Directory;