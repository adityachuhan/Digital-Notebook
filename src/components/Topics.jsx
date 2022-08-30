import React,{useContext,useState} from 'react'
import noteContext from '../context/notes/noteContext'
const Topics = (props) => {
  const context = useContext(noteContext)
  const [note, setnote] = useState({subject:props.subject,topic:props.topic,note:props.note})
  const{setseedata}=context
  const handleClick=()=>{
    setseedata({
      subject:note.subject,
      topic:note.topic,
      note:note.note
    })
  }

  return (
    <>
      <p className='border-bottom' onClick={handleClick} style={{padding:'12px',margin:'0px'}}>{props.topic}</p>
    </>
  )
}

export default Topics