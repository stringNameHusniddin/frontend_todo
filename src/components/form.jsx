import { useState } from 'react'
import axios from 'axios'

const Form = ({data, setData}) => {

  const [name, setName] = useState("")

  const postData = (e)=>{
    e.preventDefault();
    axios.post("/api/todo/", {
      name:name
    }).then(res => {
      setName("")
      const data_r = res.data
      setData(
        [...data, data_r]
      )
    })
  }

  return (
    <div className="input-group mb-3" style={{ width: "40%", margin: "30px auto", height: 50 }}>
      <input type="text" className="form-control" onChange={e => setName(e.target.value)}/>
      <button onClick={postData} className="btn btn-outline-success">Add</button>
    </div>
  )
}

export default Form