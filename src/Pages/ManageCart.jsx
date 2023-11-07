import React from 'react';
import { Link } from 'react-router-dom';

const ManageCart = ({ booking }) => {
    // console.log(booking);
    const { serviceName, address, date } = booking;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {date}
            </td>
            <td>
                {address}
            </td>

            <th>
                <Link to="">
                    <button className="btn btn-success">Update</button></Link>
            </th>
            <th>
                <button className="btn btn-error">Delete</button>
            </th>
        </tr>
    );
};

export default ManageCart;