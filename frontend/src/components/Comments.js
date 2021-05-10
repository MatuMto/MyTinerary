const Comments = ()=>{
    return (
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
                          
                          <p className={userLogged ? comment.userId === userLogged.userId 
                             ? !isEditingComment ? "comment-author" : "displayNone"
                             : "comment-author" 
                          : "comment-author"}>
                             <strong> {comment.userName} </strong>
                          </p>
                          
                          <p className={ userLogged ? comment.userId === userLogged.userId
                                ? !isEditingComment ? "comment-content" : "displayNone"
                                : "comment-content"
                          : "comment-content"
                          } >{comment.comment}</p>
                          
                          {userLogged && comment.userId === userLogged.userId && (
                             <>
                                <input type="text" value={editedComment} onChange={(e)=> setEditedComment(e.target.value)}   className={isEditingComment ? "editingInput": "displayNone"} />
                                <IoSend className={isEditingComment ? "": "displayNone"} 
                                onClick={()=>
                                 sendEditedComment(itineraryData._id, {commentId: comment._id, newComment: editedComment})} />
                             </>
                          )}
                       </div>

                       {userLogged && comment.userId === userLogged.userId && (
                          <div className="modifyCommentIcons-container">
                             <FaRegEdit  onClick={()=>startEditingComment(comment.comment)} className={!isEditingComment ? "edit-icon" : "displayNone"} />
                             <FaTrashAlt onClick={()=> deleteSingleComment({itineraryId: itineraryData._id, commentId: comment._id})} className={!isEditingComment ? "delete-icon" : "displayNone"}/>
                          </div>
                       )}
                    </div>
                 </div>
              )
           })}
        </div>
        <div className="input-container">
           <input type="text" value={commentContent} onChange={(e)=> setCommentContent(e.target.value)} className="comments-input" placeholder="Leave your comment!" />
          
           <div className="paperPlane-icon" onClick={userLogged ? sendComment : ()=>notify('Comment')}>
              <FontAwesomeIcon icon={faPaperPlane} />
           </div>
        </div>
     </div>
    )
}

export default Comments