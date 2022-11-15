import React from 'react'

function Details({ books }) {
    
    const book = Object.values(books)

    return (
        <div>
            <section id="details-page" className="details">
                <div className="book-information">
                    <h3>{book.title }</h3>
                    <p className="type">Type: { book.type}</p>
                    <p className="img">
                        <img src={book.imageUrl} />
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
                       {book.description}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Details