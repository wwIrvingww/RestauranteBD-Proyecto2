import { useEffect, useState } from "react";
import Principalset from "./Principalset";
import Terrazaset from "./Terrazaset";
import VIPset from "./VIPset";

interface ContainerProps { 
    area: string; 
    showButton: number;
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

const Tableset: React.FC<ContainerProps> = ({ area, showButton, setShowButton, myTables, setMyTables }) => {
    
    if (area === 'Terraza') {
        return <Terrazaset 
            showButton={showButton} 
            setShowButton={setShowButton} 
            myTables={myTables}
            setMyTables={setMyTables}
        />;
    } else if (area === 'Salón Principal') {
        return <Principalset 
            showButton={showButton} 
            setShowButton={setShowButton} 
            myTables={myTables}
            setMyTables={setMyTables}
        />;
    } else if (area === 'Sala VIP') {
        return <VIPset 
            showButton={showButton} 
            setShowButton={setShowButton} 
            myTables={myTables}
            setMyTables={setMyTables}
        />;
    }

    return null;
};

export default Tableset;