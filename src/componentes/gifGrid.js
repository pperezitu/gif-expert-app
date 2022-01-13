import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifgridItem } from './gifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {loading ? <p className='animate__animated animate__flash'>Cargando ...</p>: null}

            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifgridItem
                            key={img.id} 
                            {...img}
                        />
                    ))
                }
            </div>        
        </>

    )
}

export default GifGrid;