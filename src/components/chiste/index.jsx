import { useContext, useEffect } from "react";
import { unChistecitoContext } from "../../context";

const Chiste = () => {
    const context = useContext(unChistecitoContext);

    return (
        <div className="w-3/5 font-Bebas flex-1">
            <div className="flex  justify-between">
                {/* Lado izquierdo */}
                <div className="flex justify-between ">
                    <p className="tracking-wider lg:text-3xl">
                        Categoria:
                        <br className="lg:hidden" />
                        <span className="text-tertiary lg:ml-1" id="span-category">{context.chisteFinal.categoria}</span>
                    </p>
                </div>

                {/* Lado Derecho */}
                <div className="w-20 h-8 text-sm lg:flex lg:space-x-2 lg:text-lg lg:w-40">
                    <p className="flex mb-1.5">ID: <span className="pl-1 text-tertiary" id="span-id">{context.chisteFinal.id}</span></p>
                    <p className="flex">Autor: <span className="pl-1 text-tertiary" id="span-autor">{context.chisteFinal.autor}</span></p>
                </div>
            </div>
            <div className="h-20">
            <p className="font-Montserrat mt-3 text-sm lg:text-lg">{context.chisteFinal.contenidoChiste}</p>
            </div>
        </div>
    )
}

export default Chiste;