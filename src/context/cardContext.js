import React, { createContext, useEffect, useState  } from 'react'
import * as bookServices from '../services/bookSevices'
export const CardContext = createContext();

export const CardProvider = props => {
    const [cards, setCards] = useState({});

    useEffect(() => {
        bookServices.getAll()
            .then(result => {
                setCards(result)
            })
    }, [])
    return (
        <CardContext.Provider value={[cards, setCards]}>
            {props.children}
        </CardContext.Provider>
    )
}