// import React, { useEffect } from 'react'
import ItineraryTittle from '../components/ItineraryTittle'
import CityCard from '../components/CityCard'
import {NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Itineraries = (props)=>{

   const citiesData = [
      [
         {location: 'Buenos Aires', country:'Argentina', id: 1, img:'buenos-aires.jpg'},
         {location: 'Rio de Janeiro', country:'Brazil', id: 2, img:'rio-de-janeiro.jpg'},
         {location: 'Stockholm', country:'Sweden', id: 3,  img:'estocolmo.jpeg'},
         {location: 'Amsterdam', country:'Netherlands', id: 4,  img:'amsterdam.jpg'},
      ],[
         {location: 'Paris', country:'France', id: 5, img:  'paris.jpg'},
         {location: 'Rome', country:'Italy', id: 6, img:  'rome.jpg'},
         {location: 'Helsinki', country:'Finland', id: 7, img:  'helsinki.jpg'},
         {location: 'Berna', country:'Switzerland', id: 8, img:  'berna.jpg'},
      ],[
         {location: 'Madrid', country:'Spain', id: 9, img:  'madrid.jpg'},
         {location: 'Oslo', country:'Norway', id: 10, img:  'oslo.jpg'},
         {location: 'Copenhagen', country:'Denmark', id: 11, img:  'copenhague.jpg'},
         {location: 'Wellington', country:'New Zealand', id: 12, img:  'wellington.jpg'},
      ],[
         {location: 'New York', country:'United States', id: 13, img:  'new york.jpg'},
         {location: 'Miami', country:'United States', id: 14, img:  'miami.jpg'},
         {location: 'Dubai', country:'United Arab Emirates', id: 15, img:  'monaco.jpg'},
         {location: 'Tokyo', country:'Japan', id:16, img:  'tokyo.jpg'},
      ]
   ]


   // const choosen = 
   const receivedId = props.match.params.id
   console.log(receivedId)


   var [selectedCity, setSelectedCity] = useState('')

   // useEffect(()=>{
      function findSelectedCity(){
         citiesData.map((array)=>{
            array.map((city)=>{
               if (city.id === parseInt(receivedId)){
                  // console.log(city)
                  setSelectedCity(selectedCity = city)
               }
            })
         })
         
      }
   // }, [])
   findSelectedCity()
   // console.log(selectedCity)
   // console.log(selectedCity)
   return (
      <> 
         <ItineraryTittle  />
      </>
   )
}


export default Itineraries


