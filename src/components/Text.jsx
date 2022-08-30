import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'
const Text = () => {
  const context = useContext(noteContext)
  // const [note, setnote] = useState({note:' '})
  const{setseedata,seedata}= context
  const onchange = (e)=>{
            setseedata({
              note:e.target.value,
              subject:seedata.subject,
              topic:seedata.topic
  })
}

  return (
    <div className="form-floating">
        <textarea  type='text' className="form-control" name = 'note' value={seedata.note}  onChange = {onchange} placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '426px'}}></textarea>
    </div>
    
  )
}

export default Text