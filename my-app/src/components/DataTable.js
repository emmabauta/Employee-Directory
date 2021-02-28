import React from 'react';
import DataRow from './DataRow';
const DataTable = () => {
    return (
        <div className="datatable mt-5">
            <table id="table" className="table table-striped table-hover table-condensed">
                <thead></thead>
                <tr class="headers col-xs-12">
                    <th class="col-md-3 align-middle">Image</th>
                    <th class="col-md-3 align-middle">Name</th>
                    <th class="col-md-2 align-middle">Phone Number</th>
                    <th class="col-md-2 align-middle">Email</th>
                    <th class="col-md-2 align-middle">DOB</th>
                </tr>
                <thrad>
                    <DataRow/>
                </thrad>
            </table>
        </div>

    );
}
export default DataTable;