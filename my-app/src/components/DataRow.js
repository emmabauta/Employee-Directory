import React, { useState, useEffect } from "react";
import DataContext from "../utils/DataContext";
import API from "../utils/API";
import DataTable from "./DataTable";
const DataRow = () => {
    const [rowState, setRowState] = useState({
        users: []
    });
    useEffect(() => {
        API.getUsers().then(results => {
            console.log(results.data.results);
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
            <div className="data-area">
                {rowState.users.length > 0 ? <DataTable /> : <div></div>}
            </div>
        </DataContext.Provider>
    );
};
export default DataRow
