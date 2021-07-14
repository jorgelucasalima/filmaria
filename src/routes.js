import {BrowserRouter, Route, Switch} from 'react-router-dom'

// import components
import Header from './components/Header'

//import pages
import Home from './pages/Home'
import Filme from './pages/Filme'


const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filme/:id" component={Filme} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes