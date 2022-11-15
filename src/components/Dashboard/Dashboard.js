import React from 'react'
import AllBooks from './AllBooks/AllBooks';

function Dashboard({ books }) {


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