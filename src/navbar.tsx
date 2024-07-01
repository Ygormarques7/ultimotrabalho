import { Link } from "react-router-dom"
import './navbar.css'

function ultimo() {
    
    return (
        <div>

            <div className="teste">
                <Link to={"/primeira"} className="dentro" >Teste 01</Link>
            </div>

            <div className="teste">
                <Link to={"/segunda"} className="dentro">Teste 02</Link>
            </div>

            <div className="teste">
                <Link to={"/"} className="dentro">Consertar</Link>
            </div>

        </div>
    )
}

export default ultimo