interface ContainerProps { 
    myTables: Array<{
        id: number,
        movable: boolean,
        capacidad: number
    }>,
 }

const Tables: React.FC<ContainerProps> = ({myTables}) => {
    return (
        <div>
            {myTables[0].id.toString()}
        </div>
    )
}

export default Tables