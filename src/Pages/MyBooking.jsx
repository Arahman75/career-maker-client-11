import React from 'react';
import { Link } from 'react-router-dom';

const MyBooking = ({ booking }) => {
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

                <button className="btn btn-success">Pending</button>
            </th>
            <th>

                <button className="btn btn-success">Progress</button>
            </th>
            <th>
                <button className="btn btn-success">Completed</button>
            </th>
        </tr>
    );
};

export default MyBooking;