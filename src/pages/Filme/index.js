import {useEffect, useState} from 'react'
import './filme-info.css'
import { useParams, useHistory } from 'react-router-dom'
import api from '../../services/api'
import { toast } from 'react-toastify'



export default function Filme(params) {

    const { id } = useParams()
    const history = useHistory() 

    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        async function loadFilme() {
            const response = await api.get(`r-api/?api=filmes/${id}`)

            if (response.data.length === 0) {
                // verifica se tem alguma coisa na api com tamanho 0 de linha
                //tentou acessar com o id porém não tem esse conteudo
                // depois é enviado para a /home
                history.replace('/')
                return
            }

            setFilme(response.data)
            setLoading(false)
        }

        loadFilme()

        return ()=> {
            console.log("COMPONENTE DESMONTADO")
        }



    }, [history, id])



    function salvaFilme() {
        const minhaLista = localStorage.getItem('filmes')
        let filmesSalvos = JSON.parse(minhaLista) || []

        // se tiver algum filme salvo com mesmo id é necessário ignorar

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)
        //Se for igual ele devolve um TRUE se não for ele devolve um FALSE
    
        if (hasFilme) {
            toast.info('Esse filme já está SALVO.')
            return
            // o return é para parar a execução
        }

        //adiciona o filme
        filmesSalvos.push(filme)
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com sucesso.')

    
    }



    if (loading) {
        return(
            <div className="filme-info">
                <h1>Carregando o filme...</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />
            <h3>Sinopse</h3>
            {filme.sinopse}
        

            <div className="botoes">
                <button onClick={ salvaFilme }>Salvar</button>
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>


        
)
}