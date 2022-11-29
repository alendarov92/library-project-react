import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BookContext } from '../../context/bookContext';
import * as bookServices from '../../services/bookSevices'


function Details() {

    const [currentBook, setCurrentBook] = useState({})
    const { books } = useContext(BookContext)

    const { bookId } = useParams();

    const book = books.find(x => x._id === bookId)

    const navigate = useNavigate()

    useEffect(() => {
        bookServices.getOne(bookId)
            .then(result => {
            setCurrentBook(result)
        })
    },[])

    const deleteHeandler = () => {
        bookServices.remove(bookId)
        navigate('/myBooks')
        
    }

    return (
        <div>
            <section id="details-page" className="details">
                <div className="book-information">
                    <h3>{currentBook.title}</h3>
                    <p className="type">Type: {currentBook.type}</p>
                    <p className="img">
                        <img src={currentBook.imageUrl} />
                    </p>
                    <div className="actions">
                        {/* Edit/Delete buttons ( Only for creator of this book )  */}
                        <Link className="button" to={`/myBooks/${currentBook._id}/edit`}>
                            Edit
                        </Link>
                        <Link className="button" onClick={deleteHeandler}>
                            Delete
                        </Link>
                        {/* Bonus */}
                        {/* Like button ( Only for logged-in users, which is not creators of the current book ) */}
                        <Link className="button" to={'#'}>
                            Like
                        </Link>
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
                        {currentBook.description}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Details