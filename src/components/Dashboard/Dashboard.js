import React, { useContext } from 'react'
import { BookContext } from '../../context/bookContext';
import AllBooks from './AllBooks/AllBooks';

function Dashboard() {
    const { books } = useContext(BookContext);

    return (
        <div>
            <section id="dashboard-page" className="dashboard">
                <h1>Dashboard</h1>

                <ul className="other-books-list">
                    {books.length > 0
                        ? books.map(x => <AllBooks key={x._id} book={x} />)
                        : <p className="no-books">No books in database!</p>
                    }
                </ul>
            </section>
        </div>
    )
};

export default Dashboard;