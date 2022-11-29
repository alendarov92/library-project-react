import React, { useEffect, useState, useContext } from 'react'
import { BookContext } from '../../context/bookContext'
import * as bookServices from '../../services/bookSevices'


function Create() {

    const { createBook } = useContext(BookContext)
    const createHeandler = (e) => {

        e.preventDefault()
        const bookData = Object.fromEntries(new FormData(e.target));

        bookServices.create(bookData)
            .then(result => {
                createBook(result)
            })
    }


    return (

        <section id="create-page" className="create">
            <form id="create-form" action="" method="" onSubmit={createHeandler}>
                <fieldset>
                    <legend>Add new Book</legend>
                    <p className="field">
                        <label htmlFor="title">Title</label>
                        <span className="input">
                            <input type="text" name="title" id="title" placeholder="Title" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea
                                name="description"
                                id="description"
                                placeholder="Description"
                                defaultValue={""}
                            />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="Fiction">Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input
                        className="button submit"
                        type="submit"
                        defaultValue="Add Book"
                    />
                </fieldset>
            </form>
        </section>
    )
}

export default Create