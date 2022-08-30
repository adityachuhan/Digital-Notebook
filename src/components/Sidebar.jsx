import React,{useContext,useRef,useState} from 'react'
import Subjects from './Subjects'
import noteContext from '../context/notes/noteContext'

const Sidebar = () => {
  const context = useContext(noteContext);
  const{data,sendSubject} = context;
   const [first, setfirst] = useState({subject : ' '})
   const jame = useRef(null)
   const some = useRef(null)

   const handleClick = ()=>{
     jame.current.click();
   }
   
   const handleSumbit = (e)=>{
    console.log('calling');
     e.preventDefault()
     some.current.click();
     sendSubject(first.subject);
     setfirst({subject:' '})
   }
   
   const onChange = (e)=>{
    setfirst({...first, [e.target.name]: e.target.value})
}

  return (
    <div  style={{position:'absolute',borderRight:'1px solid',overflow:'auto',fontFamily:'cursive',left:'0px',height:'90.6%',width:'25%',backgroundColor:'white'}}>
      
       <div  style={{display: 'flex',backgroundColor:'gainsboro', padding:'0px 15px',justifyContent:' space-between',alignItems: 'center'}}>
        <h5 className=' text-primary  py-2'>Subjects</h5>
        <i onClick={handleClick} style={{cursor:'pointer'}} className="fa-solid fa-plus"></i>
       </div>
       {
        data.map((e,index)=>{
          return(
            <Subjects key={index} subject= {e.subject} topic = {e.topicnode}/>
          )
        })
       }
       {/* <!-- Button trigger modal --> */}
        <button type="button" ref = {jame} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Launch static backdrop modal
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <form onSubmit={handleSumbit} >
                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">Subject</label>
                          <input type="text" required onChange={onChange} name='subject' className="form-control"  aria-describedby="emailfHelp"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
              </div>
              <div className="modal-footer">
                <button type="button" ref = {some} className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Sidebar