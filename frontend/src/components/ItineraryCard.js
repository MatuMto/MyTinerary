import { Collapse, Button, Card } from 'reactstrap';
import {useState } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

const ItineraryCard = ({itineraryData, userLogged})=>{
   var [itineraryLikes, setItineraryLikes] = useState(itineraryData.likes.length)
   const [itineraryActivities, setItineraryActivities] = useState([])
   const [isOpen, setIsOpen] = useState(false);
   
   const viewMoreFunction = async()=>{
      setIsOpen(!isOpen);
      const response = await axios.get('http://localhost:4000/api/activities/' + itineraryData._id)
      await setItineraryActivities(response.data.response)
   }
   
   const likeItinerary = async()=>{  
      const sendLike = await axios.post('http://localhost:4000/api/likeItinerary', {userId: userLogged.userId, itineraryId: itineraryData._id})
      setItineraryLikes(sendLike.data.itineraryLikes)
      console.log(sendLike.data) 
   }
   
   
   console.log(itineraryData)
   return(
      <div className="itineraryCard-container">
         <div className="data-container">
            <h1 className="itinerary-tittle">{itineraryData.tittle}</h1>
            <div className="author-img" style={{backgroundImage: `url(${itineraryData.authorImg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
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
                  <div className="heart-icon-container" onClick={likeItinerary} >
                     <img className="heart-icon" alt="heart" src="/icons/heart.png" width="35px" /> 
                     {/* <i class="far fa-heart"></i> */}
                  </div>
                  <p style={{margin:"0px 10px 0px 10px", fontSize: "30px"}}>{itineraryLikes}</p>
               </div>
            </div>

            <div className="hashtags-container">
               {itineraryData.hashtags.map(element => <p key={element._id} className="hashtag">#{element}</p> )}
            </div>

               <button onClick={viewMoreFunction} className={ isOpen ? "displayNone" : "viewMore-button"} >View More</button>
               <Collapse isOpen={isOpen}>
                  <Card className="collapse-section">

                     <div className="activities-container">
                        {itineraryActivities.map( activity => {
                           return <div className="activity" style={{backgroundImage: `url(${activity.img})`}} ></div>
                        } )}
                     </div>

                     <div className="comments-container">
                        <input type="text" className="comments-input" placeholder="Leave your comment" />
                        {/* <img/> */}
                        <i class="fab fa-accessible-icon"></i>
                     </div>
                  </Card>
                  <div className="viewLess-button-container">
                     <button onClick={viewMoreFunction} className="viewLess-button">View Less</button>                  
                  </div>
               </Collapse>
         </div>

      </div>
   )
}

const mapStateToProps = (state)=>{
   return {
      userLogged: state.auth.userLogged,
      cities: state.itineraries
   }
}

export default connect(mapStateToProps)(ItineraryCard)
// export default ItineraryCard