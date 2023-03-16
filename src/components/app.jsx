import {useEffect, useState} from 'react'
import axios from 'axios'
import Navbar from './navbar'
import List from './list'
import Form from './form'

const App = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get("/api/todo/").then(res => {
            setData(res.data)
        })
    }, [])

    return (
        <div>
            <Navbar/>
            <Form data={data} setData={setData}/>
            <List data={data} setData={setData}/>
        </div>
    )
}

export default App