import React, { useState } from "react";
import AddCategory from "./componentes/addCategory";
import GifGrid from "./componentes/gifGrid";

export const  GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragfon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    const handleAdd = () => {
        // 'Se debe agregar Patlabor a la lista'
        // categories.push('Patlabor');
        // setCategories([...categories, "Patlabor"]);
        // setCategories(catego => [...catego, "Inuyasha"]);
    }

    console.log(categories);

    return (
        <>
            <h2>Gift Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />  
                    ))
                }
            </ol>
            
        </>
    )
}

export default GifExpertApp;