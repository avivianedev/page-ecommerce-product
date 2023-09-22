import { useState } from "react"
import { AppContext } from "./AppContext"
import propTypes from "prop-types";

export const Provider = ({ children }) => {
    const [quant, Setquant] = useState(0)
    const [quantCart, SetquantCart] = useState(0)


    const value = {
        quant,
        Setquant,
        quantCart,
        SetquantCart

    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )


}
Provider.propTypes = {
    children: propTypes.any,
}.isRequired
