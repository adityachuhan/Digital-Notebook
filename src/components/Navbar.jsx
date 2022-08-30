import React,{useState,useContext,useRef} from 'react'
import noteContext from '../context/notes/noteContext'
import LoadingBar from 'react-top-loading-bar'
const Navbar = (props) => {
  const [note, setnote] = useState({subject:' ',topic:' ',Notes:' '})
  const context = useContext(noteContext)
  const {sendData,Progress}=context;
  const gig = useRef(null)
  const esubject = useRef(null)
  const etopic = useRef(null)
  const enotes = useRef(null)

  const handleSumbit = (e)=>{

    e.preventDefault()
    gig.current.click();
    sendData(note.subject,note.topic,note.Notes)
    esubject.current.value = ''
    etopic.current.value = ''
    enotes.current.value = ''
    console.log('NEW NOTE '+ note.subject + note.topic + note.Notes );
  }
  const onChange = (e)=>{
      setnote({...note, [e.target.name]: e.target.value})
}

  return (
    <>
     <LoadingBar
        height={3}
        color='#f11946'
        progress={Progress} 
      />
    <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand text-light" href="/"><i className="fa-solid fa-book"></i>Digita Notebook</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add New Note
            </button>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      {/* modalbody */}
                      <form onSubmit={handleSumbit} >
                        <div className="mb-3">
                          <label  htmlFor="exampleInputEmail1" className="form-label">Subject</label>
                          <input ref = {esubject} type="text" required onChange={onChange} name='subject' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="exampleInputPassword1" className="form-label">Topic</label>
                          <input ref = {etopic} type="text" required onChange={onChange} name='topic' className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="exampleInputPassword2" className="form-label">Notes</label>
                          <textarea ref={enotes} style={{height: '190px'}} type="text" required onChange={onChange} name='Notes' className="form-control" id="exampleInputPassword2"/>
                        </div>
                        <button type="submit"  className="btn btn-primary">Submit</button>
                        <button ref={gig} data-bs-dismiss="modal" className="btn btn-primary d-none">nothing</button>
                      </form>
                      {/* modalbody */}
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </div>

</nav>
    </>
  )
}

export default Navbar