import React from 'react'
import ReactLoading from "react-loading";
import '../../css/homepage.css'
function Loading() {
  return (
    <div>
            <ReactLoading className='reactloadingbars' type="bars" color="#0000FF"
                height={150} width={100} />
    </div>
  )
}

export default Loading