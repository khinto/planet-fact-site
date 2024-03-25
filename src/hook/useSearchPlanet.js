import React from 'react'
import { usePlanet } from './usePlanet'
import { useLocation } from 'react-router-dom';

export const useSearchPlanet = () => {
    const planets=usePlanet(); //call custom hook to get planet array
    const pathname=useLocation().pathname.slice(1) // to remove / from pathname;
    
    const searchplanet=planets?.filter((planet)=>planet.name.toLowerCase().includes(pathname.toLocaleLowerCase())) //get planet data that matches ROUTE

    return {searchplanet,pathname} || []; 
    


}

