import Principalset from "./Principalset"
import Terrazaset from "./Terrazaset"

interface ContainerProps { area: string }

const Tableset: React.FC<ContainerProps> = ({area}) => {
    
    if (area == 'Terraza') {
        return (
            // <Terrazaset />
            'a'
        )
    } else if (area == 'Salón Principal') {
        return (
            <Principalset />
            
        )
    } else if (area == 'Sala VIP') {
        return 'b'
    }
}

export default Tableset