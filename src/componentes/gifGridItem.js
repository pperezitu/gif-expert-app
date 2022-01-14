import React from 'react';
import PropTypes from 'prop-types';

export const GifgridItem = ({id, title, url}) => {

    // console.log(id, title, url);

    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

/*  
    Enzyme
    Enzyme to jason
    Debe de mostrar el componente correctamente
        * shallow
        * wrapper
        * wrapper .toMatchSnapshot()
*/

GifgridItem.PropTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}