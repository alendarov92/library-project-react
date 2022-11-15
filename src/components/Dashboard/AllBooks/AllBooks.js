import React from 'react'
import { Link } from 'react-router-dom';


function AllBooks({book}) {
    return (
        <div>
            <li className="otherBooks">
                <h3>{book.title}</h3>
                <p>Type: {book.type}</p>
                <p className="img">
                    <img src={book.imageUrl} />
                </p>
                <Link className="button" to={`/myBooks/${book._id}`}>
                    Details
                </Link>
            </li>
        </div>
    )
}

export default AllBooks