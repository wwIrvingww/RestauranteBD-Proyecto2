import { Link } from 'react-router-dom'
import './Input.css'

interface ContainerProps { }

const LinkLogin: React.FC<ContainerProps> = () => {
    return (
        <Link to='/login' className='a'>
        <b >Iniciar Sesión</b>        
        </Link>
    )
}

export default LinkLogin