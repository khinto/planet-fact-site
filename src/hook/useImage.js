import React, { useState } from 'react'
import { usePlanet } from './usePlanet'

export const useImage = () => {

    const planets=usePlanet();
    const [planetImgs,setPlanetImgs]=useState(null);

    planets.map((planet)=>{

        setPlanetImgs(planet.images)
        

        

    })

   



  return planetImgs
}
