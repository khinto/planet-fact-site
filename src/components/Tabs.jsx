
const Tabs = (props) => {
    
  
  return(
    <div onClick={props.function} className='hover:bg-blue-500 hover:text-white  focus:bg-blue-300 focus:text-red-500 text-blue-700 py-2 px-4  
      hover:border-transparent active:bg-black  '  >
        
        
     <p value={props.value}><span className=' text-gray-600 '>{props.numbers} </span> {props.title}</p>

     </div>
  )

}

export default Tabs