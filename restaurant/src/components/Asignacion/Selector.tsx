import { IonCard, IonContent } from "@ionic/react"
import { useEffect, useState } from "react"
import ButtonLeft from "./ButtonLeft"
import AreaName from "./AreaName"
import ButtonRight from "./Buttonright"
import { getAreas } from '../Controladores/controller'

interface ContainerProps {  }

const Selector: React.FC<ContainerProps> = () => {

    let areaList: string[] = []

    useEffect(() => {
        const fetchData = async () => {
          const areas = await getAreas()
          areaList = areas.map((area: { nombre: string }) => area.nombre)
          setArea(areaList[0])
          console.log(areaList)
        };
    
        fetchData()
      }, []);

    const [area, setArea] = useState('')

    return (
        <>
            <IonCard style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <ButtonLeft area={area} setArea={setArea}/>
                <AreaName name={area} />
                <ButtonRight area={area} setArea={setArea}/>
            </IonCard>
        </>
    )
}

export default Selector