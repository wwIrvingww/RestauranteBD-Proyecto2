import { useState } from "react"
import Selector from "../components/Asignacion/Selector"
import Tableset from "../components/Asignacion/Tableset"

interface ContainerProps {  }

const Asignacion: React.FC<ContainerProps> = () => {

    const [area, setArea] = useState('')

    return (
        <>
            <Selector area={area} setArea={setArea}/>
            <Tableset area={area} />
        </>
    )

}

export default Asignacion