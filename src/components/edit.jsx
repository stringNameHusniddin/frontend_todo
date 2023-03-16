import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Edit = ({data, setData, id, setIsEdit}) => {
    const [name, setName] = useState("")

    const changeName = (id, value) => {
        axios.patch(`api/todo/${id}/`, value).then(
            res => {
                const newList = res.data
                const NewData = data.map(mal => {
                    if (mal.id === id) {
                        return newList
                    }
                    return mal
                })
                setData(NewData)
            }
        )
    }

    return (
        <div className="input-group mb-3" style={{ width: "40%", margin: "30px auto", height: 50 }}>
            <input type="text" className="form-control" onChange={e => setName(e.target.value)} />
            <button onClick={()=>{
                setIsEdit(false)
                changeName(id, {name:name})}
            } 
            className="btn btn-outline-success">Edit</button>
        </div>
    )
}

export default Edit