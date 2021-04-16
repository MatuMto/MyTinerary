import {NavLink} from 'react-router-dom'
import CityCard from '../components/CityCard'
import {useState} from 'react'

const Cities = ()=>{
   const citiesData = [
      [
         {cityName: 'Buenos Aires', country:'Argentina', id: 1, img:'buenos-aires.jpg'},
         {cityName: 'Rio de Janeiro', country:'Brazil', id: 2, img:'rio-de-janeiro.jpg'},
         {cityName: 'Stockholm', country:'Sweden', id: 3,  img:'estocolmo.jpeg'},
         {cityName: 'Amsterdam', country:'Netherlands', id: 4,  img:'amsterdam.jpg'},
      ],[
         {cityName: 'Paris', country:'France', id: 5, img:  'paris.jpg'},
         {cityName: 'Rome', country:'Italy', id: 6, img:  'rome.jpg'},
         {cityName: 'Helsinki', country:'Finland', id: 7, img:  'helsinki.jpg'},
         {cityName: 'Berna', country:'Switzerland', id: 8, img:  'berna.jpg'},
      ],[
         {cityName: 'Madrid', country:'Spain', id: 9, img:  'madrid.jpg'},
         {cityName: 'Oslo', country:'Norway', id: 10, img:  'oslo.jpg'},
         {cityName: 'Copenhagen', country:'Denmark', id: 11, img:  'copenhague.jpg'},
         {cityName: 'Wellington', country:'New Zealand', id: 12, img:  'wellington.jpg'},
      ],[
         {cityName: 'New York', country:'United States', id: 13, img:  'new york.jpg'},
         {cityName: 'Miami', country:'United States', id: 14, img:  'miami.jpg'},
         {cityName: 'Dubai', country:'United Arab Emirates', id: 15, img:  'monaco.jpg'},
         {cityName: 'Tokyo', country:'Japan', id:16, img:  'tokyo.jpg'},
      ]
   ]


   var [filterValue, setFilterValue] = useState('')
   // var [noShownCards, setNoShownCards] = useState(0)
   var [aCardIsShown, setACardIsShown] = useState(true)

   const citiesFilter = (e)=>{

      var inputValue = e.target.value
      setFilterValue(filterValue = inputValue.trim())
   }
   var mostrarValor = (e)=>{
      console.log(e.target.value)
   } 
   return(
      <>
      
         <NavLink to="/">Home</NavLink>
            
         <div className="cities-container">
            <input onChange={citiesFilter} onClick={mostrarValor} type="text" style={{margin: '0 auto'}} />
         </div>

         {citiesData.map((array)=>{
            return(
               array.map((element)=>{
                  // var nombre = 'matumto'
                  // nombre.slice(0,3) = mat | empieza en 0, termina en 2
                  if(element.cityName.toLowerCase().slice(0, filterValue.length) === filterValue.toLocaleLowerCase()){
                     console.log('Me encontraste!')
                     return <CityCard location={element} key={element.id} />
                  }else{
                     // console.log(noShownCards)
                  }
                        
                        
                     // }
                  // return <CityCard location={location} key={location.id} /> 
               })
            )
         })}


      </>
   )
}

export default Cities