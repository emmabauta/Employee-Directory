import React, { useState, useEffect } from "react";
import DataContext from "../utils/DataContext";
import API from "../utils/API";
// import DataTable from "./DataTable";

const DataRow = ({
    image, firstName,lastName,phoneNumber, email, dob
}) => {
    const [rowState, setRowState] = useState({
        users: []
    });
    useEffect(() => {
        API.getUsers().then(results => {
            //console.log(results.data.results);
            setRowState({
                rowState,
                users: results.data.results
            });
        });
    }, [])
 
    return (
        <DataContext.Provider
            value={{ rowState }}
        >
            <tr class="col-xs-12">
                    <td class="col-md-3 align-middle"> <img src = {image}/> </td>
                    <td class="col-md-3 align-middle">{firstName} {lastName}</td>
                    <td class="col-md-2 align-middle">{phoneNumber}</td>
                    <td class="col-md-2 align-middle">{email}</td>
                    <td class="col-md-2 align-middle">{dob}</td>
                </tr>
        </DataContext.Provider>
    );
};
export default DataRow
