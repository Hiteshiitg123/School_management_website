import React from 'react'
import school from '../school.jpeg'


export default function first(props) {
    const handleAdmin = () => {
        props.sp("0")
    }
    const handleTeacher = () => {
        props.sp("1")
    }
    const handleStudent = () => {
        props.sp("2")
    }
    const handleGuest = () => {
        props.sp("3")
    }

    return (
        <div>
            <div className="container mt-2" >
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card" style={{ backgroundColor: "#a7a9ac" }}>
                            <div className="card-body">
                                <h2 className="card-title text-center">My School</h2>
                                <center><img src={school} alt="School" className="school-photo img-fluid mb-3" /></center>
                                <div className="row">
                                    <div className="col-md-3 text-center">
                                        <div className="card" style={{ backgroundColor: "#8b9891" }}>
                                            <div className="card-body">
                                                <h5 className="card-title">Admin</h5>
                                                <button type="button" class="btn btn-outline-primary" onClick={handleAdmin}>Login</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <div className="card" style={{ backgroundColor: "#8b9891" }}>
                                            <div className="card-body">
                                                <h5 className="card-title">Teacher</h5>
                                                <button type="button" class="btn btn-outline-primary" onClick={handleTeacher}>Login</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <div className="card" style={{ backgroundColor: "#8b9891" }}>
                                            <div className="card-body">
                                                <h5 className="card-title">Student</h5>
                                                <button type="button" class="btn btn-outline-primary" onClick={handleStudent}>Login</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <div className="card" style={{ backgroundColor: "#8b9891" }}>
                                            <div className="card-body">
                                                <h5 className="card-title">Guest</h5>
                                                <button type="button" class="btn btn-outline-primary" onClick={handleGuest}>Enter</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
