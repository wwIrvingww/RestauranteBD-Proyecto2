import Principalset from "./Principalset"
import Terrazaset from "./Terrazaset"
import VIPset from "./VIPset"

interface ContainerProps { area: string }

const Tableset: React.FC<ContainerProps> = ({area}) => {
    
    if (area == 'Terraza') {
        return (
            <Terrazaset />
        )
    } else if (area == 'Salón Principal') {
        return (
            <Principalset />
            
        )
    } else if (area == 'Sala VIP') {
        return (
            <VIPset />
        )
    }
}

export default Tableset