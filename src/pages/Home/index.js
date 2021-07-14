import { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import api from '../../services/api'


export default function Home() {

    const [filmes, setFilmes] =useState([])

    useEffect(()=> {
        async function loadFilmes() {
            // https://sujeitoprogramador.com/ + r-api/?api=filmes/
            const response = await api.get('r-api/?api=filmes/')
            //console.log(response.data)
            setFilmes(response.data)
        }


        loadFilmes()
    }, [])



    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                        <article key="{filme.id}">
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto} alt={filme.nome} />
                            <Link to="/">Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}