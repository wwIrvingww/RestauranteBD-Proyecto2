import { IonCard, IonContent } from "@ionic/react"
import { useEffect, useState } from "react"
import ButtonLeft from "./ButtonLeft"
import AreaName from "./AreaName"
import ButtonRight from "./Buttonright"
import { getAreas } from '../Controladores/controller'

interface ContainerProps { 
    area : string,
    setArea: (area : string) => void
 }

const Selector: React.FC<ContainerProps> = ({area, setArea}) => {
    
    
    const [index, setIndex] = useState(0)
    const [areaList, setAreaList] = useState<string[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const areas = await getAreas()
                setAreaList(areas.map((area: { nombre: string }) => area.nombre))
            } catch (error) {
                console.error('Error fetching areas:', error)
            }
        };
    
        fetchData()
      }, []);

      useEffect(() => {
        setArea(areaList[index])
      }, [areaList, index])


    return (
        <>
            <IonCard style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <ButtonLeft areaList={areaList} index={index} setArea={setArea} setIndex={setIndex}/>
                <AreaName name={area} />
                <ButtonRight areaList={areaList} index={index} setArea={setArea} setIndex={setIndex}/>
            </IonCard>
        </>
    )
}

export default Selector