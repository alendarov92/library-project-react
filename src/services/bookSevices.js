// First we make the API calls in the separet folder callet 'services'
const baseUrl = 'http://localhost:3030';

export const getAll = () => {
    return fetch(`${baseUrl}/data/books`)
    .then(res => res.json())
}