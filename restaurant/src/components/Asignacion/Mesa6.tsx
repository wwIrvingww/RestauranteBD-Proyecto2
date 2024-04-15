import { useEffect, useState } from 'react';
import './style.css'

interface ContainerProps { 
    mesaInfo: {
        id: number;
        movable: boolean;
        capacidad: number;
    },
    showButton: number,
    setShowButton: (showButton: number) => void;
    myTables: Array<{
        id: number,
        movable: boolean,
        capacidad: number
    }>,
    setMyTables: (myTables: Array<{
        id: number,
        movable: boolean,
        capacidad: number
    }>) => void
}

const Mesa6: React.FC<ContainerProps> = ({mesaInfo, showButton, setShowButton, myTables, setMyTables}) => {
    const [id, setId] = useState(0)
    const [cap, setCap] = useState(0) 
    const [color, setColor] = useState(0)
    const [click, setClick] = useState(false)
    const [permission, setPermission] = useState(true)

    useEffect(() => {
        const setInfo = () => {
            setId(mesaInfo.id)
            setCap(mesaInfo.capacidad)
        }

        setInfo()
    }, [])

    const onMouseEnter = () => {
        if (permission) {
            setColor(1)
        }
    }

    const onMouseLeave = () => {
        if (permission) {
            setColor(0)
        }
    }

    const onClick = () => {
        if (!click){
            setShowButton(showButton+1)
            setPermission(false)
            setColor(3)
            setClick(true)
        } else {
            setShowButton(showButton-1)
            setPermission(true)
            setColor(1)
            setClick(false)
        }
        
    }

    const colorSet = () => {
        if (color === 0) {
            return 'gray'
        } else if (color === 1) {
            return '#6099bf'
        } else {
            return 'blue'
        }
    }

    return (
        <div className='mesa6' style={{
            backgroundColor: colorSet()
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}>
            <p>{id}</p>
            <p>{mesaInfo.movable.toString()}</p>
            <p>{cap}</p>
        </div>
    )
}

export default Mesa6