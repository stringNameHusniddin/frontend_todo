import axios from 'axios';
import { useState, useEffect } from 'react'
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { RiEdit2Line } from 'react-icons/ri'
import Edit from './edit';
const List = ({ data, setData }) => {
    const [completed, setCompleted] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [id, setId] = useState(1)


    const onDelete = (id) => {
        axios.delete(`api/todo/${id}`).then(
            () => {
                const newData = data.filter(mal => mal.id !== id)
                setData(newData)
            }
        )
    }
    const changeCompleted = (id, value) => {
        axios.patch(`api/todo/${id}/`, value).then(
            res => {
                const newList = res.data
                const newData = data.map(mal => {
                    if (mal.id === id) {
                        return newList
                    }
                    return mal
                })
                setData(newData)
            }
        )
    }

    const completedList = data.filter(mal => mal.completed === true)
    const uncompletedList = data.filter(mal => mal.completed === false)

    return (
        <>
            {isEdit ? <Edit data={data} setData={setData} id={id} setIsEdit={setIsEdit}/> : null}
            <ul className="list-group" style={{ width: "40%", height: 80, margin: "30px auto" }}>
                <h1 style={{ marginBottom: 25 }}>Uncompleted</h1>
                {uncompletedList.map(mal => (
                    <li key={mal.id} className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
                        <div style={{ width: "80%", display: "flex", justifyContent: "flex-start", gap: 10 }}>
                            <input type="checkbox" onClick={() => {
                                changeCompleted(
                                    mal.id,
                                    {
                                        completed: !mal.completed
                                    }
                                )
                            }} />
                            {mal.name}
                        </div>
                        <div style={{ display: "flex", gap: 10 }}>
                            <button onClick={() => { 
                                setIsEdit(true)
                                setId(mal.id)
                                }} 
                            type="button" className="btn btn-outline-secondary"><RiEdit2Line style={{ fontSize: 24 }} /></button>
                            <button onClick={() => { onDelete(mal.id) }} type="button" className="btn btn-outline-danger"><MdOutlineDeleteOutline style={{ fontSize: 24 }} /></button>
                        </div>
                    </li>
                ))}
                <h1 style={{ marginTop: 25 }}>Completed</h1>
                {completedList.map(mal => (
                    <li style={{ textDecoration: "line-through" }} key={mal.id} className="list-group-item list-group-item-light d-flex justify-content-between align-items-center">
                        {mal.name}
                        <button onClick={() => { onDelete(mal.id) }} type="button" className="btn btn-outline-danger"><MdOutlineDeleteOutline style={{ fontSize: 24 }} /></button>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default List