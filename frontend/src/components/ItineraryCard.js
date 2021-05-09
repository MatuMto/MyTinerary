import { Collapse, Button, Card } from 'reactstrap';
import {useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { FiHeart } from "react-icons/fi"
import {FaHeart} from "react-icons/fa"
import {FaTrashAlt} from "react-icons/fa"
import {FaRegEdit} from "react-icons/fa"
import {IoSend} from 'react-icons/io5'
import activitiesActions from '../redux/action/activitiesActions'
import itinerariesActions from '../redux/action/itinerariesActions';

const ItineraryCard = (props)=>{
   const {itineraryData, userLogged} = props
   const [totalLikes, setTotalLikes] = useState(itineraryData.likes.length)
   const [liked, setLiked] = useState(false)
   const [itineraryActivities, setItineraryActivities] = useState([])
   const [isOpen, setIsOpen] = useState(false);
   const [marginBottom, setMarginBottom] = useState(false)
   const [allComments, setAllComments] = useState([])
   const [commentContent, setCommentContent] = useState('')
   const [isEditingComment, setIsEditingComment] = useState(false)

   useEffect(()=>{   
      const itineraryLiked = itineraryData.likes.indexOf(userLogged.userId)
      setLiked(itineraryLiked !== -1 && true)
   }, [])

   const viewMoreFunction = async()=>{
      setIsOpen(!isOpen)
      const response = await props.getItineraryActivities(itineraryData._id)
      // console.log(response)
      await setItineraryActivities(response)
      setAllComments(itineraryData.comments)
   }
   
   const likeItinerary = async()=>{  
      setLiked(!liked)      
      setTotalLikes(!liked ? totalLikes + 1 : totalLikes - 1)

      const response = await props.likeItinerary({userId: userLogged.userId, itineraryId: itineraryData._id})
      console.log(response.data)
   }



   const sendComment = async()=>{
      if(commentContent !== ''){
         setCommentContent('') // para resetear el input
         commentContent && console.log('Se mandó el comentario que dice: ' + commentContent)
         const response = await props.sendComment({ userId: userLogged.userId, comment: commentContent, itineraryId: itineraryData._id }) 
         await setAllComments(response.data.response)
      }
   }
    
   
   const deleteSingleComment = async(IDs)=>{
      // console.log('llego aca')
      const response = await props.deleteComment(IDs)
      setAllComments(response)
      // console.log(response)
   }
   

   const editComment = ()=>{
      setIsEditingComment(!isEditingComment)
   }


   return(
      <div className="itineraryCard-container">
         <div className="data-container">
            <h1 className="itinerary-tittle">{itineraryData.tittle}</h1>
            <div className="author-img" style={{backgroundImage: `url(${itineraryData.authorImg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
            <p className="author-name">{itineraryData.authorName}</p>
            
            <div className="itinerary-data-container">
               <div className="price-container">
                  <p style={{margin:"0px 0px 0px 0px", fontSize: "20px"}}>Price:</p>
                  {new Array(itineraryData.price).fill(0).map(element => <div key={element._id}> <img src="/icons/dolar.png" alt="dollar" width="35px"/> </div>)}
               </div>
               
               <div className="duration-container">
                  <p style={{margin:"0px 0px 0px 30px"}}>Duration:</p>
                  {new Array(itineraryData.duration).fill(0).map(element => <div key={element._id}> <img src="/icons/clock.png" alt="clock" width="35px" /> </div>)}
               </div>

               <div className="likes-container">
                  <div className="heart-icon-container" onClick={likeItinerary} >                  
                     <FiHeart className={ liked ? "displayNone" : "heart-icon-disliked"} />
                     <FaHeart className={ liked ? "heart-icon" : "displayNone"} />
                  </div>
                  <p style={{margin:"0px 10px 0px 10px", fontSize: "30px"}}>{totalLikes}</p>
               </div>
            </div>

            <div className="hashtags-container">
               {itineraryData.hashtags.map(element => <p key={element._id} className="hashtag">#{element}</p> )}
            </div>

              
              
              
               <button onClick={viewMoreFunction} className={ isOpen ? "displayNone" : "viewMore-button"} >View More</button>
               <Collapse isOpen={isOpen}>
                  <Card className="collapse-section" style={{marginBottom: `${marginBottom ? '8vh' : '4vh'}`}}>
                  
                     {/* Activities */}
                     <div className="activities-container">
                        {itineraryActivities.map( activity => {
                           console.log(activity)
                           return (
                              <div className="activity" style={{backgroundImage: `url(${activity.img})`}} >
                                 <div className="activityTittleContainer">
                                    <h3>{activity.tittle}</h3>   
                                 </div>
                              </div>
                           )
                        } )}
                     </div>

                     {/* Comments */}

                     <div className="comments-general-container">
                        <div className="all-comments-container">
                           {allComments.map((comment)=>{
                              return (
                                 <div className="comment" >
                                    <div className="x-alineator">
                                       <div>
                                          <div className="authorComment-img" style={{backgroundImage: `url(${comment.userImg})`}} ></div>
                                       </div>
                                       <div className="commentContent-container">
                                          <p className="comment-author" ><strong> {comment.userName} </strong></p>
                                          <p className={!isEditingComment ? "comment-content" : "displayNone"} >{comment.comment}</p>
                                          <input type="text" className={isEditingComment ? "editingInput": "displayNone"} />
                                          <IoSend className={isEditingComment ? "": "displayNone"}/>
                                       </div>

                                       {comment.userId === userLogged.userId && (
                                          <div className="modifyCommentIcons-container">
                                             <FaRegEdit  onClick={editComment} className="edit-icon" />
                                             <FaTrashAlt onClick={()=> deleteSingleComment({itineraryId: itineraryData._id, commentId: comment._id})} className="delete-icon"/>
                                          </div>
                                       )}
                                    </div>
                                 </div>
                              )
                           })}
                        </div>
                        <div className="input-container">
                           <input type="text" value={commentContent} onChange={(e)=> setCommentContent(e.target.value)} className="comments-input" placeholder="Leave your comment!" />
                          
                           <div className="paperPlane-icon" onClick={sendComment}>
                              <FontAwesomeIcon icon={faPaperPlane} />
                           </div>
                        </div>
                     </div>
                  </Card>

                  <div className="viewLess-button-container">
                     <button onClick={()=> setIsOpen(!isOpen)}  className="viewLess-button">View Less</button>                  
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

const mapDispatchToProps = {
   getItineraryActivities: activitiesActions.getItineraryActivities,
   likeItinerary: itinerariesActions.likeItinerary,
   sendComment: itinerariesActions.sendComment,
   deleteComment: itinerariesActions.deleteComment,
   editComment: itinerariesActions.editComment
}

export default connect(mapStateToProps, mapDispatchToProps)(ItineraryCard)
