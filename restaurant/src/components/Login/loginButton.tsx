import React from 'react';
import { IonButton } from '@ionic/react';
import { getuserpas } from './loginuse';
import CryptoJS from 'crypto-js';
import { useHistory } from 'react-router-dom'; // Importa useHistory

interface LoginButtonProps {
    nombre: string;
    password: string;
    validatePassword: boolean;
    onLoginSuccess: () => void; // Propiedad onLoginSuccess
}

const LoginButton: React.FC<LoginButtonProps> = ({
    nombre,
    password,
    validatePassword,
    onLoginSuccess,
}) => {
    const history = useHistory(); // Obtiene el objeto de historial

    const handleClick = async () => {
        try {
            const estado = await getuserpas(
                nombre,
                CryptoJS.SHA256(password + '').toString(CryptoJS.enc.Hex)
            );

            if (estado === true) {
                console.log("Has iniciado sesión correctamente");
                onLoginSuccess(); // Llama a la función proporcionada por el padre cuando el inicio de sesión es exitoso
                history.push("/folder/Asignación"); // Redirige a la página deseada
            } else {
                console.log("Usuario no encontrado");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <IonButton
            style={{ margin: '20px' }}
            color='secondary'
            onClick={handleClick}
        ><b>Iniciar sesión</b></IonButton>
    )
}

export default LoginButton;
