import noteContext from "./noteContext";
import {useState} from 'react'

const NoteState =  (props)=>{
  // state to manage the upper loading bar
  const [Progress, setProgress] = useState(0)
//  state to set loading 
  const [loading, setloading] = useState(false)
    // state to parse array data from json 
     const [data, setdata] = useState([])
    //  array which gonna store the parse data
     let cleandata=[]
    //  state to show notes in the textarea section
     const [seedata, setseedata] = useState({subject:' ',topic:' ',note:' '})
//  function to get data from database and setting it up in the upper give state of array
    const getdata = async()=>{
      setloading(true)
        const response = await fetch('https://digital-notebook-97645-default-rtdb.firebaseio.com/xml.json')
        const parsedata = await response.json()
    for (const key in parsedata) {
        if (Object.hasOwnProperty.call(parsedata, key)) {
            const element = parsedata[key];
            cleandata.push(element)
        }
    }
    console.log('pain in ass is still there or not just checking');
    setdata(cleandata);
    setProgress(100)
}
// DELTE FUNCTION USE TO DELETE
  

    // Function to update the note in database
    const UpdateData = async ()=>{
        setProgress(30)
          const response = await fetch(`https://digital-notebook-97645-default-rtdb.firebaseio.com/xml/${seedata.subject}/topicnode/${seedata.topic}.json`, {
            method: 'PUT', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({note:seedata.note,topic:seedata.topic}) 
          });
          setloading(false)
          setProgress(75)
      
      }
     

    // Function to delete the note in database
    const deleteData = async ()=>{
        setProgress(35)
          const response = await fetch(`https://digital-notebook-97645-default-rtdb.firebaseio.com/xml/${seedata.subject}/topicnode/${seedata.topic}.json`, {
            method: 'DELETE'
          });
          setProgress(75)
          setloading(false)
      }

    //   Function to add notes up in the cloud database
    const sendData = async (subjects,topics,notes)=>{
      setProgress(25)
        const refine = subjects.replaceAll(' ','-')
      const subject=refine.toLocaleUpperCase()
        const topic=topics.toLocaleUpperCase()
        const response1 = await fetch(`https://digital-notebook-97645-default-rtdb.firebaseio.com/xml/${subject}.json`, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({subject:subject}) 
        });
        setProgress(60)
        const response2 = await fetch(`https://digital-notebook-97645-default-rtdb.firebaseio.com/xml/${subject}/topicnode/${topic}.json`, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({note:notes,topic:topic}) 
        });
        setProgress(90)
        setloading(false)
    }

  //  to Add subject
    const sendSubject = async(suject)=>{
      setProgress(25)
      console.log(suject);
      const refine = suject.replaceAll(' ','-')
      const subjectdeclare=refine.toLocaleUpperCase()
      const response1 = await fetch(`https://digital-notebook-97645-default-rtdb.firebaseio.com/xml/${subjectdeclare}.json`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({subject:subjectdeclare}) 
      });
      console.log(response1);
      setProgress(80)
      setloading(false)
    }

  //  Add note in the subject
    const sendTopic = async (subject,topic)=>{
      setProgress(30)
      const subjectdec=subject.toLocaleUpperCase()
      const topicdec=topic.toLocaleUpperCase()
      const response2 = await fetch(`https://digital-notebook-97645-default-rtdb.firebaseio.com/xml/${subjectdec}/topicnode/${topicdec}.json`, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({note:' ',topic:topicdec}) 
        });
        setProgress(70)
        setloading(false)
    }
    // to delete subject from sidebar
    const SubjectDeleteSide = async (subject)=>{
        setProgress(30)
        const response2 = await fetch(`https://digital-notebook-97645-default-rtdb.firebaseio.com/xml/${subject}.json`, {
          method: 'DELETE'
        });
        setProgress(70)
        setloading(false)
    }
     if(!loading){
      getdata();
     }
    return(
        <noteContext.Provider value={{seedata,Progress,SubjectDeleteSide,sendSubject,sendTopic,data,sendData,setseedata,deleteData,UpdateData}}>
            {props.children}
        </noteContext.Provider>
    )

}
export default NoteState;