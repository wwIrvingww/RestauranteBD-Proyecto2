import { useEffect, useState } from "react";
import Principalset from "./Principalset";
import Terrazaset from "./Terrazaset";
import VIPset from "./VIPset";
import { getMesas } from "../Controladores/controller";

interface ContainerProps { 
    area: string; 
    showButton: number;
    setShowButton: (showButton: number) => void
}

const Tableset: React.FC<ContainerProps> = ({ area, showButton, setShowButton }) => {
    
    if (area === 'Terraza') {
        return <Terrazaset showButton={showButton} setShowButton={setShowButton}/>;
    } else if (area === 'Salón Principal') {
        return <Principalset showButton={showButton} setShowButton={setShowButton}/>;
    } else if (area === 'Sala VIP') {
        return <VIPset showButton={showButton} setShowButton={setShowButton}/>;
    }

    return null;
};

export default Tableset;