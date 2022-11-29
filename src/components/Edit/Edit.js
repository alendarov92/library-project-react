import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BookContext } from '../../context/bookContext'
import * as bookServices from '../../services/bookSevices'



function Edit() {
    const [currentBook, setCurrentBook] = useState({})
    const {bookEdit } = useContext(BookContext);
    const { bookId } = useParams();

    const navigate = useNavigate()

    useEffect(() => {
        bookServices.getOne(bookId)
            .then(bookData => {
                setCurrentBook(bookData)
            })
    }, []);

    const onSubmit = (e) => {
        e.preventDefault()

        const bookData = Object.fromEntries(new FormData(e.target));

        bookServices.edit(bookId, bookData)
            .then(result => {
                bookEdit(bookId, result)
                navigate(`/myBooks/${result._id}`)
            })
    };
    return (

        <section id="edit-page" className="edit">
            <form id="edit-form" onSubmit={onSubmit}>
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p className="field">
                        <label htmlFor="title">Title</label>
                        <span className="input">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                defaultValue={currentBook.title}
                            />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea
                                name="description"
                                id="description"
                                defaultValue={currentBook.description}
                            />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input
                                type="text"
                                name="imageUrl"
                                id="image"
                                defaultValue={currentBook.imageUrl}
                            />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" defaultValue={currentBook.type}>
                                <option value="Fiction" selected="">
                                    Fiction
                                </option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" defaultValue="Save" />
                </fieldset>
            </form>
        </section>

    )
}

export default Edit