// First we make the API calls in the separet folder callet 'services'

import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/books';

export const getAll = () => request.get(baseUrl)

export const create = (bookData) => request.post(baseUrl, bookData)

export const getOne = (bookId) => request.get(`${baseUrl}/${bookId}`) 

export const remove = (bookId) => request.del(`${baseUrl}/${bookId}`)

export const edit = (bookId, bookData) => request.put(`${baseUrl}/${bookId}`, bookData)