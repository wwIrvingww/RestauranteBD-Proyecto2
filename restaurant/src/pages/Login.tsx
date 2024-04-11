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
import React, { useState } from 'react'


const Login: React.FC = () => {
    const [dpi, setDpi] = useState('')
    const [password, setPassword] = useState('')

    const [validateDpi, setValidateDpi] = useState(false)
    const [validatePassword, setValidatePassword] = useState(false)


    return(
        <IonPage>
            <div className='login'>
                <DpiInput setDpi={setDpi} validateDpi={validateDpi} setValidateBoolean={setValidateDpi}/>
                <PasswordInput setPassword={setPassword} validatePassword={validatePassword} setValidatePassword={setValidatePassword}/>
                <div id='loginCenter'>
                    <LoginButton
                        dpi={dpi}
                        validateDpi={validateDpi}
                        password={password}
                        validatePassword={validatePassword}
                    />
                </div>
            </div>
        </IonPage>
    )
}

export default Login;
