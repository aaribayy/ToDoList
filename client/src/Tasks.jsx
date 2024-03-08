import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios  from 'axios'

function Tasks() {
    const [tasks,setTasks] = useState([
        // {title:XYZ}
    ])

    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result => setTasks(result.data))
        .catch(err=>console.log(err))
    },[]
    )

    const handleDelete = (id) =>{
        axios.delete('http://localhost:3001/deleteTask/'+id)
        .then(res=>{
             console.log(res)
             window.location.reload()
            })
        .catch(err=>console.log(err))
    }
  return (
    // <div>Tasks</div>
    <div className='d-flex vh-100 text-bg-info p-3 bg-opacity-25  justify-content-center align-items-center' >
        
        <div className='w-50 bg-primary bg-opacity-25 rounded p-3'>
            <h1 style={{textAlign:"center"}}> TASK MANAGEMENT SYSTEM</h1>
            <Link to="/create" className='btn btn-primary'> Create New Task</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Deadline</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task)=>{
                            return <tr>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.status}</td>
                                <td>{task.deadline}</td>
                                <td> 
                                    <Link to={`/update/${task._id}`} className='btn btn-outline-primary'>Update Task</Link><br />
                                <button className='btn btn-outline-danger' onClick={(e) => handleDelete(task._id)}>Delete Task</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Tasks;