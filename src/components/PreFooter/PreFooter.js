import './PreFooter.css';
import React, { useState, useEffect } from 'react';

const PreFooter = () => {
    const [categories, setCategories] = useState([]);
    const getCategories = new Promise((resolve, reject) => {
        resolve([
            {id:1, position:true, name: 'Clásicos', description: "Fabricamos los inflables clásicos de mejor calidad de la ciudad. Encontrá en nuestro catálogo modelos estándar como el 3x3 3x4 y 5x3"},
            {id:2, position:false, name: 'Gigantes', description: 'Fabricamos los inflables clásicos de mejor calidad de la ciudad. Encontrá en nuestro catálogo modelos estándar como el 3x3, 3x4 y 5x3'},
            {id:3, position:true, name: 'Acuaticos', description: 'Fabricamos los inflables clásicos de mejor calidad de la ciudad. Encontrá en nuestro catálogo modelos estándar como el 3x3, 3x4 y 5x3'},
            {id:4, position:false, name: 'Juegos de Salon', description: 'Fabricamos los inflables clásicos de mejor calidad de la ciudad. Encontrá en nuestro catálogo modelos estándar como el 3x3, 3x4 y 5x3'}
        ]); 
    });

    useEffect(() => {
        getCategories.then(
            result => {
                setCategories(result);
            }
        )
    }, [] );
    return (
        <div className="preFooter">
            {categories.map(category => {
                return(
                    <>
                        <div className="item" key={category.id}>
                            <div className="itemTitle">
                                {category.name}
                            </div>
                            <div className="itemDescription">
                                {category.description}
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default PreFooter;