import { useContext, useEffect, useState } from "react";
import { unChistecitoContext } from "../../context";


const Category = () => {

    const context = useContext(unChistecitoContext);

    const handleCheckbox = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            context.setCategoryFiltered([...context.categoryFiltered, value]); // Agregar valor al array

        } else {
            context.setCategoryFiltered(context.categoryFiltered.filter((item) => item !== value)); // Eliminar valor del array
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let chistesLista;
        chistesLista = context.chistes;


        context.setChistesFiltered(Object.values(chistesLista).filter((chiste) => {
            return chiste?.categoria && !context.categoryFiltered.includes(chiste?.categoria);
        }));
    }

    // aaa

    const [randomIndex, setRandomIndex] = useState(null);

    useEffect(() => {
        let isMounted = true; // Bandera para evitar actualizaciones en un componente desmontado

        if (context.chistesFiltered.length > 0) {
            const newIndex = randomChiste(context.chistesFiltered.length);

            if (isMounted) {
                setRandomIndex(newIndex);
                const chisteFinal = context.chistesFiltered[newIndex];
                context.setChisteFinal(chisteFinal);
            }
        }
        return () => {
            isMounted = false; // Actualiza la bandera cuando el componente se desmonte
        };
    }, [context.chistesFiltered]);

    // aaa

    const randomChiste = (max) => {
        return (Math.floor(Math.random() * max));
    }


    return (
        <div className='m-6 w-3/5 flex flex-col items-center lg:items-baseline'>
            <h2 className='text-lg tracking-wider font-Bebas lg:text-3xl'>QUITAR CATEGORIAS:</h2>

            <form className='font-Montserrat text-sm flex flex-col items-center lg:text-base lg:items-start lg:w-full' action="#" id="form" onSubmit={handleSubmit}>
                <div className='w-32 pt-2 flex flex-col lg:w-full'>
                    <div className="w-32">
                        {/* Agregar inputs en base a la cantidad de categorias existente */}
                        {
                            context.category?.map(item => (
                                <div className='flex justify-between align-middle' key={item}>
                                    <label htmlFor={`cb${item}`}>{item}</label>
                                    <input className='mb-4 mt-1 accent-[#FE4583] cursor-pointer' type="checkbox" id={`cb${item}`} value={item} onChange={handleCheckbox}

                                    />

                                </div>
                            ))
                        }
                    </div>
                    <div className="w-32 h-8 flex justify-center mt-4 mb-8 lg:m-auto lg:w-48 lg:h-10 lg:mb-4">
                        <input className="w-32 h-8 bg-tertiary rounded-lg cursor-pointer shadow-md shadow-pink-400/50 font-Bebas tracking-wider transform active:scale-x-75 transition-transform lg:text-xl lg:w-48 lg:h-10" type="submit" value="Chistecito" id="chiste-random" />
                    </div>
                </div>
            </form>
            <hr className="w-full h-0.5 mb-4 shadow-lg border-none bg-tertiary" />
        </div>
    )
}

export default Category;