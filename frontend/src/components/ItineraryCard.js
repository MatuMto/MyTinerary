import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {useState } from 'react'

const ItineraryCard = ({itineraryData})=>{
   const [isOpen, setIsOpen] = useState(false);
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
                  {new Array(itineraryData.price).fill(0).map(element => <div> <img src="/icons/dolar.png" key={itineraryData._id} width="35px"/> </div>)}
               </div>
               
               <div className="duration-container">
                  <p style={{margin:"0px 10px 0px 0px"}}>Duration:</p>
                  {new Array(itineraryData.duration).fill(0).map(element => <div> <img src="/icons/clock.png" width="35px" /> </div>)}
               </div>

               <div className="likes-container">
                  <div>
                     <img className="heart-icon" src="/icons/heart.png" width="35px" />
                  </div>
                  <p style={{margin:"0px 10px 0px 10px", fontSize: "30px"}}>0</p>
               </div>
            </div>

            <div className="hashtags-container">
               {itineraryData.hashtags.map(element => <p className="hashtag">#{element}</p> )}
            </div>

               <Button onClick={toggle} style={{ marginBottom: '100px', background: 'white', color:"black" }}>View More</Button>
               <Collapse isOpen={isOpen}>
               <Card className="collapse-section">
                  <img className="underConstruction-img" src="/img/underConstruction.jpg" />
                  {/* <CardBody>
                  Anim pariatur cliche reprehenderit,
                  enim eiusmod high life accusamus terry richardson ad squid. Nihil
                  anim keffiyeh helvetica, craft beer labore wes anderson cred
                  nesciunt sapiente ea proident.
               </CardBody> */}
               </Card>
               </Collapse>

            {/* <button>View More</button> */}
         </div>

      </div>
   )
}

export default ItineraryCard