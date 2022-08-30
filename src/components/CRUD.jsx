import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'
const CRUD = () => {
    const context = useContext(noteContext)
    const {UpdateData,deleteData,seedata} = context
    let result = true;
    if (!(seedata.subject === ' ' && seedata.topic=== ' ')) {
       result=false;
    } 

    const handleupdate = ()=>{
      UpdateData();
    }
    const handledelete = ()=>{
        if (window.confirm(`Want to delete ${seedata.topic} ?`)) {
        deleteData();
        }
    }
    
    
  return (

    <div className='container border rounded-2 my-3'>
        <div className="d-flex px-1 py-3 align-items-center justify-content-between">
            <span>{seedata.subject} &rarr; {seedata.topic}</span>
            <span className="icon">
            <button disabled = {result} type="button " onClick ={handleupdate} className="mx-2 btn btn-primary">
              Update
            </button>
            <button disabled = {result}  type="button "  onClick ={handledelete} className=" mx-2 btn btn-primary">
               Delete
            </button>
            </span>
        </div>
    </div>
  )
}

export default CRUD