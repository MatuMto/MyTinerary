import { Collapse, Button, Card } from 'reactstrap';
import {useState } from 'react'

const ItineraryCard = ({itineraryData})=>{
   const [isOpen, setIsOpen] = useState(false);
   const [name, setName] = useState('View More')
   const toggle = () => setIsOpen(!isOpen);

   return(
      <div className="itineraryCard-container">
         <div className="data-container">
            <h1 className="itinerary-tittle">{itineraryData.tittle}</h1>
            <div className="author-img" style={{background: `url(${itineraryData.authorImg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
            <p className="author-name">{itineraryData.authorName}</p>
            
            <div className="itinerary-data-container">
               <div className="price-container">
                  <p style={{margin:"0px 10px 0px 0px", fontSize: "20px"}}>Price:</p>
                  {new Array(itineraryData.price).fill(0).map(element => <div key={element._id}> <img src="/icons/dolar.png" alt="dollar" width="35px"/> </div>)}
               </div>
               
               <div className="duration-container">
                  <p style={{margin:"0px 10px 0px 0px"}}>Duration:</p>
                  {new Array(itineraryData.duration).fill(0).map(element => <div key={element._id}> <img src="/icons/clock.png" alt="clock" width="35px" /> </div>)}
               </div>

               <div className="likes-container">
                  <div>
                     <img className="heart-icon" alt="heart" src="/icons/heart.png" width="35px" />
                  </div>
                  <p style={{margin:"0px 10px 0px 10px", fontSize: "30px"}}>0</p>
               </div>
            </div>

            <div className="hashtags-container">
               {itineraryData.hashtags.map(element => <p key={element._id} className="hashtag">#{element}</p> )}
            </div>

               <Button onClick={toggle} style={{ marginBottom: '100px', background: 'rgb(255,223,228)', color:"black", borderRadius: '5px' , border: '4px solid black' }}>View More</Button>
               <Collapse isOpen={isOpen}>
                  <Card className="collapse-section">
                     <img className="underConstruction-img" alt="under construction" src="/img/underConstruction.jpg" />
                  </Card>
                  <div style={{ display: 'flex', justifyContent: 'center'}}>
                     <Button onClick={toggle} style={{ marginBottom: '20px', background: 'rgb(255,223,228)', color:"black", borderRadius: '5px' , border: '4px solid black' }}>View Less</Button>                  
                  </div>
               </Collapse>
         </div>

      </div>
   )
}

export default ItineraryCard