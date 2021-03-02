import DataRow from './DataRow';
import React, { useContext } from "react";
import DataContext from '../utils/DataContext'
const DataTable = () => {
    const context = useContext(DataContext);
    console.log(context);
    console.log(context.users);

    return (
        <div className="datatable mt-5">
            <table id="table" className="table table-striped table-hover table-condensed">
                <thead>
                    <tr className="headers col-xs-12">
                    <th className="col-md-3 align-middle">Image</th>
                    <th className="col-md-3 align-middle">Name</th>
                    <th className="col-md-2 align-middle">Phone Number</th>
                    <th className="col-md-2 align-middle">Email</th>
                    <th className="col-md-2 align-middle">DOB</th>
                </tr></thead>
                <tbody>
                    {/* pass users and map over the users and for each user return DataRow */}
                {!context.users ? (
                    <></>
                ) : (
                        context.data.results.map(user => {
                            return (
                                <DataRow image={user.picture}
                                    name={user.name}
                                    phoneNumber={user.phone}
                                    email={user.email}
                                    dob={user.dob}/>
                            );
                        })
                    )
                }
                </tbody>
                             
            </table>
        </div>
    );
}

export default DataTable;