import React from 'react'

function Nav({cart}) {
  
  return (
    <div className="nav">

    
        <div className="items">
          <div>home</div>
          <div>about</div>
          <div>shop</div>
          </div>
          <div>Cart{cart}</div> 
        </div>
  )
}

export default Nav