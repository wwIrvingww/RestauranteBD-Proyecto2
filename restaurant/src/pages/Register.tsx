import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonFooter } from '@ionic/react'
import UserInput from '../components/Register/userInput'
import LastnameInput from '../components/Register/lastnameInput'
import PasswordInput from '../components/Register/passwordInput'
import Confirmation from '../components/Register/Confirmation'
import RoleInput from '../components/Register/roleInput'
import RegisterButton from '../components/Register/registerButton'
import LinkLogin from '../components/Register/LinkLogin'
import React, { useState } from 'react'
import './Register.css'

type User = {
    name: string,
    lastname: string,
    password: string,
    role: string
}

const Register: React.FC = () => {    
    const [name , setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [password, setPassword] = useState('')
    const [confirmation, setConfirmation] = useState('')
    const [role, setRole] = useState('')

    //Validation variables
    
    const User : User = {
        name : name,
        lastname: lastname,
        password: password,
        role: role
    }

    return (
        <IonPage>
            <IonHeader className='headerR'>
                <IonToolbar color='tertiary'>
                    <IonTitle size='large' className='headerR'>Registrar sesión</IonTitle>
                </IonToolbar>
            </IonHeader>
            <div className='center'>
                <div className='space'></div>
                <div className='component'>
                    <UserInput setName={setName}/>
                </div>
                <div className='component'>
                    <LastnameInput setLastname={setLastname} />
                </div>
                <div className='component'>
                    <PasswordInput setPassword={setPassword} />
                </div>
                <div className='component'>
                    <Confirmation setConfirmation={setConfirmation}  password={password}/>
                </div>
                <div className='component' >
                    <RoleInput setRole={setRole} />
                </div>
                <div className='component'>
                    <RegisterButton 
                        user={User}
                        
                    />
                    <div style={{display:'flex', position:'relative' ,right:'10vw' }}>
                    <LinkLogin />
                </div>
                    
                </div>
            
                
               
            </div>
            <IonFooter >
                <div className='footer'></div>
            </IonFooter>
        </IonPage>
    )
}

export default Register