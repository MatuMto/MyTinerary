import React from 'react';
import ReactLoading from 'react-loading';

const LoadingAnimation = ({ bars, white })=>{
   return(
      <div style={{margin: '0 auto'}}>
         <ReactLoading type={bars} color={white} height={667} width={375} />
      </div>
   )
}

export default LoadingAnimation