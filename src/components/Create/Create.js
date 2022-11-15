import React, { useEffect, useState, useContext } from 'react'

function Create({ createBook }) {

    // const [newBook, steNewBook] = useState([])
    // const [cards, setCards] = useContext(CardContext)


    const createHeandler = (e) => {
        e.preventDefault()
        const bookData = Object.fromEntries(new FormData(e.target));

        console.log(bookData);

        createBook(bookData)
    }
    // useEffect(() => {
    //     fetch('http://localhost:3030/data/books', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: {
    //             title,
    //             description,
    //             imageUrl,
    //             type
    //         }
    //     })
    //         .then((response) => response.json())
    //         .then(result => {
    //             console.log(result);
    //         })
    // }, [])


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