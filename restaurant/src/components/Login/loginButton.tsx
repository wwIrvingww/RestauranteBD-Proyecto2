import { IonButton } from '@ionic/react'
import './button.css'
import { Link } from 'react-router-dom'
import { getuserpas} from './loginuse'

// Usercontroller lo tengo que usar para 
// import { userExists } from '../../controller/UserController'
import CryptoJS from 'crypto-js';


interface ContainerProps { 
    nombre : String, 
    password : String,
    validatePassword : Boolean, 
}

const LoginButton: React.FC<ContainerProps> = ({ 
    nombre, 
    password, validatePassword, 

}) => {

    const handleClick = async () => {

           

            try {
                const estado = await getuserpas( nombre ,  CryptoJS.SHA256(password+'').toString(CryptoJS.enc.Hex))
                
                if (estado === true) {
                    console.log("Has iniciado sesion correctamente");
                    window.location.href = 'http://localhost:8100/folder/Asignaci%C3%B3n'
                } else {
                    console.log("Usuario no encontrado");
                }
            } catch (error) {
                console.error("Error:", error);
            }
            
    }    

    return (
        <IonButton 
            style={{ margin: '20px'}} 
            color='secondary'
            onClick={handleClick}
        ><b>Iniciar sesión</b></IonButton>
    )
}

export default LoginButton