import {NavLink} from 'react-router-dom'
function CallToAction (){
   return(
      <>
         <div className="callToAction-mainContainer">
            <div className="callToAction-container">
               <div className="ClickHere-button">
                  <NavLink to="/cities" className="ClickHere-button-text">Click Here! <img src="/icons/paper-plane.png" style={{width:'30px', }} /> </NavLink>
               </div>
               <p className="callToAction-text">...and follow the adventure path</p>
            </div>
         </div>
      </>
      )
}

export default CallToAction