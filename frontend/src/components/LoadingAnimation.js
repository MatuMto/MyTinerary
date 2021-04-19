import React from 'react';
import ReactLoading from 'react-loading';

const LoadingAnimation = ({ bars, white })=>{
   return(
      <ReactLoading type={bars} color={white} height={667} width={375} />
   )
}

export default LoadingAnimation