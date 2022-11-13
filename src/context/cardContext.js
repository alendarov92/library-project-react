import React, { createContext, useEffect, useState  } from 'react'

export const CardContext = createContext();

export const CardProvider = props => {
    const [cards, setCards] = useState({});

    useEffect(() => {
        fetch('http://localhost:3030/data/books')
            .then(res => res.json())
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