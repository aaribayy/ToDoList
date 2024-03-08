import React, {useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

function UpdateTask() {
    const {id} = useParams()
    // const [name, setName] = useState()
    // const [email, setEmail] = useState()
    // const [age, setAge] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [status, setStatus] = useState()
    const [deadline, setDeadline] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3001/getTask/'+id)
        .then(result => {
            console.log(result)
            setTitle(result.data.title)
            setDescription(result.data.description)
            setStatus(result.data.status)
            setDeadline(result.data.deadline)
        })
        .catch(err=>console.log(err))
    },[]  )

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateTask/"+id,{title,description,status,deadline})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (
    <div  className='d-flex vh-100 text-bg-info p-3 bg-opacity-25  justify-content-center align-items-center' >
        <div className='w-50 bg-primary bg-opacity-25 rounded p-3'>
        <form onSubmit={Update}>
            <h2 style={{textAlign:"center"}}>Update Task</h2>
            <div className='mb-2'>
                <label htmlFor="">Title</label>
                <input type="text" placeholder='Enter Title' className='form-control'
                value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Description</label>
                <input type="text" placeholder='Enter Description' className='form-control'
                value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Status</label>
                <input type="text" placeholder='Enter Status' className='form-control'
                value={status} onChange={(e) => setStatus(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Deadline</label>
                <input type='date' placeholder='Enter Deadline' className='form-control'
                value={deadline} onChange={(e) => setDeadline(e.target.value)}/>
            </div>
            <button className='btn btn-primary'>Update</button>
        </form>
    </div>
</div>
  )
}

export default UpdateTask;