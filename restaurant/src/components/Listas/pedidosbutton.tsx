import { IonButton } from '@ionic/react'
import './button.css'
import { Link } from 'react-router-dom'
import Listapedidos from './Listapedidos'
import { pedir } from './getpedidos'

// Usercontroller lo tengo que usar para 
// import { userExists } from '../../controller/UserController'


interface ContainerProps { 
    id : String, 

}

const PedirButton: React.FC<ContainerProps> = ({ 
    id

}) => {

    const handleClick = async () => {
        console.log(id)

            try {
                if (id != '') {
                    const dato = await pedir(id+'')
                    console.log(dato);
                    debugger
                    <Listapedidos elementos={dato} id={id+''} ></Listapedidos>
                    
                } else {
                    console.log("Usuario no encontrado");
                }
            } catch (error) {
                console.error("Error:", error);
            }
            
    }    

    return (
        <IonButton 
            style={{display:'flex', margin:'10vw', marginTop:'10px'}}
            color='secondary'
            onClick={handleClick}
        ><b>BUSCAR</b></IonButton>
    )
}

export default PedirButton