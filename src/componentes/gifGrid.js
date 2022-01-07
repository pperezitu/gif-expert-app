import React from 'react';

export const GifGrid = ({category}) => {

    const getGifs = () => {
        const url = "https://api.giphy.com/v1/gifs/search?api_key=S3NRyo2KOVGVmgbFf9cgabliVaQZ7SUo&q=Rick+and+Morty";
        // const resp = await fetch(url);
        // const data = await resp.json();

        // console.log(data)
    };

    getGifs();

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}

export default GifGrid;