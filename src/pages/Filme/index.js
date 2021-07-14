import {useEffect, useState} from 'react'
import './filme-info.css'
import { useParams } from 'react-router-dom'
import api from '../../services/api'


export default function Filme(params) {

    const { id } = useParams()
    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        async function loadFilme() {
            const response = await api.get(`r-api/?api=filmes/${id}`)

            setFilme(response.data)
            setLoading(false)
        }

        loadFilme()

    }, [id])


    if (loading) {
        return(
            <div className="filme-info">
                <h1>Carrendo o filme...</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <div className="filme">
                <div>
                    <strong>{filme.nome}</strong>
                    <img src={filme.foto} alt={filme.nome} />
                    <p>{filme.sinopse}</p>
                </div>
            </div>
        </div>


        
)
}