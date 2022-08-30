import React,{useRef,useState,useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import Topics from './Topics'
const Subjects = (props) => {
  const context = useContext(noteContext);
  const {sendTopic,SubjectDeleteSide}= context
  const topicdata = []
  for (const key in props.topic) {
    if (Object.hasOwnProperty.call(props.topic, key)) {
      const element = props.topic[key];
        topicdata.push(element)
    }
  }

  const [second, setsecond] = useState({topic : ' '})
  const jome = useRef(null)
  const same = useRef(null)

const handleSumbit = (e)=>{
  e.preventDefault();
  same.current.click();
  sendTopic(props.subject ,  second.topic )
  setsecond({topic:' '})
}

const onChange = (e)=>{
  setsecond({...second, [e.target.name]: e.target.value})
}

  const handleAddtopic = ()=>{
    jome.current.click();
  }
  const handleDeleteSubject = ()=>{
    if (window.confirm(`Want to delete ${props.subject} ?`)) {
      
      SubjectDeleteSide(props.subject)
    }
  }
  return (
    <>
    <div  style={{fontFamily:'monospace' }}>
         <div className="accordion" id="accordionExample">
            <div className="accordion-item border-0 rounded-0">
                <h2 className="accordion-header d-flex border-bottom" id={`heading${props.subject}`}>
                <button className="accordion-button collapsed border-bottom-0 text-secondry" style={{width:'90',backgroundColor:'white',boxShadow:'none'}}  data-bs-toggle="collapse" data-bs-target={`#collapseOne${props.subject}`} aria-expanded="false" aria-controls={`collapseOne${props.subject}`}>
                    {props.subject}
                </button>
                    <i style={{cursor:'pointer',margin:"10px 9px"}} onClick={handleAddtopic} className="fa-thin fa-plus"></i>
                    <i style={{cursor:'pointer',margin:"12px 9px"} }  onClick={handleDeleteSubject}className="fa-solid fa-xmark"></i>
                </h2>
                <div id={`collapseOne${props.subject}`} className="accordion-collapse collapse " aria-labelledby={`heading${props.subject}`} data-bs-parent="#accordionExample">
                <div className="accordion-body px-0 py-0">
                  {
                    topicdata.map((e)=>{
                           return( 
                            <Topics key={e.note} subject={props.subject} topic ={e.topic} note={e.note}/>
                           )
                    })
                  }
                </div>
                </div>
            </div>
          </div>
          <button type="button" ref = {jome} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target={`#${props.subject}staticBackdropb`}>
          Launch static backdrop modal
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id={`${props.subject}staticBackdropb`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${props.subject}staticBackdropbLabel` }aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={`${props.subject}staticBackdropbLabel`}>Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <form onSubmit={handleSumbit} >
                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">Topic</label>
                          <input type="text" required onChange={onChange} name='topic' className="form-control"  aria-describedby="emailfHelp"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
              </div>
              <div className="modal-footer">
                <button type="button" ref = {same} className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* MOddal ends here  */}
        </div>
        
    </>
  )
}

export default Subjects