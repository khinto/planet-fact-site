import React, {  useEffect, useState } from 'react'
import backgroundImg from './background-stars.svg'
import { useSearchPlanet } from '../../hook/useSearchPlanet'

import Imagecomp from '../Imagecomp';


const Tabs=(props)=>{
  


  
 

  
  return(
    <div onClick={props.function} className=' bg-transparent border border- rounded-none
     hover:bg-blue-500 hover:text-white  focus:bg-blue-300 focus:text-red-500 text-blue-700 border-black  py-2 px-4  
      hover:border-transparent     active:bg-black  '  >
        
        
     <p value={props.value}><span className=' text-gray-600 '>{props.numbers} </span> {props.title}</p>

     </div>
  )

}



const Planet = () => {
  const [selectedImage, setSelectedImage] = useState(["planet"]); // Initial image
  
  const {searchplanet,pathname}=useSearchPlanet();

  const handleClickTab=(value)=>{
    setSelectedImage(value);
    
    

  }

  const handlepathChange=()=>{
    

  }


  return (
    
    
    <div className=' bg-[#070724]   min-h-screen' style={{backgroundImage:`url(${backgroundImg})`}}>
      
      

      {searchplanet.map((planet)=>(
        
        
       <div className='flex justify-center justify-around  p-10   '>
        <div className='flex flex-col  justify-center'  >

        {selectedImage.map((imageName)=>(
          <img className={imageName==='geology'? 'geology':'w-100 '}
          key={planet.images[imageName]}
          src={planet.images[imageName]} 
          alt={planet.name} /> 
        ))}
        
        </div>
        <div key={planet.name}>
          
          
        
          

         
        
        
        
        </div>

        
     
      

        <div className='about'>
          <h1>{planet.name}</h1>
          <p>{planet.overview.content}</p>
          <a href={planet.overview.source}>{planet.overview.source}</a>
          
          
          

          <div className='about-tabs'>

                        

          
            
          <Tabs function={()=>handleClickTab(["planet"])} value="planet"   numbers="01" title="OVERVIEW" />
          <Tabs function={()=>handleClickTab(["internal"])} value="internal" numbers="02" title="INTERNAL STRUCTURE"/>
          <Tabs function={()=>handleClickTab(["planet","geology"])} value="surface" numbers="03" title="SURFACE GEOLOGY" />

        </div>
      
        </div>
        
      </div>

      ))}
       
      
      
  



    </div>
  )
}

export default Planet