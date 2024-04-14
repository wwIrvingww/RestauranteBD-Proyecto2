import { useEffect, useState } from "react"
import Selector from "../components/Asignacion/Selector"
import Tableset from "../components/Asignacion/Tableset"

interface ContainerProps {  }

const Asignacion: React.FC<ContainerProps> = () => {

    const [area, setArea] = useState('')
    const [showButton, setShowButton] = useState(0)

    return (
        <>
            <Selector area={area} setArea={setArea}/>
            <Tableset area={area} showButton={showButton} setShowButton={setShowButton} />
            {(showButton > 0) && <div>boton</div>}
        </>
    )

}

export default Asignacion