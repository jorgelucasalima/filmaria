// base url > https://sujeitoprogramador.com/
// /r-api/?api=filmes/ > todos os filmes
// /r-api/?api=filmes/123 > filme com seu id

import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
})

export default api