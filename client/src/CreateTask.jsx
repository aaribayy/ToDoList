import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateTask() {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [status, setStatus] = useState()
    const [deadline, setDeadline] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createTask",{title,description,status,deadline})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex vh-100 text-bg-info p-3 bg-opacity-25  justify-content-center align-items-center' >
        <div className='w-50 bg-primary bg-opacity-25 rounded p-3'>
            <form onSubmit={Submit}>
                <h2 style={{textAlign:"center"}}>Add Task</h2>
                <div className='mb-2'>
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder='Enter Title' className='form-control'
                    onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Description</label>
                    <input type="text" placeholder='Enter Description' className='form-control'
                    onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Status</label>
                    <input type="text" placeholder='Enter Status' className='form-control'
                    onChange={(e) => setStatus(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Deadline</label>
                    <input type='date' placeholder='Enter Deadline' className='form-control'
                    onChange={(e) => setDeadline(e.target.value)}/>
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateTask;