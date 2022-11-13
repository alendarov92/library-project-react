import React, { useContext, } from 'react'
import { Link } from 'react-router-dom';
import { CardContext } from '../../context/cardContext';

function Dashboard() {
    const [cards, setCards] = useContext(CardContext);
    
    return (
        <div>
            <section id="dashboard-page" className="dashboard">
                <h1>Dashboard</h1>

                <ul className="other-books-list">
                    {cards.length > 0
                        ? cards.map(x => {
                            return (<li className="otherBooks">
                                <h3>{x.title}</h3>
                                <p>Type: {x.type}</p>
                                <p className="img">
                                    <img src={x.imageUrl} />
                                </p>
                                <Link className="button" to={`/details:${x._id}`}>
                                    Details
                                </Link>
                            </li>)
                        })
                        : <p className="no-books">No books in database!</p>
                    }

                </ul>
            </section>
        </div>
    )
}

export default Dashboard