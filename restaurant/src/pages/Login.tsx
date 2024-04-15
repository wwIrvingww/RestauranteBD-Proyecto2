import {
    IonContent,
    IonPage,
    IonInput,
    IonButton,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonList,
} from '@ionic/react';
import './Login.css';

import DpiInput from '../components/Login/dpiInput'
import PasswordInput from '../components/Login/passwordInput'
import LoginButton from '../components/Login/loginButton'
import LinkRegister from '../components/Register/LinkRegister';
import React, { useState } from 'react'


interface LoginProps {
    onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
    const [nombre, setno] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState(false)

    const handleLoginSuccess = () => {
        // Lógica adicional de inicio de sesión, si es necesaria
        onLoginSuccess();
    }

    return(
        <IonPage>
            <div className='login'>
                <DpiInput setnombre={setno} />
                <PasswordInput setPassword={setPassword} validatePassword={validatePassword} setValidatePassword={setValidatePassword}/>
                <div id='loginCenter'>
                    <LoginButton
                        nombre={nombre}
                        password={password}
                        validatePassword={validatePassword}
                        onLoginSuccess={handleLoginSuccess} // Llama a esta función cuando el inicio de sesión es exitoso
                    />
                </div>
                <LinkRegister/>
            </div>
        </IonPage>
    )
}

export default Login;
