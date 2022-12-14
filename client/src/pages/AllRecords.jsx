import { Link, useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
// import { compareArtist, compareTitle } from '../sort-utils/Sort.js'

const AllRecords = () => {
    const { sorted } = useOutletContext();
    const [type, setType] = useState('Title');
    // const [sorted, setSorted] = useState([])

    // let sortedFunction = (type) => {
    //     if(type === 'Title') {
    //         setSorted (records.sort(compareTitle))
    //     }
    
    //     else {
    //         setSorted (records.sort(compareArtist))
    //     }
    // }

    const deleteRecord = (id) => {
        axios
            .delete(`http://localhost:8000/api/records/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <div className="container">
            <div className="card bg-primary mb-3 p-2 d-flex justify-content-center">
                <div className="row">
                    <h5 className="col-2 row p-0 m-0 d-flex justify-content-center align-items-center">Title</h5>
                    <h5 className="col-2 row p-0 m-0 d-flex justify-content-center align-items-center">Artist</h5>
                    <h5 className="col row p-0 m-0 d-flex justify-content-center align-items-center">Description</h5>
                    <h5 className="col-1 row p-0 m-0 d-flex justify-content-center align-items-center"></h5>
                    <h5 className="col-1 row m-0 d-flex justify-content-center align-items-center">
                        {/* <select
                            name="type"
                            id="type"
                            className="form-select" 
                            value={type}
                            onChange={((event) => {
                                setType(event.target.value);
                                // sortedFunction(event.target.value)
                            })}
                        >
                            <option value="Artist">Artist</option>
                            <option value="Title">Title</option>
                        </select> */}
                    </h5>
                </div>
            </div>
            {sorted &&
                sorted.map((record) => {
                    return (
                        <div className="card bg-light text-black mb-3 d-flex justify-content-center">
                            <div className="card-body">
                                <div className="row" key={sorted._id}>
                                    <p className="col-2 p-0 m-0 d-flex justify-content-center align-items-center">
                                        <Link className="text-black" to={`/records/${record._id}`}>{record.title}</Link>
                                    </p>
                                    <p className="col-2 p-0 m-0 d-flex justify-content-center align-items-center">{record.artist}</p>
                                    <p className="col p-0 m-0 d-flex justify-content-center align-items-center">{record.description}</p>
                                    <button className="col-1 btn btn-warning btn-sm me-2">
                                        <Link to={`/records/${record._id}/edit`} className="btn btn-warning btn-sm me-2">
                                            Edit
                                        </Link>
                                    </button>
                                    <button onClick={() => deleteRecord(record._id)} className="col-1 btn btn-danger btn-sm me-2">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllRecords