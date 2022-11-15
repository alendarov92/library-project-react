import React from 'react'

import BookItem from './BookItem/BookItem';

function MyBooks({books}) {
    return (
        <div>
            <section id="my-books-page" className="my-books">
                <h1>My Books</h1>
                {/* Display ul: with list-items for every user's books (if any) */}

                <ul className="my-books-list">
                    {books.length > 0
                        ? books.map(x => <BookItem key={x._id} book={ x} />)
                        : <p className="no-books">No books in database!</p>
                    }
                </ul>
               
            </section>
        </div>
    )
}

export default MyBooks