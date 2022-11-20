import axios from "axios";

export const getReservas = () => {
    return axios.get('http://localhost:3000/reservas/')
}

export const getDestinos = () => {
    return axios.get('http://localhost:3000/destinos/')
}


export const editarReserva = (body, id) => {
    return axios.put(`http://localhost:3000/reservas/${id}`, body)
}

export const encontrarReserva = (id) => {
    return axios.get(`http://localhost:3000/reservas/${id}`)
}

export const deleteReserva =(id) => {
    return axios.delete(`http://localhost:3000/reservas/${id}`)
}