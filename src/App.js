import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Catalogo from './pages/Catalogo'
import Eventos from './pages/Eventos'
import Login   from './pages/Login'
import Registro from './pages/Registro'
 

class App extends React.Component {

    constructor(props) {
        super()
    }


    render() {
        return (
            
            <Router>
                <Routes>
                    <Route path="/" element={<Catalogo />} />
                    <Route path="/eventos" element={<Eventos />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
 
 
                </Routes>
            </Router>
        )
    }
}

export default App