import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { compareArtist } from '../sort-utils/Sort.js'


const Records = () => {
    const baseUrl = 'http://localhost:8000/api/records';
    const [records, setRecords] = useState([]);
    const [sorted, setSorted] = useState([])

    let sortedFunction = () => {
        setSorted (records.sort(compareArtist))
    }

    useEffect(() => {
        axios.get(baseUrl)
            .then((res) => {
                setRecords(res.data)
                sortedFunction(records)
            })
            .catch(err => console.log(err));
    })

    return (
        <div className="mt-3">
            <Outlet context={{ sorted, setSorted }}/>
        </div>
    )
}

export default Records