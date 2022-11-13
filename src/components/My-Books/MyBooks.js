import React from 'react'

function MyBooks() {
    return (
        <div>
            <section id="my-books-page" className="my-books">
                <h1>My Books</h1>
                {/* Display ul: with list-items for every user's books (if any) */}
                <ul className="my-books-list">
                    <li className="otherBooks">
                        <h3>Outlander</h3>
                        <p>Type: Other</p>
                        <p className="img">
                            <img src="/images/book2.png" />
                        </p>
                        <a className="button" href="#">
                            Details
                        </a>
                    </li>
                    <li className="otherBooks">
                        <h3>A Court of Thorns and Roses</h3>
                        <p>Type: Fiction</p>
                        <p className="img">
                            <img src="/images/book1.png" />
                        </p>
                        <a className="button" href="#">
                            Details
                        </a>
                    </li>
                </ul>
                {/* Display paragraph: If the user doesn't have his own books  */}
                <p className="no-books">No books in database!</p>
            </section>
        </div>
    )
}

export default MyBooks