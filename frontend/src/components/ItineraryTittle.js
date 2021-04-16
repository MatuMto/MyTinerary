import { useEffect, NavLink } from "react-router-dom"

const ItineraryTittle = ({selectedCity})=>{
   // console.log('estoy en el itineraro' + parseInt(receivedId))
   // console.log(parseInt(receivedId))
   console.log(selectedCity)

   // const citiesData = [
   //    [
   //       {location: 'Buenos Aires', country:'Argentina', id: 1, img:'buenos-aires.jpg'},
   //       {location: 'Rio de Janeiro', country:'Brazil', id: 2, img:'rio-de-janeiro.jpg'},
   //       {location: 'Stockholm', country:'Sweden', id: 3,  img:'estocolmo.jpeg'},
   //       {location: 'Amsterdam', country:'Netherlands', id: 4,  img:'amsterdam.jpg'},
   //    ],[
   //       {location: 'Paris', country:'France', id: 5, img:  'paris.jpg'},
   //       {location: 'Rome', country:'Italy', id: 6, img:  'rome.jpg'},
   //       {location: 'Helsinki', country:'Finland', id: 7, img:  'helsinki.jpg'},
   //       {location: 'Berna', country:'Switzerland', id: 8, img:  'berna.jpg'},
   //    ],[
   //       {location: 'Madrid', country:'Spain', id: 9, img:  'madrid.jpg'},
   //       {location: 'Oslo', country:'Norway', id: 10, img:  'oslo.jpg'},
   //       {location: 'Copenhagen', country:'Denmark', id: 11, img:  'copenhague.jpg'},
   //       {location: 'Wellington', country:'New Zealand', id: 12, img:  'wellington.jpg'},
   //    ],[
   //       {location: 'New York', country:'United States', id: 13, img:  'new york.jpg'},
   //       {location: 'Miami', country:'United States', id: 14, img:  'miami.jpg'},
   //       {location: 'Dubai', country:'United Arab Emirates', id: 15, img:  'monaco.jpg'},
   //       {location: 'Tokyo', country:'Japan', id:16, img:  'tokyo.jpg'},
   //    ]
   // ]
   
   // const choosen = citiesData.map((array)=>{
   //    // return(
   //       array.map((element)=>{
   //          if (element.id === parseInt(receivedId)){
   //             console.log(element)
   //             return (element)
   //          }else{
   //             console.log('no coincido :v')
   //          }
   //       })
   //    // )
   // })

   // console.log(choosen)
   return(
      
      <>
         <NavLink to="/">home</NavLink>
         <h2>Este seria el itinerario de..
            {/* {citiesData.map((array)=>{
               array.map((element)=>{
                  if (element.id === parseInt(receivedId)){
                     return 
                  }
               })
            })} */}
         </h2>

      </>
      ) 
}

export default ItineraryTittle