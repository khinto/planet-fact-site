import {  useEffect, useState } from 'react'
import backgroundImg from './background-stars.svg'
import { useSearchPlanet } from '../../hook/useSearchPlanet'
import Tabs from '../Tabs';



//className='bg-[#070724] min-h-screen' style={{ backgroundImage: `url(${backgroundImg})` }}

const Planet = () => {
  const [selectedImage, setSelectedImage] = useState(["planet"]); // Initial image
  
  const {searchplanet, pathname}=useSearchPlanet();

  const handleClickTab=(value)=>{
    setSelectedImage(value);
  }

  useEffect(() => {
    
  },[])


  return (
    
    <div>
      
      {searchplanet.map((planet) => (
        <div className='flex  justify-around p-10' key={planet.name}>
          <div className='flex flex-col justify-center'>
            {selectedImage.map((imageName, index) => (
              <img
                className={imageName === 'geology' ? 'geology' : 'w-100'}
                key={index}
                src={planet.images[imageName]}
                alt={planet.name}
              />
            ))}
          </div>
          <div className='flex flex-col gap-2 about'>
            <h1 className='uppercase font-bold text-[70px]'>{planet.name}</h1>
            <p>{planet.overview.content}</p>
            <a href={planet.overview.source}>{planet.overview.source}</a>
            <div className='about-tabs'>
              <ul>
                <li tabIndex="0">
                  <Tabs
                    function={() => handleClickTab(["planet"])}
                    value="planet"
                    numbers="01"
                    title="OVERVIEW"
                  />
                </li>

                <li tabIndex="0">
                  <Tabs
                    function={() => handleClickTab(["internal"])}
                    value="internal"
                    numbers="02"
                    title="INTERNAL STRUCTURE"
                  />
                </li>
              
                <li tabIndex="0">
                  <Tabs
                    function={() => handleClickTab(["planet", "geology"])}
                    value="surface"
                    numbers="03"
                    title="SURFACE GEOLOGY"
                  />
                </li>
              </ul>
              
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Planet