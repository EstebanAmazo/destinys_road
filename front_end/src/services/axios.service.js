import axios from 'axios'

export const obtenerDestinos = () => {
    return axios.get('http://localhost:3000/destinos/')
}

export const guardarReserva = (body) => {
    return axios.post('http://localhost:3000/reservas/', body)
}
