import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball X'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter']);
    // };

    return (
        <>
            <h1>Hello world</h1>
            <AddCategory setCategories={setCategories} />
            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}


            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;