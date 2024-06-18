import axios from 'axios'

const API = axios.create({
    baseURL: '/api',
})

export const addMessage = async (messageData) => {
    try {
        const response = await API.post('/messages', messageData)
        return response.data
    } catch (error) {
        throw error.response.data
    }
}
