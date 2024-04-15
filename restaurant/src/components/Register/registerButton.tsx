import { IonButton } from '@ionic/react'
// import { createUser } from '../../controller/UserController'
import './button.css'
import CryptoJS from 'crypto-js';
import Router from '../Router';
import { useState } from 'react';
import { postear }  from './apifunc';



type User = {
    name: string,
    lastname: string,
    password: string,
    role: string
}

interface ContainerProps {  
    user: User
}

const RegisterButton: React.FC<ContainerProps> = ({ 

    

    

    user }) => {
   

    const handleClick = () => {

        
        if ( (user.lastname != '') && (user.name != '') && (user.password != '') && (user.role != "")) {

            try{
                console.log(user.name)
                console.log(user.lastname)
                console.log( CryptoJS.SHA256(user.password+'').toString(CryptoJS.enc.Hex) )
                console.log( CryptoJS.SHA256(user.password+'').toString(CryptoJS.enc.Hex) )
                console.log(user.role)
                const k = postear(user.name, user.lastname, CryptoJS.SHA256(user.password+'').toString(CryptoJS.enc.Hex), user.role)
                if (k != null){
                    window.location.href = 'http://localhost:8100/login'
                }

                
                
                

            }catch(err){

            }

            
            
            // createUser(user.dpi, user.name, user.lastname, CryptoJS.SHA256(user.password+'').toString(CryptoJS.enc.Hex), user.email, user.tel, user.role)
            
        }
       
    }

    return (
        <IonButton 
            className='buttons' 
            color='secondary'
            onClick={handleClick}
        ><b>Registrarse</b></IonButton>
    )
}

export default RegisterButton