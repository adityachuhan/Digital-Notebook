import React from 'react'
import CRUD from './CRUD'
import Text from './Text'
const Screen = () => {
  
  return (
    <div className='px-3 py-3'  style={{position:'absolute',right:'0px',width:'75%',height:'90.6%'}}>
      <Text/>
      <CRUD/>
    </div>
  )
}

export default Screen