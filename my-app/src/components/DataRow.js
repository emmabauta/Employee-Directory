import React, { useState, useEffect } from "react";
import DataContext from "../utils/DataContext";
import API from "../utils/API";
// import DataTable from "./DataTable";

const DataRow = ({
    image, name, phoneNumber, email, dob
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
                    <th class="col-md-3 align-middle"> <img src = {image}/></th>
                    <th class="col-md-3 align-middle">{name.first}{name.last}</th>
                    <th class="col-md-2 align-middle">{phoneNumber}</th>
                    <th class="col-md-2 align-middle">{email}</th>
                    <th class="col-md-2 align-middle">{dob}</th>
                </tr>
        </DataContext.Provider>
    );
};
export default DataRow
