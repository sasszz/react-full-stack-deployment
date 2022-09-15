import { useOutletContext, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShowRecord = () => {
    const { id } = useParams();
    const { baseUrl } = useOutletContext();
    const [record, setRecord] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/records/${id}`)
            .then((res) => setRecord(res.data))
            .catch((err) => console.log(err));
    });

    return (
        <div className="container">
            {record && (
            <div className="card bg-light text-black mb-3 d-flex justify-content-center">
                <h5 className="card-header text-white">{record.title}</h5>
                <div className="card-body p-4">
                    <div className="row">
                        <div className="col-2">Artist:</div>
                        <div className="col">{record.artist}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Description:</div>
                        <div className="col">{record.description}</div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default ShowRecord