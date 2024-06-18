import API from './api'

export const login = async (email, password) => {
    try {
        const response = await API.post('/auth/login', { email, password })
        return response.data
    } catch (error) {
        throw error.response.data
    }
}

export const register = async (email, password) => {
    try {
        const response = await API.post('/auth/register', { email, password })
        return response.data
    } catch (error) {
        throw error.response.data
    }
}
