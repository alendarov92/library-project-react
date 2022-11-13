import React from 'react'

function Edit() {
    return (
        <div>
            <section id="edit-page" className="edit">
                <form id="edit-form" action="#" method="">
                    <fieldset>
                        <legend>Edit my Book</legend>
                        <p className="field">
                            <label htmlFor="title">Title</label>
                            <span className="input">
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    defaultValue="A Court of Thorns and Roses"
                                />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="description">Description</label>
                            <span className="input">
                                <textarea
                                    name="description"
                                    id="description"
                                    defaultValue={
                                        "Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold, bleak place in the long winter months. So when she spots a deer in the forest being pursued by a wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and killing something so precious comes at a price ..."
                                    }
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
                                    defaultValue="/images/book1.png"
                                />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="type">Type</label>
                            <span className="input">
                                <select id="type" name="type" value="Fiction">
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
        </div>
    )
}

export default Edit