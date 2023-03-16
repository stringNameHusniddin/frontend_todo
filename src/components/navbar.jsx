import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-success" style={{width:"100%",height:80, margin:"0px auto"}}>
            <div className="container-fluid">
                <p className="navbar-brand mb-0 h1" style={{color: "#fff", marginLeft:20}}>ToDo App</p>
            </div>
        </nav>
    )
}

export default Navbar