import React from "react";
import { Link } from "react-router-dom";

class Navegacion extends React.Component {

    render() {
        return (
            <>
                <ul>
                    <li>
                        <Link to={'/'}>
                            Catalogo
                        </Link>
                    </li>
                    <li>
                        <Link to={'/eventos'}>
                            Eventos
                        </Link>
                    </li>
                    <li>
                        <Link to={'/login'}>
                            Login
                        </Link>

                    </li>
                    <li>

                        <Link to={'/registro'}>
                            registro
                        </Link>


                    </li>
                    
                </ul>
            </>
        )
    }
}

export default Navegacion