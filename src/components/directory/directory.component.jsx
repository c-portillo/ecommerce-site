import React from 'react'
import MenuItem from '../menu-item/menu-item.component'

import "./directory.styles.scss"

const sectionsList = [
    {
        title: 'clothing',
        imageUrl: 'https://cdn.pixabay.com/photo/2021/11/15/05/25/boutique-6796399_1280.jpg',
        id: 1,
        linkUrl: 'shop/clothing'
    },
    {
        title: 'shoes',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/11/13/14/35/shoes-1042070_1280.jpg',
        id: 2,
        linkUrl: 'shop/shoes'
    },
    {
        title: 'hats & accessories',
        imageUrl: 'https://cdn.pixabay.com/photo/2021/07/05/12/24/clothes-6389053_1280.jpg',
        id: 3,
        linkUrl: 'shop/accessories'
    },
    {
        title: 'womens',
        imageUrl: 'https://cdn.pixabay.com/photo/2020/01/21/13/23/freedom-4782870_1280.jpg',
        size: 'large',
        id: 4,
        size: 'large',
        linkUrl: 'shop/womens'
    },
    {
        title: 'mens',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/04/05/01/12/traveler-2203666_1280.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
    }
]

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: sectionsList
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;