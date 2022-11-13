import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { CardContext } from '../../context/cardContext'

function Details() {
    const [cards, setCards] = useContext(CardContext)
    const [details, setDetails] = useState()


    useEffect(() => {
        fetch(`http://localhost:3030//data/books/:${cards._id}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
            setDetails(result)
        })
    },[])

    
    return (
        <div>
            <section id="details-page" className="details">
                <div className="book-information">
                    <h3>{details.title }</h3>
                    <p className="type">Type: { details.type}</p>
                    <p className="img">
                        <img src={details.imageUrl} />
                    </p>
                    <div className="actions">
                        {/* Edit/Delete buttons ( Only for creator of this book )  */}
                        <a className="button" href="#">
                            Edit
                        </a>
                        <a className="button" href="#">
                            Delete
                        </a>
                        {/* Bonus */}
                        {/* Like button ( Only for logged-in users, which is not creators of the current book ) */}
                        <a className="button" href="#">
                            Like
                        </a>
                        {/* ( for Guests and Users )  */}
                        <div className="likes">
                            <img className="hearts" src="/images/heart.png" />
                            <span id="total-likes">Likes: 0</span>
                        </div>
                        {/* Bonus */}
                    </div>
                </div>
                <div className="book-description">
                    <h3>Description:</h3>
                    <p>
                       {details.description}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Details