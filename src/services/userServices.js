// Is used to managed the users!!!

import * as request from "./requester"

const baseUrl = 'http://localhost:3030'

export const login = (email, password) => {
    return request.post(`${baseUrl}/users/login`, { email, password })
}

export const register = (email, password, confirmPass) => {
    return request.post(`${baseUrl}/users/register`, { email, password, confirmPass })
}

export const logout = async (accessToken) => {
    try {
         await fetch(`${baseUrl}/users/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        })
        
    } catch (error) {
        console.log(error);
    }
}
