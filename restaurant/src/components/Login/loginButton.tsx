import { IonButton } from '@ionic/react'
import './button.css'
import { Link } from 'react-router-dom'

// Usercontroller lo tengo que usar para 
// import { userExists } from '../../controller/UserController'
import CryptoJS from 'crypto-js';


interface ContainerProps { 
    dpi : String, 
    validateDpi : Boolean,
    password : String,
    validatePassword : Boolean, 
}

const LoginButton: React.FC<ContainerProps> = ({ 
    dpi, validateDpi, 
    password, validatePassword, 

}) => {

    const handleClick = async () => {
        if (validatePassword && validateDpi ) {  

            CryptoJS.SHA256(password+'').toString(CryptoJS.enc.Hex)

            try {
                // const login = await userExists(dpi, CryptoJS.SHA256(password+'').toString(CryptoJS.enc.Hex));
                const login = true
                if (login) {
                    console.log("Has iniciado sesion correctamente");
                } else {
                    console.log("Usuario no encontrado");
                }
            } catch (error) {
                console.error("Error:", error);
            }
            
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