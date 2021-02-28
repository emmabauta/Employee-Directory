import React, { useContext } from "react";
import DataContext from "../utils/DataContext";

const DataRow = () => {
    const { image, name, phoneNumber, email, dob } = useContext(DataContext);
    return () => {
                    <tr>
                        <td data-th="Image">
                            <img
                                src={image}
                                alt={"profile"}
                                className="profile-pic"
                            />
                        </td>
                        <td>
                            <td data-th="Name" className="name">{name.first} {name.last}</td>
                        </td>
                        <td>
                            <td data-th="Phone" className="phonenumber">{phoneNumber}</td>
                        </td>
                        <td>
                            <td data-th="Email" className="email">{email}</td>
                        </td>
                        <td>
                            <td data-th="DOB" className="birth">{dob}</td>
                        </td>
                    </tr>
                }
           }
export default DataRow
